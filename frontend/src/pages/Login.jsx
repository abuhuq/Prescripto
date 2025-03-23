import React, { useState } from 'react'

const Login = () => {

  const [state, setstate] = useState('Sign Up')

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState('')

  const onsubmithandler = async (event) => {
    event.preventDefault()


  }
  return (
    <form className='min-h-[80px] flex items-center mt-24'>

      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[300px] sm:min-w-94 border rounded-xl text-zinc-600 text-sm shadow-lg  py-12 px-10'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'} </p>
        <p className='w-full'>Please {state === 'Sign Up' ? 'Create Account' : 'Login'} to book appointment</p>

        {
          state === 'Sign Up' &&  <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setname(e.target.name)} value={name} required/>
        </div>
        }

       

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setname(e.target.name)} value={name} required/>
          <input className='' type="email" onChange={(e) => setemail(e.target.name)} value={email}  required/>
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setname(e.target.name)} value={name} required/>
          <input className='' type="password" onChange={(e) => setpassword(e.target.name)} value={password} required/>
        </div>

        <button className='bg-primary text-white py-2 w-full rounded-md text-base' >{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        {
          state === 'Sign Up' 
          ? <p>Already have an account? <span  onClick={()=>setstate('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
          : <p>Create an new account? <span onClick={()=>setstate('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login