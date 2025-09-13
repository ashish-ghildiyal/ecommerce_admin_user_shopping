import { imageUploadUtils } from "../../helpers/cloudinary.js";
import { Product } from "../../models/product.model.js";

const handleImageUpload= async(req,res)=>{
    try {
        const b64 = Buffer.from(req.file.buffer).toString('base64');
        const dataUrl = `data:${req.file.mimetype};base64,${b64}`;
        const result = await imageUploadUtils(dataUrl)
        res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
            url: result.url
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error uploading image"
        })
    }
}

// Add products

const addProduct= async(req,res)=>{
    try {
        const {
            image,
            title,
            description,
            brand,
            category,price,
            salePrice, totalStock
            
        } = req.body
        if(!image || !title || !description || !brand || !category || !price || !salePrice || !totalStock){
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            })
        }
        const newProduct = new Product({
            image,
            title,
            description,
            brand,
            category,
            price,
            salePrice,
            totalStock
        })
        await newProduct.save()
        res.status(200).json({
            success: true,
            message: "Product added successfully",
            data: newProduct
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error adding product"
        })
    }
}


// update product

const updateProduct= async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product){
            return res.status(400).json({
                success: false,
                message: "Product not found"
            })
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct
        })
        
    } catch (error) {
        
    }
}

// fetch products

const fetchProducts= async(req,res)=>{
    try {
        const products = await Product.find();
        if(!products){
            return res.status(400).json({
                success: false,
                message: "No products found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching products"
        })
    }
}

// edit product

// delete product
const deleteProduct= async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(400).json({
                success: false,
                message: "Product not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: product
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting product"
        })
    }
}





export {handleImageUpload, addProduct, updateProduct, fetchProducts, deleteProduct}