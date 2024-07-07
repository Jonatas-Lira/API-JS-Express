import express from "express";
import productController from "./controller/productController.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/market', productController);

app.use(errorMiddleware);

dotenv.config();

app.listen(port, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});