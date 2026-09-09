import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react";

const LoginForm = () => {
    const [visible, setVisible] = useState(false);

  return (
    <form className="w-full max-w-md mx-auto p-6">
        <p className="text-sm text-left font-semibold">Email</p>
        <div className="flex items-center gap-2 p-2 rounded-md border-1 border-gray-300 mb-4 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#27aa83]">
            <MdOutlineMailOutline className="text-gray-500 font-semibold" size={25}/>
            <input type="email" placeholder="you@company.com" className="text-md w-full focus:outline-none" required/>
        </div>
        <p className="text-sm text-left font-semibold">Password</p>
        <div className="flex items-center gap-2 p-2 rounded-md border-1 border-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#27aa83]">
            <CiLock className="text-gray-500 font-semibold" size={25}/>
            <input type={visible ? "text" : "password"} placeholder="Enter your password" className="text-md w-full focus:outline-none" required/>
            {visible ? (
                <GoEyeClosed className="text-gray-500 font-semibold cursor-pointer" size={25} onClick={() => setVisible(false)} />
            ) : (
                <GoEye className="text-gray-500 font-semibold cursor-pointer" size={25} onClick={() => setVisible(true)} />
            )}
        </div>
        <a href="/forgot-password" className="flex text-sm align-left theme_text  mb-2">Forgot your password?</a>

        <button type="submit" className="theme_background text-white py-3 px-5 mt-2 rounded-xl w-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">Sign In</button>
    </form>
  )
}

export default LoginForm
