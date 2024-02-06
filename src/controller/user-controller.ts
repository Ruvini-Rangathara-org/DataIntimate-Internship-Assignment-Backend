// import express from "express";
// import { User } from "../model/data-model";
// import CustomResponse from "../dto/custom-response";
// import jwt, { Secret } from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import process from "process";
//
//
// //get all users
// export const getAllUser = async (req: express.Request, res: express.Response) => {
//     try {
//         let users = await User.findAll();
//         res.status(200).send(
//             new CustomResponse(200, "Users are found successfully", users)
//         );
//     } catch (error) {
//         res.status(100).send("Error")
//     }
// }
//
// //create new user
// export const createNewUser = async (req: express.Request, res: express.Response) => {
//     try {
//         const req_body: any = req.body;
//
//         await bcrypt.hash(req_body.password, 8, async function (err, hash) {
//             if (err) {
//                 res.status(100).send(
//                     new CustomResponse(100, "Something went wrong.")
//                 )
//             }
//             const user = new User({
//                 username: req_body.username,
//                 fName: req_body.fName,
//                 lName: req_body.lName,
//                 email: req_body.email,
//                 password: hash
//             })
//             let newUser: any = await user.save();
//
//             if (newUser) {
//                 newUser.password = "";
//                 res.status(200).send(
//                     new CustomResponse(200, "User created successfully", newUser)
//                 )
//             } else {
//                 res.status(100).send(
//                     new CustomResponse(100, "Something went wrong.")
//                 )
//             }
//         })
//
//     } catch (error) {
//         res.status(100).send("Error")
//     }
//
// }