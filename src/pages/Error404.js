import React from 'react'

const Error404 = () => {
  return (
    <section className="min-h-screen h-[100vh] bg-gray-900 main overflow-y-auto ml-[256px] z-0 top-0  pt-[150px] pb-[100px] right-0   min-h-[calc(100vh-256px)] bg-gray-900" >
    <div className='l-[256px] w-[800px] flex  items-center justify-center mx-auto'>
       
        <img className='w-[300px] mx-35px' src="./assets/images/404-error.png" alt="" />
        <div className='w-[8px] bg-white h-[150px] mx-4 ' ></div>
        <h1 className='text-[#48F4FF] font-bold text-2xl'>The page you are trying to request doesn't exist.</h1>
    </div>
    </section>
  )
}

export default Error404