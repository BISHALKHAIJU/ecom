import React from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  return (
    <>
      <div className='flex items-center justify-center px-4  bg-gray-50'>
        <div className='w-full max-w-md m-4 p-10 bg-gray-100 rounded-lg shadow-sm'>
          <h1 className='text-center text-3xl' >SignUp</h1>
          <form className='space-y-4'>
            <div>
              <label className='block text-lg font-medium '>Username</label>
              <input type='text' placeholder="Enter Your Username" className='border-gray-300 w-full p-1 border rounded-lg' required/>
            </div>

            <div>
              <label className='block font-medium text-lg '>Email</label>
              <input type='email' placeholder="Enter Your Email"  className='border-gray-300 w-full p-1 border rounded-lg' required></input>
            </div>

            <div>
              <label className='block font-medium text-lg'>Password</label>
              <input type='password' placeholder="Enter Your Password"  className='border-gray-300 w-full p-1 border rounded-lg' required></input>
            </div>

            <button className='w-full py-3 mt-4 rounded-full bg-black text-white '>SignUp</button>

            <div className='my-1 flex items-center'>
              <div className='flex-1 border-t border-gray-300'></div>
                <span className='px-4 text-black '>Or</span>
              <div className='flex-1 border-t border-gray-300'></div>
            </div>

            <button className='w-full flex items-center justify-center bg-black text-white gap-1 py-2 mt-2 rounded-full font-bold  '> Continue with Google
                <img src="https://www.google.com/favicon.ico" alt="G" className="w-5 h-5" /></button>

            <p className='text-center'>
              Already have an account?
              <Link to="/login" className="hover:underline text-blue-600">SignIn Now</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUpPage
