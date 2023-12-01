import Plot from "../../Components/plot";
import Img from "../../Components/img";
import LoginForm from "../../Components/LoginForm"

function Login (){
    return(
        <div className='bg-[#B0A9A4] min-h-screen grid grid-cols-12'>
          <Plot>
            <Img></Img>
            <LoginForm></LoginForm>
          </Plot>
        </div>
    )
}

export default Login;