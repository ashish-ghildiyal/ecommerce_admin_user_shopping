import { Button } from '@/components/ui/button'
import React, {useEffect, useState} from 'react'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import CommonForm from '@/components/common/CommonForm'
import { addProductFormElements,  } from '@/config'
import ProductImageUpload from '@/components/admin/ProductImageUpload'
import { useDispatch, useSelector } from 'react-redux'
import { addNewProduct, getAllProducts } from '@/store/admin/products-slice'
import { data } from 'react-router'
import { toast } from 'sonner'
import ProductTile from '@/components/admin/ProductTile'

const initialState={
  image: null,
  title:'',
  description:'',
  category:'',
  price:'',
  salePrice:'',
  brand:'',
  totalStock: ''
}

const Products = () => {
  const [openProductFormDialog, setOpenProductFormDialog] = useState(false)
  const [formData, setFormData] = useState(initialState )
  const [imageFile, setImageFile] = useState(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState('')
  const [imageLoadingState, setImageLoadingState] = useState(false)

  const dispatch = useDispatch();
  const {products} = useSelector((state)=>state.adminProducts);
 

  const onSubmit=(e)=>{
    e.preventDefault()
   dispatch(addNewProduct({
      ...formData,
      image: uploadedImageUrl.url,
       price: Number(formData.price),
    salePrice: Number(formData.salePrice),
    totalStock: Number(formData.totalStock),

    })).then(data=>{
      if(data.payload.success){
       dispatch(getAllProducts())
        toast(data.payload.message)
        setOpenProductFormDialog(false)
        setImageFile(null)
        setFormData(initialState)
      }
    })
    

  }

  useEffect(()=>{
    dispatch(getAllProducts())
  },[dispatch])
  return (
    <>
    <div className="mb-5 w-full flex justify-end">
      <Button onClick={()=>setOpenProductFormDialog(true)}>
         Add New Product
      </Button>
    </div>
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
      { products.data && products.data.length > 0 ?
        products.data.map((product,)=>( 
        <ProductTile product={product} key={product._id}/>
       ))
       : <p>No products found</p>
      }
      
       
       
     </div>
     <Sheet open={openProductFormDialog} onOpenChange={setOpenProductFormDialog}>
  <SheetContent className='max-h-screen overflow-y-auto pb-10'>
    <SheetHeader>
      <SheetTitle>Add Product</SheetTitle>
    </SheetHeader>
    <ProductImageUpload 
        imageFile ={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        imageLoadingState={imageLoadingState}
        setImageLoadingState={setImageLoadingState}
    />
    <div className='px-3'>
      <CommonForm 
       formControls={addProductFormElements}
       formData={formData}
       setFormData={setFormData}
       ButtonText={'Add Product'}
       onSubmit={onSubmit}
      />
    </div>
   
  </SheetContent>
</Sheet>
    </>
  )
}

export default Products