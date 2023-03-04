import { useState, useEffect } from 'react'
import BarChart from '../components/BarChart'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS, BarElement,Legend, ArcElement, Tooltip, CategoryScale, LinearScale} from "chart.js"; 

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)


const Analytics = () => {

    var chartData = {
        labels: [ "Model -x", "Model -y", "Model-z", "Our Model"],
        datasets: [{
          label: 'BLEU Scores',
          data: [0.400476, 0.405523, 0.404657,0.507523],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      }
      
      var options ={
          mainAspectRation: false,
          Scales: {
              y: {
                  beginAtZero: true
              },
          },
          legend: {
              lablels : {
                  fontSize: 25, 
              },
          },
      }
     

  return (
    <section className="misn-h-screen h-[100vh] main overflow-y-auto ml-[256px] z-0 top-0  pt-[80px] pb-[100px] right-0   min-h-[calc(100vh-256px)]  bg-gray-900 px-[50px]" >
    <span className="text-primary mb-4 block  text-base font-semibold text-[#48F4FF]">
                   Comparison with other models.
                 </span>
    <span className="text-primary mb-1 block  text-base font-semibold text-[white]">
                   On comparing our trained model with other existing models, we found that our model was performing better, based on the BLEU score metrics.
                 </span>
    <span className="text-primary mb-4 block  text-base font-normal text-[gray]">
                   Here, model-x, model-y, and model-z are the models of the existing image captioning projects.
                 </span>
                 
   
   
   <div className='flex align-center  w-[900px]'>
   <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
 
 <Bar
       data={chartData}
       height={400}
       options={options}
 
     />
 
 
 </div>
   </div>
   
   </section>
  )
}

export default Analytics