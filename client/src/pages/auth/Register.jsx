import CommonForm from '@/components/common/CommonForm'
import { registerFormControl } from '@/config'
import { registerUser } from '@/store/auth-slice'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'

const initialState ={
  userName:'',
  email:'',
  password:'',
}

const Register = () => {
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const onSubmit = (e) =>{
    e.preventDefault()
    dispatch(registerUser(formData))
    .then((data)=>{
     if(data.payload.success){
      toast.success(data.payload.message)
      navigate('/auth/login')
     }
    })
  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold tracking-tight text-foreground'>Create Account</h1>
        <p className='mt-2'>Already have an account 
          <Link to={'/auth/login'} className='ml-2 font-medium text-primary hover:underline'>Login</Link></p>
      </div>
      <CommonForm 
      formControls={registerFormControl}
      formData={formData}
      setFormData={setFormData}
      ButtonText={'Signup'}
      onSubmit={onSubmit}
      />
    </div>
  )
}

export default Register