import { Route, Routes } from "react-router"
import AuthLayout from "./components/auth/AuthLayout"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AdminLayout from "./components/admin/AdminLayout"
import Products from "./pages/admin-view/Products"
import Dashboard from "./pages/admin-view/Dashboard"
import Orders from "./pages/admin-view/Orders"
import Features from "./pages/admin-view/Features"
import ShoppingLayout from "./components/shopping/ShoppingLayout"
import HomeShopping from "./pages/shopping-view/HomeShopping"
import Account from "./pages/shopping-view/Account"
import Checkout from "./pages/shopping-view/Checkout"
import ProductListing from "./pages/shopping-view/ProductListing"
import CheckAuth from "./components/common/CheckAuth"
import PageNotFound from "./pages/PageNotFound"
import UnAuthorized from "./pages/unauth-page/UnAuthorized"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { checkAuthUser } from "./store/auth-slice"
import Logout from "./components/common/Logout"

function App() {
  const {isAuthenticated, user, isLoading} = useSelector(state=>state.auth)
 const dispatch = useDispatch();

 useEffect(()=>{
  dispatch(checkAuthUser())
 },[dispatch])

 if(isLoading) return <div>loading...</div>


  return (
    <div className="flex flex-col overflow-hidden bg-white">
   <h1>Header</h1>
   <Logout/>
   <Routes>
        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
               <AuthLayout />
          </CheckAuth>
          }>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout/> 
          </CheckAuth>
        }>
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="products" element={<Products/>} />
          <Route path="features" element={<Features/>} />
          <Route path="orders" element={<Orders/>} />
        </Route>
        <Route path="/shop" element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <ShoppingLayout/>
          </CheckAuth>
          } >
            <Route path="home" element={<HomeShopping/>} />
            <Route path="account" element={<Account/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="product-listing" element={<ProductListing/>}/>
        </Route>
        
        <Route path="/unauthorized" element={<UnAuthorized/>} />
        <Route path="*" element={<PageNotFound/>} />
   </Routes>
      
    </div>
  )
}

export default App
