import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';

export const protectRoutes = (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if(! token) return res.status(401).json({ message: 'Unauthorized - No Token', success: false });

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized - Invalid Token', success: false });
            }
            console.log("Decoded token:", decoded);
            const user = await userModel.findById(decoded.id).select('-password');
            if (!user) {
                return res.status(404).json({ message: 'User not found', success: false });
            }
            req.user = user;
            next();
        });

    } catch (error) {
        console.error("Error in protectRoutes middleware:", error);
        return res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}