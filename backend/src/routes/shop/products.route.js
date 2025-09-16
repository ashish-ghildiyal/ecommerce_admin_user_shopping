import express from 'express';
import { fetchShoppingProducts } from '../../controllers/shop/products.controller.js';

const shoppingproductRoutes = express.Router();

shoppingproductRoutes.get('/fetch', fetchShoppingProducts)

export default shoppingproductRoutes