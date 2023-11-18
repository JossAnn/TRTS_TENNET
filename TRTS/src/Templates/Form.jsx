import LoginForm from "../Components/LoginForm";

function Form(){
    return(
        <div className="col-span-8 col-start-3 h-[80%] bg-[#A49C9F] rounded-2xl relative top-[10%] flex custom-shadow">
        <div className="h-full w-1/2 relative">
          <img src="./Hongo.png" alt="" className="h-full w-full" />
        </div>
        <LoginForm/>
      </div>
    )
}

export default Form;