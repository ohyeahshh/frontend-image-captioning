import React,{useState, useEffect } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
const Footer = () => {
  return (
    <footer class="w-[100vw] border-[#48F4FF] border-[0.1px] fixed bottom-0 p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm  sm:text-center  text-[#48F4FF]"> <a href="/" class="hover:underline">Image Captioning</a>
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 px-[30px]">
        <NavLink to='/about'>  <li>
                <a href="#" class="mr-4 text-[#48F4FF] hover:underline md:mr-6 ">About</a>
            </li></NavLink>
            <NavLink to='/contact'>  <li>
                <a href="#" class="mr-4 text-[#48F4FF] hover:underline md:mr-6">Contact</a>
            </li></NavLink>
            <NavLink to='/summary'>  <li>
                <a href="#" class="mr-4 text-[#48F4FF] hover:underline md:mr-6">Summary</a>
            </li></NavLink>
           
        </ul>
    </footer>
  )
}

export default Footer