import express from 'express'
import{
    createDummyTable,
    getDummyTableByCustomer_Name,
    getDummyTableByLocation,

}from "../controllers/fresher_bot.controllers.js"

const router = express.Router();
router.post("/createDummyTable",createDummyTable)
router.get("/getDummyTableByCustomer_Name", getDummyTableByCustomer_Name)


export default router;