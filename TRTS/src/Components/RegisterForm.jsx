import { Link } from "react-router-dom";

function RegisterForm() {
    return (
      <div className="col-span-8 col-start-3 h-[80%] bg-[#A49C9F] rounded-2xl relative top-[10%] flex custom-shadow">
        <div className="h-full w-1/2 relative">
          <img src="./Hongo.png" alt="" className="h-full w-full" />
        </div>
        <div className="h-full w-1/2 rounded-r-2xl flex flex-col items-center justify-center">
          <strong><h1 className="justify-items-start">Register</h1></strong><br />
            <form action="" className="w-[60%] flex flex-col items-start">
                <strong><label htmlFor="" className="text-left">Email</label></strong>
                <input type="email" className="w-full rounded-lg bg-[#D9D9D9] h-8 border-gray-300 placeholder-[#00000080] outline-none pl-2" placeholder='Enter your email'/><br />
                <strong><label htmlFor="">Password</label></strong>
                <input type="password" className="w-full rounded-lg bg-[#D9D9D9] h-8 placeholder-[#00000080] outline-none pl-2" placeholder='Enter your password'/><br /><br />
                <button className="bg-[#85796F] rounded-lg flex self-center w-40 items-center justify-center h-9 text-[#FFFFFF] "><strong>Log in</strong></button><br />
                <label htmlFor="" className="flex self-center text-xs text-[#00000080] cursor-pointer">Do you already have an account?</label> 
                <Link to="/" className="flex self-center text-xs text-[#FFFFFF80] border-b border-[#FFFFFF80] cursor-pointer">Create account</Link>    
            </form>
        </div>
      </div>
    );
  }
  
  export default RegisterForm;