import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from '../ui/button'
const ProductTile = ({product}) => {
    const {image, title, description, brand, category,
         price, salePrice, totalStock} = product
  return (
      <Card className="w-full max-w-sm mx-auto">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">{title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span>{price}</span>
            <span className="text-lg font-bold"> {salePrice} </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </CardFooter>
      </Card>
  )
}

export default ProductTile