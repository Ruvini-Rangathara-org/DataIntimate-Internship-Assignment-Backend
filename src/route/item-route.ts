import express from "express";
import * as ItemController from "../controller/item-controller";

const router = express.Router();

router.get('/all', ItemController.getAllItem)
// router.post('/', UserController.createNewUser)
// router.post('/auth', UserController.authUser)

export default router;