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
import { addNewProduct, getAllProducts, deleteProduct , editProduct} from '@/store/admin/products-slice'
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
  const [currentEditedId, setCurrentEditedId] = useState(null)


  const dispatch = useDispatch();
  const {products, isLoading} = useSelector((state)=>state.adminProducts);
 

  const onSubmit=(e)=>{
    e.preventDefault()
    currentEditedId!==null ?
    dispatch(editProduct({
      id: currentEditedId,
      formData
    })).then(data=>{
      console.log("edited data",data)
      if(data.payload.success){
       dispatch(getAllProducts())
        setOpenProductFormDialog(false)
        setFormData(initialState)
        setCurrentEditedId(null)
        toast(data.payload.message)
      }
    }) :

   dispatch(addNewProduct({
      ...formData,
        image: uploadedImageUrl,
       price: Number(formData.price),
       salePrice: Number(formData.salePrice),
       totalStock: Number(formData.totalStock),
    })).then(data=>{
      if(data.payload.success){
       dispatch(getAllProducts())
        setOpenProductFormDialog(false)
        setImageFile(null)
        setFormData(initialState)
        toast(data.payload.message)
      }
    })

  }
  

  const handleDelete=(id)=>{
    dispatch(deleteProduct(id))
    .then(data=>{
      if(data.payload.success){
        dispatch(getAllProducts())
        toast(data.payload.message)
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
      { products && products.length > 0 ?
        products.map((product,)=>( 
        <ProductTile product={product}
         key={product?._id}
         handleDelete={handleDelete}
         setFormData={setFormData}
         setOpenProductFormDialog={setOpenProductFormDialog}
         setCurrentEditedId={setCurrentEditedId}
         
         />
       ))
       : null
      }
     </div>
     <Sheet open={openProductFormDialog} 
     onOpenChange={()=>{
      setOpenProductFormDialog(false),
      setFormData(initialState)
      setCurrentEditedId(null)
    }}
     >
  <SheetContent className='max-h-screen overflow-y-auto pb-10'>
    <SheetHeader>
      <SheetTitle>{
        currentEditedId !== null ? 'Edit Product' : 'Add Product'}
        
        </SheetTitle>
    </SheetHeader>
    <ProductImageUpload 
        imageFile ={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        imageLoadingState={imageLoadingState}
        setImageLoadingState={setImageLoadingState}
        isEditMode={currentEditedId !=null}
    />
    <div className='px-3'>
      <CommonForm 
       formControls={addProductFormElements}
       formData={formData}
       setFormData={setFormData}
       ButtonText={currentEditedId !== null ? 'Edit' : 'Add'}
       onSubmit={onSubmit}
      />
    </div>
   
  </SheetContent>
</Sheet>
    </>
  )
}

export default Products