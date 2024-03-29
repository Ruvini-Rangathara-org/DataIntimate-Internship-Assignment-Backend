import express from "express";
import * as ItemController from "../controller/item-controller";
import * as middleware from "../middleware/index";

const router = express.Router();

router.get('/all',middleware.verifyToken, ItemController.getAllItem)
router.post('/add',middleware.verifyToken, ItemController.createNewItem)
router.delete('/delete/:id',middleware.verifyToken, ItemController.deleteItem)
router.put('/update',middleware.verifyToken, ItemController.updateItem)
router.get('/get/:id',middleware.verifyToken, ItemController.searchItem)

export default router;