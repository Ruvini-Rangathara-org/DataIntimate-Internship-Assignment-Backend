import express from "express";
import * as ItemController from "../controller/item-controller";
import * as middleware from "../middleware/index";

const router = express.Router();

router.get('/all',middleware.verifyToken, ItemController.getAllItem)
router.post('/add',middleware.verifyToken, ItemController.createNewItem)
router.delete('/delete/:id',middleware.verifyToken, ItemController.deleteItem)

export default router;