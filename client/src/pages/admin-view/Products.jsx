import { Button } from '@/components/ui/button'
import React, {useState} from 'react'
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import CommonForm from '@/components/common/CommonForm'
import { addProductFormElements,  } from '@/config'

const Products = () => {
  const [openProductFormDialog, setOpenProductFormDialog] = useState(false)
  return (
    <>
    <div className="mb-5 w-full flex justify-end">
      <Button onClick={()=>setOpenProductFormDialog(true)}>
         Add New Product
      </Button>
    </div>
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
      <Card className="w-full max-w-sm mx-auto">
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">title</h2>
          <div className="flex justify-between items-center mb-2">
            <span>price</span>
            <span className="text-lg font-bold"> sale price </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </CardFooter>
      </Card>
       <Card className="w-full max-w-sm mx-auto">
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">title</h2>
          <div className="flex justify-between items-center mb-2">
            <span>price</span>
            <span className="text-lg font-bold"> sale price </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </CardFooter>
      </Card>
       <Card className="w-full max-w-sm mx-auto">
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">title</h2>
          <div className="flex justify-between items-center mb-2">
            <span>price</span>
            <span className="text-lg font-bold"> sale price </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </CardFooter>
      </Card>
       <Card className="w-full max-w-sm mx-auto">
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">title</h2>
          <div className="flex justify-between items-center mb-2">
            <span>price</span>
            <span className="text-lg font-bold"> sale price </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </CardFooter>
      </Card>
       <Card className="w-full max-w-sm mx-auto">
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">title</h2>
          <div className="flex justify-between items-center mb-2">
            <span>price</span>
            <span className="text-lg font-bold"> sale price </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </CardFooter>
      </Card>
     </div>
     <Sheet open={openProductFormDialog} onOpenChange={setOpenProductFormDialog}>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
      
    </SheetHeader>
    {/* <CommonForm 
      formControls={loginFormControl}
    /> */}
  </SheetContent>
</Sheet>
    </>
  )
}

export default Products