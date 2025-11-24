import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

export default function Login() {

    const [name,setName]= useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://mern-app-1-4ud6.onrender.com/',{name,email,password})
        .then(result => {console.log(result)
          navigate('/login')
        })
        .catch(err => console.log(err))
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br via-blue-600 from-purple-600 to-pink-500 p-4">
      
      {/* Glass Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 drop-shadow-lg">
          Register
        </h1>
        <p className="text-white/80 text-center mb-8">
          Create account to login
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

            <div>
            <label className="text-white font-medium">Name</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              name="name"
              className="w-full p-3 mt-2 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
              onChange={(e)=>{setName(e.target.value)}}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-white font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 mt-2 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-white font-medium">Password</label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              name="password"
              className="w-full p-3 mt-2 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
             onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full p-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all shadow-lg hover:shadow-2xl"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-white/80 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-white font-bold underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
