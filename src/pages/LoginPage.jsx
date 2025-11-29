import React from 'react'
import {Link} from "react-router-dom"

const LoginPage = () => {
  return (
    <>
      <div className='bg-gray-50 flex items-center justify-center px-4 '>
        <div className='w-full max-w-md m-4 p-10 bg-gray-100 rounded-xl shadow-sm'>
          <h1 className='text-center text-3xl py-3'>Sign In / Register</h1> 
          <form className='space-y-4'>

            {/* email */}
          <div>
            <label className='block text-lg font-medium '>Email</label>
            <input type="text"  placeholder='Enter your email '  className='w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:border-black' required />
          </div>
            {/* password */}
            <div>
              <label className='block text-lg font-medium  mt-2'>Password</label>
              <input type="password" placeholder='Enter Your password' className='w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:border-black'required/>
            </div>
            {/* login */}
            <button className='w-full bg-black text-white py-3 mt-4 rounded-full font-bold'>Login</button>

            <div className="my-2 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-black">Or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

              <button className='w-full flex items-center justify-center bg-black text-white gap-1 py-2 mt-2 rounded-full font-bold  '> Continue with Google
                <img src="https://www.google.com/favicon.ico" alt="G" className="w-5 h-5" /></button>

                <button className='w-full flex items-center justify-center bg-black text-white gap-1 py-2 mt-2 font-bold rounded-full '> Continue with Facebook
                <img src="https://www.facebook.com/favicon.ico" alt="G" className="w-5 h-5" /></button>

                <p className='text-center mt-2'>Don't have an account? <Link to="/signup" className='text-blue-600 hover:underline'>SignUp now</Link> </p>

          </form>
          
            
        </div>
      </div>
    </>
  )
}

export default LoginPage
