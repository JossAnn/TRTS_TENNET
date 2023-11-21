import Plot from "../../Components/plot";
import Img from "../../Components/img";
import RegisterForm from "../../Components/RegisterForm";

function RegisterPage (){
  return(
      <div className='bg-[#B0A9A4] min-h-screen grid grid-cols-12'>
        <Plot>
          <Img></Img>
          <RegisterForm></RegisterForm>
        </Plot>
      </div>
  )
}

export default RegisterPage;
