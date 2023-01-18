import { useState, useEffect } from 'react'



const Home = () => {

  const [file, setFile] = useState(null)
  const [val, setVal] = useState("")
  const [imgUrl, setImgUrl] = useState(null);
  const [lectureSubject, setLectureSubject] = useState("")
  const [success, setSuccess] = useState(false)
  const [waiting, setWaiting] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const [isUploaded, setIsUploaded] = useState(false)

  const handleFileSelect = (event) => {
    setFile(event.target.files[0])
    const filez = event.target.files[0];
    setImgUrl(URL.createObjectURL(filez));
  }
  
  async function requestTranscription(event) {
    event.preventDefault()

    setLoading(true)

    const formData =new FormData();

    formData.append(
      "file",
      file
    );

    
    const requestOptions = {
      method: "POST",
      body: formData
    };

    try {
    const response = await fetch("http://localhost:8000/caption", requestOptions)
    const json = await response.json()
    console.log("ok");
    setVal(json.caption)
    isUploaded(true)
    setLoading(false)
    console.log( isUploaded)
  } catch (error) {
    console.error(error)
    setLoading(false)
 

  }
}

  return (
    <section className="min-h-screen h-[100vh] bg-gray-900 main overflow-y-auto ml-[256px] z-0 top-0  pt-[70px] pb-[100px] right-0   min-h-[calc(100vh-256px)]  bg-gray-900 px-[50px]" >
  
  {val === "" &&
  <>
  <span className="text-primary mb-4 block text-base font-semibold text-[#48F4FF]">
Generate Captions for Image  </span>
  
 
  <form onSubmit={requestTranscription}>
  {loading && <div className='absolute z-[5] bg-[rgba(0,0,0,0.8)] w-[60vw] h-[60vh] flex justify-center items-center' role="status">
    <p className='text-white font-semibold mr-1 text-[20px]'>Processing. Please wait &nbsp;&nbsp;</p>
    <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>}

<div className="flex items-center justify-center w-[80%] mb-4">
{success && <div id=" toast-interactive" className="absolute z-[2] flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-purple-500 bg-purple-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span className="sr-only">Check icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">File is successfully uploaded!</div>
    </div>}

    {waiting && <div id=" toast-interactive" className="absolute z-[2] flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>          <span className="sr-only">Check icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">Transcription is happening in the background. Please wait</div>
    </div>}
    
    {error && <div id="toast-warning" className="absolute z-[2] flex items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Warning icon</span>
    </div>
    <div className="ml-3 text-sm font-normal">An unexpected error occur. Please try again.</div>
   
</div>}
    


    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-[200px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-2 pb-3">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
         {!file ?  <>
         <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500 dark:text-gray-400"> Image (5 MB max )</p>
          </>
          :
          <>
          <p className="mb-2 text-lg text-cyan-500 dark:text-green-400"><span className="font-semibold">Image Selected!</span></p>
          </>
          }
  </div>



        <input id="dropzone-file" type="file"
        onChange={handleFileSelect}
   accept="image/*" className="hidden" />
    </label>
</div> 
{console.log(file)}

<button 
type="submit" 
className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#48F4FF] to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-[80%]">
  <p className="relative px-5 font-bold text-[17px] py-2.5 transition-all ease-in duration-75 bg-white  rounded-md bg-opacity-0  group-hover:bg-opacity-0">
        Generate Caption
  </p>
</button>

</form>
</>}
{val !== ""  &&

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
    {imgUrl && <img src={imgUrl} className="rounded-t-lg" alt="preview" />}

    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Image Caption</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{val}</p>
       
    </div>
</div>

}


    </section>
  )
}

export default Home