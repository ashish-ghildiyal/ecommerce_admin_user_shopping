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

function App() {
  const isAuthenticated = false;
  const user = {
    name:'ashish',
    role: 'admin'
  }

  return (
    <div className="flex flex-col overflow-hidden bg-white">
   <h1>Header</h1>
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
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/unauthorized" element={<UnAuthorized/>} />
   </Routes>
      
    </div>
  )
}

export default App
