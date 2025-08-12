import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

export const signUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(400).json({ message: "All fields are required.", success: false });

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) return res.status(400).json({ message: "Invalid email format.", success: false });

        if(password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters long.", success: false });

        const existingUserByEmail = await User.findOne({ email });
        if (existingUserByEmail) return res.status(400).json({ message : "Email already exists.", success: false });

        const existingUserByName = await User.findOne({ name});
        if (existingUserByName) return res.status(400).json({ message : "Username already exists.", success: false });

        const newUser = new User({ name, email, password });
        await newUser.save();

        if(newUser) generateToken(newUser._id, res);

    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message : "All feilds are required.", success : false});

        const user = await User.findOne({ email }).select("+password");
        console.log("user when logging in: ", user);
        if (!user) return res.status(404).json({ message : "User not found.", success : false });

        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ message : "Invalid credentials.", success : false });

        generateToken(user._id, res);
        return res.status(200).json({ success : true });
    } catch (error) {
        next(error);
    }
}

export const logout = async (req, res, next) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });
        return res.status(200).json({ message: "Logged out successfully.", success: true });
    } catch (error) {
        next(error);
    }
}

export const authCheck = async (req, res, next) => {
    try {
        res.status(200).json({ user : req.user})
    } catch (error) {
        next(error);
    }
}