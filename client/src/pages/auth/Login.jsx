import CommonForm from '@/components/common/CommonForm'
import { loginFormControl } from '@/config'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'
import { loginUser } from '@/store/auth-slice'
import { toast } from 'sonner'
import { useNavigate } from 'react-router'

const initialState ={
  email:'',
  password:'',
}

const Login = () => {
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) =>{
    e.preventDefault()
    dispatch(loginUser(formData))
    .then((data)=>{
      console.log(data)
     if(data.payload.success){
      toast(data.payload.message,{
        style: {
          background:'green',
          color:'white'
        }
      })
      if(data.payload.user.role === 'admin'){
        navigate('/admin/dashboard')
      }else{
        navigate('/shop/home')
      }
     }
    })
  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold tracking-tight text-foreground'>Login</h1>
        <p className='mt-2'>Create an account 
          <Link to={'/auth/register'} className='ml-2 font-medium text-primary hover:underline'>Register</Link></p>
      </div>
      <CommonForm 
      formControls={loginFormControl}
      formData={formData}
      setFormData={setFormData}
      ButtonText={'Login'}
      onSubmit={onSubmit}
      />
    </div>
  )
}

export default Login