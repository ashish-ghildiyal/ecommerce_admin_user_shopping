import CommonForm from '@/components/common/CommonForm'
import { loginFormControl } from '@/config'
import React, {useState} from 'react'
import { Link } from 'react-router'

const initialState ={
  email:'',
  password:'',
}

const Login = () => {
  const [formData, setFormData] = useState(initialState)
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
      />
    </div>
  )
}

export default Login