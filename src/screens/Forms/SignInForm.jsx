import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { useNavigate, Link } from 'react-router-dom';

export default function SignInForm() {
  // Initialize the state with empty values and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handle the change of the input values
  const handleChange = (event) => {
    // Get the name and value of the input
    const { name, value } = event.target;

    // Set the state with the new value
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Handle the submission of the form
  const handleSubmit = (event) => {
    // Prevent the default behavior of the form
    event.preventDefault();

    // Validate the input values
    const errors = {};

    // Check if the email is valid
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      errors.email = 'Please enter a valid email address';
    }

    // Check if the password is not empty
    if (!password) {
      errors.password = 'Please enter a password';
    }

    // Set the state with the errors
    setErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // alert('Form submitted successfully');
      navigate('/home');
    }
  };

  // Render the component
  return (
    <div className="flex items-center justify-center h-screen bg-gray-40">
      <div className="w-96 p-10 bg-white rounded-lg shadow-md">
        <h1 className="text-l font-small text-gray-500">Welcome back !!!</h1>
        <h2 className="text-4xl font-Outfit text-myBlue">Sign in</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
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
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
            />
            <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            <Link to="/forget-password" className="block mt-1 text-sm text-right text-gray-400 hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-1/2 px-3 py-1.5 font-Poppins text-white bg-[#FC6212] rounded-full hover:bg-orange-600 flex items-center justify-center"
            >
              SIGN IN
              <ArrowRightIcon className="w-3 h-3 ml-1" />
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-400">
          I don't have an account ?{' '}
          <Link to="/sign-up" className="text-[#FC6212] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
