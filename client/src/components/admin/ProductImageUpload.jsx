import React, { useEffect, useRef } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { CloudUploadIcon, FileIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import axios from 'axios';

const ProductImageUpload = ({
    imageFile,
    setImageFile,
    setUploadedImageUrl, 
    imageLoadingState,
    setImageLoadingState,
    isEditMode
}) => {
        const inputRef = useRef(null);
        const imageChange=(e)=>{
            const selectedFile = e.target.files[0];
            if(selectedFile){
                setImageFile(selectedFile);
            }

        }
        const handleDragOver=(e)=>{
            e.preventDefault();
            e.stopPropagation();
        }
        const handleDrop=(e)=>{
            e.preventDefault();
            e.stopPropagation();
            const selectedFile = e.dataTransfer.files[0];
            if(selectedFile){
                setImageFile(selectedFile);
            }
        }  
        const handleRemoveImage=()=>{
            setImageFile(null);
            if(inputRef.current){
                inputRef.current.value = '';
            }
        } 

        const uploadFileToCloudinary= async()=>{
            setImageLoadingState(true);
            const data = new FormData();
            data.append('image_file',imageFile);

            const response = await axios.post('http://localhost:8080/api/admin/products/upload',data,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if(response?.data?.success){ 
                const imageUrl = response.data.url;
                setUploadedImageUrl(imageUrl);
                setImageLoadingState(false)
            }

        }

        useEffect(()=>{

            if(imageFile!==null) uploadFileToCloudinary()
            
        },[imageFile])
  return (
    <div className='w-full max-w-md mx-auto px-3'>
        <Label htmlFor="image-upload" className="text-lg font-semibold mb-2">Upload Image</Label>
        <div 
                onDragOver={handleDragOver}
                onDrop={handleDrop}

                className={`${isEditMode?'opacity-50 border-2 border-dashed':'border-2 border-dashed rounded-lg p-4 mt-4'}`}>
            <Input id="image-upload" type="file" 
            className="w-full" 
            hidden  
            ref={inputRef} 
            onChange={imageChange}
            disabled={isEditMode}
            />
            {
            !imageFile ? 
                (<Label htmlFor="image-upload" 
                className='flex flex-col items-center justify-center h-32 cursor-pointer'>
                   <CloudUploadIcon className='w-10 h-10'/>
                   <span>Drag & Drop, or browse</span>
                </Label>) :(imageLoadingState ? 'Uploading Image...' : 

                 <div className="flex items-center justify-center "> 
                 <div className='flex items-center justify-center'>
                    <FileIcon className='w-8 h-8 text-primary mr-2'/>
                 </div> 
                 <p className='text-sm font-medium'>{imageFile.name}</p>
                 <Button variant="ghost"
                 className='text-muted-foreground hover:text-foreground'
                 onClick={handleRemoveImage}>
                    <XIcon className='w-4 h-4'/>
                    <span className='sr-only '>Remove</span>
                 </Button>
                </div>
                )
            }
        </div>
    </div>
  )
}

export default ProductImageUpload