import Product from "./Models/Product.js";

async function getAllProduct(){
    return await Product.findAll();
}

async function getProductById(id){
    return await Product.findAll({where: {id}});
}

const createProduct = async (name, value) => {
    await Product.create({name, value})
}

async function updateProduct(id, product){
    return await Product.update({name: product.name}, {where: {id}});
}

async function deleteProduct(id){
    return await Product.destroy({where: {id}})
}

export { getAllProduct, getProductById, createProduct, updateProduct, deleteProduct};