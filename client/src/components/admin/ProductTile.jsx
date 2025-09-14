import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from '../ui/button'
const ProductTile = ({product,
   handleDelete, 
   setFormData,
   setOpenProductFormDialog,
   setCurrentEditedId

}) => {
    const {_id, image, title,  
         price, salePrice, } = product
  return (
      <Card className="w-full max-w-sm mx-auto ">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[200px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">{title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span className={`${salePrice>0 ? 'line-through text-muted-foreground': ''}`}>${price}</span>
            {
              salePrice >0 && <span className="text-lg font-bold">${salePrice}</span>
            }
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button onClick={()=>{
            setFormData(product); 
            setCurrentEditedId(_id); 
            setOpenProductFormDialog(true)
            }}>Edit</Button>
          <Button onClick={()=>handleDelete(_id)}>Delete</Button>
        </CardFooter>
      </Card>
  )
}

export default ProductTile