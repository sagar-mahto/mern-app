import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://mern-app-1-4ud6.onrender.com/login',{email,password})
    .then(result => {
      console.log(result)
      if(result.data === 'Success'){
        navigate('/homepage')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br via-blue-600 from-purple-600 to-pink-500 p-4">
      
      {/* Glass Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 drop-shadow-lg">
          Welcome Back
        </h1>
        <p className="text-white/80 text-center mb-8">
          Please login to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>
            <label className="text-white font-medium">Email Address</label>
            <input
              type="email"
              required
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 mt-2 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"

            />
          </div>

          {/* Password */}
          <div>
            <label className="text-white font-medium">Password</label>
            <input
              type="password"
              required
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 mt-2 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
           
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full p-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all shadow-lg hover:shadow-2xl"
            >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-white/80 mt-6">
          Don't have an account?{" "}
          <a href="/" className="text-white font-bold underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
