import React, { useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ProductFilter from '@/components/shopping/ProductFilter'
import { ArrowUpDown } from 'lucide-react'
import {sortOptions} from '@/config'
import ProductTile from '@/components/shopping/ProductTile'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '@/store/shop/product-slice'


const ProductListing = () => {
  const {products} = useSelector(state=>state.shopProducts);

  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(getAllProducts())
  },[dispatch])


  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6">
      <ProductFilter/>
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold">All Products</h2>
           <div className="flex items-center gap-3">
            <span className="text-muted-foreground">
              products length
            </span>
            <DropdownMenu>
                <DropdownMenuTrigger variant="outline" size="sm" className="flex items-center gap-1">
                  <ArrowUpDown className="w-4 h-4" />
                  <span>Sort by</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {
                    sortOptions.map((option)=>{
                      return(
                        <DropdownMenuItem key={option.id}>
                          {option.label}
                        </DropdownMenuItem>
                      )
                    })
                  }
                </DropdownMenuContent>
              </DropdownMenu>
           </div>
        </div>

      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {/* <ProductTile/> */}
       </div>
    </div>
  )
}

export default ProductListing