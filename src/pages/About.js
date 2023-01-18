import React from 'react'

const About = () => {
  return (
    <section className="min-h-screen h-[100vh] main overflow-y-auto ml-[256px] z-0 top-0  pt-[80px] pb-[100px] right-0   min-h-[calc(100vh-256px)]  bg-gray-900 px-[50px]" >
 <span className="text-primary mb-4 block  text-base font-semibold text-[#48F4FF]">
                About Us
              </span>
              


<div className='flex align-center  w-[900px]'>
<table className="w-[700px] text-sm text-left text-gray-500 dark:text-gray-400 border-2 border-blue-200">
    <thead className="text-xs text-white uppercase bg-blue-500 ">
        <tr>
      
            <th scope="col" className="py-3 px-6">
             Name
            </th>
            <th scope="col" className="py-3 px-6">
             Id
            </th>
            <th scope="col" className="py-3 px-6">
                Branch
            </th>
            <th scope="col" className="py-3 px-6">
                Role in the project
            </th>
           
        </tr>
    </thead>
    <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
         
            <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <img className="w-10 h-10 rounded-full" src="/static/girl.png" alt="Jese image" style="object-fit:cover;"/> */}
                <div className="pl-3">
                    <div className="text-base font-semibold">M Vijaya Kumari  </div>
                    <div className="font-normal text-gray-500">vijaya@gmail.com</div>
                </div>  
            </th>
            <td className="py-4 px-6">
            198W1A0597
            </td>
            <td className="py-4 px-6">
                CS-AI
            </td>
            <td className="py-4 px-6">
            Collaborative
            </td>
           
        </tr>

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
         
            <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <img className="w-10 h-10 rounded-full" src="/static/girl.png" alt="Jese image" style="object-fit:cover;"/> */}
                <div className="pl-3">
                    <div className="text-base font-semibold">N Sai Pavithra  </div>
                    <div className="font-normal text-gray-500">pavithra@gmail.com</div>
                </div>  
            </th>
            <td className="py-4 px-6">
            198W1A05A1
            </td>
            <td className="py-4 px-6">
                CS-AI
            </td>
            <td className="py-4 px-6">
            Collaborative
            </td>
           
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
         
            <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <img className="w-10 h-10 rounded-full" src="/static/girl.png" alt="Jese image" style="object-fit:cover;"/> */}
                <div className="pl-3">
                    <div className="text-base font-semibold">V Bhavana  </div>
                    <div className="font-normal text-gray-500">bhavana@gmail.com</div>
                </div>  
            </th>
            <td className="py-4 px-6">
            198W1A0573
            </td>
            <td className="py-4 px-6">
                CS-AI
            </td>
            <td className="py-4 px-6">
                Collaborative
            </td>
           
        </tr>

    
    </tbody>
</table>
</div>

</section>
  )
}

export default About