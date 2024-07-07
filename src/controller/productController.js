import express from 'express';
import {
    createProduct,
    deleteProduct,
    getAllProduct,
    getProductById,
    updateProduct
} from '../repository/productRepository.js';

const productController = express.Router();

productController.get('/', async (req, res, next) => {
   try{
        const product = await getAllProduct();
        return res.send(product);
   } catch (err){
       next(err)
   }
});

productController.get('/:id', async (req, res, next) => {

    try {
        const id = req.params.id
        const product = await getProductById(id);
        return res.send(product);
    }catch (err){
        next(err);
    }
});


productController.post('/', async (req, res, next) => {
    try{
        if(!req.body.name.isNull){
            if(!req.body.value.isNull){
                await createProduct(req.body.name, parseInt(req.body.value));
                return res.send('Create product success');
            }
        }
    }catch(err){
        next(err);
    }
});

productController.put('/:id', async (req, res, next) => {
   try {
       const id = req.params.id
       await updateProduct(id, req.body);
       return res.send('Product update sucess')
   }catch(err){
       next(err);
   }
});

productController.delete('/:id', async  (req, res, next) => {
    try {
        const id = req.params.id
        await deleteProduct(id);
        return res.send('Product delete success')
    }catch (err){
        next(err);
    }
})

export default productController;