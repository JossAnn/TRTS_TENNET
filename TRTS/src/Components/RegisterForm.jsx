import { Link } from "react-router-dom";

function RegisterForm() {
    return (
      <div className="h-full w-1/2 rounded-r-2xl flex flex-col items-center justify-center">
            <strong><h1 className="justify-items-start">Create your free account</h1></strong><br />
            <form action="" className="w-[60%] flex flex-col items-start">
                <strong><label htmlFor="" className="text-left">Name</label></strong>
                <input type="text" className="w-full rounded-lg bg-[#D9D9D9] h-8 border-gray-300 placeholder-[#00000080] outline-none pl-2" placeholder='Enter your full name'/><br />
                <strong><label htmlFor="">Email</label></strong>
                <input type="email" className="w-full rounded-lg bg-[#D9D9D9] h-8 placeholder-[#00000080] outline-none pl-2" placeholder='Enter your email'/><br />
                <strong><label htmlFor="" className="text-left">Password</label></strong>
                <input type="password" className="w-full rounded-lg bg-[#D9D9D9] h-8 border-gray-300 placeholder-[#00000080] outline-none pl-2" placeholder='Enter your password'/><br />
                <strong><label htmlFor="">Confirm password</label></strong>
                <input type="password" className="w-full rounded-lg bg-[#D9D9D9] h-8 placeholder-[#00000080] outline-none pl-2" placeholder='Enter your password'/><br /><br />
                <Link to="/" className="bg-[#85796F] rounded-lg flex self-center w-40 items-center justify-center h-9 text-white font-bold">Create account</Link><br />
                <div className="flex self-center text-xs">
                  <label htmlFor="" className="text-[#00000080]">Already have an account?</label>
                  <Link to="/" className="text-[#FFFFFF80] border-b border-[#FFFFFF80] cursor-pointer ml-2">Log in</Link>
                </div>    
            </form>
          </div>
    );
  }
  
  export default RegisterForm;