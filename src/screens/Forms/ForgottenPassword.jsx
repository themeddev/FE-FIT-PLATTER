import { useState } from "react"
import { Link } from "react-router-dom"

const ForgottenPassword = () => {

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState('')
  // const navigate = useNavigate();

  // Handle the change of the input values
  const handleChange = (event) => {
    // Get the name and value of the input
    setEmail(event.target.value)
  
  }

  // Handle the submission of the form
  const handleSubmit = (event) => {
    // Prevent the default behavior of the form
    event.preventDefault()

    // Validate the input values
    const errors = {}

    // Check if the email is valid
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      errors.email = 'Please enter a valid email address'
    }

    // Set the state with the errors
    setErrors(errors)

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully')
    }
  }
    
    
    
    return (
        <div className="flex items-center justify-center h-screen bg-gray-40">
          <div className="w-1/2 p-10 bg-white rounded-lg shadow-md">
            
            <h2 className="text-3xl text-center font-Outfit text-myBlue">Forgot Your Password?</h2>
            <h1 className="text-xs mb-7 text-center font-small text-gray-500">Enter your email address and we’ll send you email with password</h1>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-7">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
                />
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              </div>
              
              <button type="submit" className="btn-phone-forget w-full px-3 py-1.5 font-Poppins text-white bg-[#FC6212] rounded-md hover:bg-orange-600 flex items-center justify-center">
                SEND RECOVERY EMAIL
              </button>

    
            </form>
            <p className="mt-4 text-sm text-center text-gray-400">Send me back to the <Link to="/sign-in" className="text-[#FC6212] hover:underline">Sign in</Link></p>
          </div>
        </div>
      )



}
 
export default ForgottenPassword