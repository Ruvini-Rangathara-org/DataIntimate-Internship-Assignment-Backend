import express from "express";
import CustomResponse from "../dto/custom-response";
import Item from "../model/item-model";
import jwt from "jsonwebtoken";

interface ItemRequestBody {
    item_id: number;
    title: number;
    description: string;
    unit_price: number;

}

//get all items
export const getAllItem = async (req: express.Request, res: express.Response) => {
    try {
        let items = await Item.findAll();
        console.log(JSON.stringify(items))
        res.status(200).send(
            new CustomResponse(200, "Items are found successfully", items)
        );
    } catch (error) {
        res.status(100).send("Error")
    }
}

//create new item
export const createNewItem = async (req: express.Request, res: express.Response) => {
    try {
        const req_body: any = req.body;
        console.log("req_body:", JSON.stringify(req_body));

        //get username by token
        const token = req.headers.authorization?.split(' ')[1]; // Assuming token is sent in the
        const decoded: any = jwt.decode(token!);
        const userId = decoded.user.username;
        console.log("username:", userId);

        try {
            const newItem = await Item.create({
                item_id: req_body.item_id,
                title: req_body.title,
                description: req_body.description,
                unit_price: req_body.unit_price,
                username: userId,
            });
            console.log("New item created:", newItem);

            return res.status(200).send(
                new CustomResponse(200, "Item created successfully", newItem)
            );
        } catch (error) {
            console.error("Error creating item:", error);
            return res.status(500).send(
                new CustomResponse(500, "Failed to create item.")
            );
        }
    } catch (error) {
        console.error("Error creating item:", error);
        return res.status(500).send(
            new CustomResponse(500, "Failed to create item.")
        );
    }
}

//delete item
export const deleteItem = async (req: express.Request, res: express.Response) => {
    try {
        const itemId = req.params.itemId;
        console.log("itemId:", itemId);

        try {
            await Item.destroy({ where: { item_id: itemId } });
            return res.status(200).send(new CustomResponse(200, "Item deleted successfully"));
        } catch (error) {
            console.error("Error deleting item:", error);
            return res.status(500).send(new CustomResponse(500, "Failed to delete item"));
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send(new CustomResponse(500, "Error"));
    }
};