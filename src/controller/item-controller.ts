import express from "express";
import CustomResponse from "../dto/custom-response";
import Item from "../model/item-model";

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