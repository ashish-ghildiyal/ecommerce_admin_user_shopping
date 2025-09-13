import React from 'react'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { logoutUser } from '@/store/auth-slice'
import { toast } from 'sonner'
import { useNavigate } from 'react-router'

const Logout = () => {
    const dispatch =  useDispatch()
    const navigate = useNavigate();
    
    const handleLogout= async()=>{
        const result = await dispatch(logoutUser())
        console.log(result)
        if(logoutUser.fulfilled.match(result)){
            toast(result.payload.message, {
                style: { background: "green", color: "white" },
             });
            
        }
         navigate('/auth/login')

    }
  return (
    <Button onClick={()=>handleLogout()}>logout</Button>    
  )
}

export default Logout