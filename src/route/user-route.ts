import express from "express";
import * as UserController from "../controller/user-controller";

const router = express.Router();

router.get('/all', UserController.getAllUser)
router.post('/add', UserController.createNewUser)
router.post('/auth', UserController.authUser)
router.delete('/delete', UserController.deleteUser);
router.put('/update', UserController.updateUser);
router.get('/get', UserController.searchUser);

export default router;