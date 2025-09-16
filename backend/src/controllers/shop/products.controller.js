import { Product } from "../../models/product.model.js";
const fetchShoppingProducts = async(req,res)=>{
    try {
        const fetch = await Product.find({});
        res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: fetch
    })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching products"
        })
        
    }
   
}

export {fetchShoppingProducts}