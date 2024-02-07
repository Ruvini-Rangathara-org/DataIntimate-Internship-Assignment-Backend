import express from "express";
import * as UserController from "../controller/user-controller";
import * as middleware from "../middleware/index";

const router = express.Router();

router.get('/all',middleware.verifyToken, UserController.getAllUser)
router.post('/add', UserController.createNewUser)
router.post('/auth', UserController.authUser)
router.delete('/delete',middleware.verifyToken, UserController.deleteUser);
router.put('/update',middleware.verifyToken, UserController.updateUser);
router.get('/get',middleware.verifyToken, UserController.searchUser);

export default router;