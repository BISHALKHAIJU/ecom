import React from 'react'
import {FacebookIcon, GithubIcon, InstagramIcon, MailIcon, Twitter} from 'lucide-react'

const Footer = () => {
  return (
    <>
    <div className='bg-[#F0EEED] w-full mt-10 h-full p-2'>
      <div className='bg-black md:px-10 md:py-10 flex flex-wrap justify-center items-center  sm:flex-2 md:flex-2 mx-auto w-3/4 gap-10 rounded-2xl  text-white text-xl sm:text-3xl md:text-4xl px-8 py-8'>
        <div className=''>
          <p className=' '>STAY UPTO DATE ABOUT <br></br> OUR LATEST OFFERS</p>
        </div>
        <div className="flex flex-col md:w-1/2 w-full max-w-md mx-auto space-y-3">
  {/* Email input with icon */}
  <div className="flex items-center bg-white rounded-full px-5 py-3 w-full min-w-0">
    <MailIcon className="text-gray-500  w-5 h-5 mr-2 md:w-7 md:h-7 md:mr-3 md:mx-6 flex-shrink-0 " />
    <input
      type="email"
      placeholder="Enter Your Email Address"
      className="flex-1 md:mx-2 bg-transparent text-black outline-none md:text-lg text-sm  "
    />
  </div>

  {/* Subscribe button */}
  <button className="bg-white text-black rounded-full py-2 text-lg font-medium  text-center">
    Subscribe To Newsletter
  </button>
</div>

      </div>
          
      <div className='md:flex sm:flex-wrap  flex-col-1 justify-center items-center  p-10 text-center  sm:items-center sm:justify-between  md:justify-between md:items-center md:m-8 '>
          <div className=' '>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>नयाँPASAL</h1>
            <p className='mt-2 py-2'>We have clothes that suits your style and
              <br/> which you’re proud to wear.
              <br/>From women to men.</p>

            <div className='flex gap-3 md:mt-3 md:px-16 justify-center items-center'>
              <Twitter className='bg-white text-black rounded-xl w-8 h-8 px-2'/>
              <FacebookIcon  className='bg-black text-white rounded-xl w-8 h-8 px-2 '/>
              <InstagramIcon className='bg-white text-black rounded-xl w-8 h-8 px-2'/>
              <GithubIcon className='bg-white text-black rounded-xl w-8 h-8 px-2'/>
            </div>
          </div>
          <div className='' >
            <h1 className='text-xl sm:text-2xl md:text-3xl font-mono md:mt-3 mt-6'>COMPANY</h1>
            <div className=' md:py-2 md:mt-2 mt-1'>
              <p className='md:mt-2 mt-1'>About</p>
              <p className='md:mt-2 mt-1'>Features</p>
              <p className='md:mt-2 mt-1'>Work</p>
              <p className='md:mt-2 mt-1'>Career</p>
            </div>
          </div>
          <div className=''>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-mono md:mt-3 mt-6'>HELP</h1>
            <div  className=' md:py-2 md:mt-2 mt-1 '>
              <p className='md:mt-2 mt-1'>Customer Support</p>
            <p className='md:mt-2 mt-1'>Delivery Details</p>
            <p className='md:mt-2 mt-1'>Terms & Conditions</p>
            <p className='md:mt-2 mt-1'>Privacy Policy</p>
            </div>
          
          </div>
          <div className='sm:mt-4'>
            <h1 className='text-xl  sm:text-2xl md:text-3xl font-mono md:mt-3  mt-6'>FAQ</h1>
            <div className=' md:py-2 md:mt-2 mt-1 '>
              <p className='md:mt-2 mt-1'>Account</p>
            <p className='md:mt-2 mt-1'>Manage Deliveries</p>
            <p className='md:mt-2 mt-1'>Orders</p>
            <p className='md:mt-2 mt-1'>Payments</p>
            </div>
          </div>
          <div className='sm:mt-4'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-mono md:mt-3 mt-6'>RESOURCES</h1>
            <div className=' md:py-2 md:mt-2 mt-1 '>
              <p className='md:mt-2 mt-1'>Free eBooks</p>
            <p className='md:mt-2 mt-1'>Development Tutorial</p>
            <p className='md:mt-2 mt-1'>How To Blog</p>
            <p className='md:mt-2 mt-1'>Youtube Playlist</p>
            </div>
          </div>
      </div>
      <div className="border-t border-gray-500  mx-auto w-[87%]"></div>
      <div>
        <p className='text-center mt-2'>नयाँPASAL © 2000-2026, All Rights Reserved</p>
      </div>
      <div className='flex justify-center items-center  md:gap-6 sm:gap-4 gap-2 mt-8 py-4'>
        <img className="bg-white w-20 px-2 py-2 rounded-xl" src="https://khaltibyime.khalti.com/wp-content/uploads/2025/07/Logo-for-Blog.png"></img>
        <img className="bg-black px-2 py-2  w-20 rounded-xl" src="https://esewa.com.np/common/images/esewa_logo.png"/>
        <img className='bg-white w-20 px-2 py-2  rounded-xl' src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg"/>
        <img className="bg-white px-2 py-2 rounded-xl w-24" src="https://www.gstatic.com/gpay/web/wallet_logo_large_screen.svg" alt="" />
      </div>
    </div>
    </>
  )
}

export default Footer
