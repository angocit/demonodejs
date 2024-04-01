import express from 'express';
import { getAllProduct,getProductByID,addProduct,UpDateProduct,DeleteProduct } from '../controllers/product.js';
const router = express.Router();
router.get('/products',getAllProduct)
router.get('/products/:id',getProductByID)
router.post('/products',addProduct)
router.put('/products/:id',UpDateProduct)
router.delete('/products/:id',DeleteProduct)
export default router