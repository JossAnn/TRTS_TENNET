import { Link } from "react-router-dom";

function LoginForm() {
    return (
          <div className="h-full w-1/2 rounded-r-2xl flex flex-col items-center justify-center">
            <strong><h1 className="justify-items-start">Log in</h1></strong><br />
            <form action="" className="w-[60%] flex flex-col items-start">
                <strong><label htmlFor="" className="text-left">Email</label></strong>
                <input type="email" className="w-full rounded-lg bg-[#D9D9D9] h-8 border-gray-300 placeholder-[#00000080] outline-none pl-2" placeholder='Enter your email'/><br />
                <strong><label htmlFor="">Password</label></strong>
                <input type="password" className="w-full rounded-lg bg-[#D9D9D9] h-8 placeholder-[#00000080] outline-none pl-2" placeholder='Enter your password'/><br /><br />
                <Link to="/containers" className="bg-[#85796F] rounded-lg flex self-center w-40 items-center justify-center h-9 text-white font-bold">Log in</Link><br />
                <label htmlFor="" className="flex self-center text-xs text-[#00000080]">Don't you have an account yet?</label> 
                <Link to="/register" className="flex self-center text-xs text-[#FFFFFF80] border-b border-[#FFFFFF80] cursor-pointer">Create account</Link>    
            </form>
          </div>
    );
  }
  
  export default LoginForm;