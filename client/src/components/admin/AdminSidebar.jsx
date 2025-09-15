import { ChartNoAxesCombined,LayoutDashboard ,
  ShoppingBasket,BadgeCheck} from 'lucide-react'
  import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import React from 'react'
import { useNavigate } from 'react-router'
const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <ShoppingBasket />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <BadgeCheck />,
  },
];

const MenuItems = ({setOpen})=>{
  const navigate = useNavigate()

  return(
    <nav className="mt-8 flex-col flex gap-2">
        {
          adminSidebarMenuItems.map((items)=>{
            const {id, icon, label, path} = items
            return(
               <div key={id}
               className="flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
               onClick={()=>{
                    navigate(path)
                    setOpen? setOpen(false):null
               }}
               >
                 {icon}<span>{label}</span>
              </div>
            )
          })
        }
       </nav>
  )
}


const AdminSidebar = ({open, setOpen}) => {
   const navigate = useNavigate()
  return (
    <>
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
           <div className="flex flex-col h-full">
          <SheetHeader className="border-b">
            <SheetTitle className="flex gap-2 mt-5 mb-5">
             <ChartNoAxesCombined size={30} />
                <h2 className="text-2xl font-extrabold">Admin Panel</h2>
              </SheetTitle>
            <MenuItems setOpen={setOpen}/>
          </SheetHeader>
          </div>
        </SheetContent>
      </Sheet>
    <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
      <div className="flex cursor-pointer items-center gap-2"
       onClick={()=>navigate('/admin/dashboard')}
      >
        <ChartNoAxesCombined size={30}/>
        <h1 className="text-2xl font-extrabold"> Admin Panel</h1>
      </div>
       <MenuItems/>

    </aside>
    </>
  )
}

export default AdminSidebar