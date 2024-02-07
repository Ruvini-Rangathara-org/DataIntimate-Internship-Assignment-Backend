import express from "express";
import jwt, { Secret } from "jsonwebtoken";
import dotenv from 'dotenv';
import process from "process";

dotenv.config();

export const verifyToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.headers.authorization;
    if (!token || !token.startsWith("Bearer ")) {
        console.error("Invalid token format");
        return res.status(401).json({ error: "Invalid token format" });
    }

    const tokenString = token.split(" ")[1];

    try {
        const secret = process.env.SECRET as Secret;
        console.log("========================================================")
        console.log("secret:", secret);

        const data = jwt.verify(tokenString, secret);
        res.locals.tokenData = data; // Store token data in res.locals for future middleware/routes
        next();
    } catch (error: any) {
        if (error.name === "TokenExpiredError") {
            console.error("Token expired");
            return res.status(401).json({ error: "Token expired" });
        } else {
            console.error("Error:", error.message);
            return res.status(401).json({ error: "Invalid token" });
        }
    }
}
