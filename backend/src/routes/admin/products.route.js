import express from 'express';
import { handleImageUpload , addProduct, updateProduct, fetchProducts, deleteProduct} from '../../controllers/admin/products.controller.js';
import { upload } from '../../helpers/cloudinary.js ';

const productRoutes = express.Router();

productRoutes.post('/upload', upload.single('image_file'), handleImageUpload)
productRoutes.post('/add', addProduct)
productRoutes.put('/update/:id', updateProduct)
productRoutes.get('/fetch', fetchProducts)
productRoutes.delete('/delete/:id', deleteProduct)  

export default productRoutes