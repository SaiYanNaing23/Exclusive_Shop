import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    try {
        const token = jwt.sign({ id : userId }, process.env.JWT_SECRET, {
            expiresIn : "1d"
        });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 1 * 24 * 60 * 60 * 1000
        });

        return token;
    } catch (error) {
        console.error("Error generating token : ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}