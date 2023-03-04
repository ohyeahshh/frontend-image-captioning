import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { HiCheck } from 'react-icons/hi';


const Register = () => {

    const navigate = useNavigate();

   

    useEffect(() => {
      const loggedInStatus = localStorage.getItem('loggedInStatus')
        if (loggedInStatus) {
          navigate('/')
        } 
             
    }, [])

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)


    async function registerUser(event) { 
        event.preventDefault()

        console.log(name, email, password)
        var savedEmail = localStorage.getItem("email")

        if(email !== savedEmail){
          
          setLoading(true)
          localStorage.setItem("name", name)
          localStorage.setItem("email", email)
          localStorage.setItem("password", password)
       
          setTimeout(() => {
            setLoading(false)
            setSuccess(true)
          }, 2000);
        
        
            setTimeout(() => {
              navigate('/login')
            }, 4000);
       
        }
        else{
          setLoading(false)
           setError(true)
        }
      }
  return (
<section className="bg-gray-50 dark:bg-gray-900">
  



  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

 {loading && <div className='absolute bg-[rgba(0,0,0,0.5)] w-[60vw] h-[60vh] flex justify-center items-center' role="status">
    <p className='text-white mr-1 text-[20px]'>Saving registeration details &nbsp;&nbsp;</p>
    <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>}

  {success && <div id="toast-success" class="flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Check icon</span>
      </div>
      <div class="ml-3 text-sm font-normal">Registered Successfully! Redirecting you to login page</div>
    </div>}

{error && <div id="toast-warning" class="flex items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Warning icon</span>
    </div>
    <div class="ml-3 text-sm font-normal">Email is already registered!</div>
   
</div>}

  <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Image Captioning    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up 
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={registerUser}>
              <div>
                      <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                      <input 
                      required 
                      type="name" 
                      name="name" 
                      value={name}
                      onChange={(e)=>{ setName(e.target.value)}}
                      id="name" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      minlength={2} 
                      maxLength={35} 
                      placeholder="Bruce Wayne"></input>
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input
                        required 
                        value={email}
                        onChange={(e)=>{ setEmail(e.target.value)}}
                        type="email" 
                        name="email" 
                        id="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="name@company.com" 
                        minlength={4}></input>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                      required 
                      value={password}
                      onChange={(e)=>{ setPassword(e.target.value)}}
                      type="password" 
                      name="password" 
                      id="password" 
                      placeholder="••••••••" 
                      
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      minlength={6} 
                      maxLength={30}></input>
                  </div>
                  <div className="flex items-center justify-between">
                   
                  </div>
                  <button
                    type="submit"
                    className="bg-primary border-[#48F4FF] w-full rounded border p-3 text-[#48F4FF] transition hover:bg-opacity-90 bg-gray-900 "
                  >Sign up</button>                  
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?   <NavLink to='/login'><a className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a></NavLink>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    )
}

export default Register