import React from 'react';
import Title from './Components/Title';
import Button from './Components/Button';
import "./style.css";

import loginIcon from './assets/Hongo.svg';
import registerIcon from './assets/Hongo.svg';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-[50px] shadow-lg w-[720px] h-[554px] flex flex-col items-center bg-[#D6C0AB] bg-opacity-80 border border-solid border-8 border-[#3E3D3B]">
        <Title text="TRTS" className="text-[150px] font-bold"/>
        <div className="flex flex-col mt-4 text-[75px]">
          <Button text="logIn" icon={loginIcon} textColor="text-custom-white" bgColor="bg-custom" size="75px" border="w-[540px] h-[113px] rounded-[50px] mt-6 border border-solid border-8 border-[#3E3D3B]" />
          <Button text="Register" icon={registerIcon} textColor="text-custom-white" bgColor="bg-custom" border="w-[540px] h-[113px] rounded-[50px] mt-5 border border-solid border-8 border-[#3E3D3B]"  />
        </div>
        <h1 className='text-[20px] mt-5'>Have a problem?</h1>
      </div>
    </div>
  );
}

export default App;