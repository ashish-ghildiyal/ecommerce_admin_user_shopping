import React from 'react'

const ProductTile = ({product}) => {
    const {salePrice, price} = product;
  return (
    <Card className="w-full max-w-sm mx-auto ">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="w-full h-[200px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">title</h2>
          <div className="flex justify-between items-center mb-2">
            <span className={`${salePrice>0 ? 'line-through text-muted-foreground': ''}`}>${price}</span>
            {
              salePrice >0 && <span className="text-lg font-bold">${salePrice}</span>
            }
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
         
          <Button >Add</Button>
        </CardFooter>
      </Card>
  )
}

export default ProductTile