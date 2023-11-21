import { useState } from 'react';
import { Link } from 'react-router-dom';

function ContainerForm() {
  const [isManualEndDayActive, setIsManualEndDayActive] = useState(false);
  const [isTempManualActive, setIsTempManualActive] = useState(false);

  const toggleEndDay = () => {
    setIsManualEndDayActive(!isManualEndDayActive);
  };

  const toggleTempManual = () => {
    setIsTempManualActive(!isTempManualActive);
  };

  return(
    <div className="col-span-10 h-full w-full rounded-2xl bg-[#A49C9F] custom-shadow flex flex-col items-center justify-center p-4 font-bold text- text-lg text-white">
      <input type="text" className="w-[70%] h-10 mb-4 text-center bg-[#9A9087]  placeholder-white outline-none border-2 border-solid border-[#B0A9A4] rounded-lg" placeholder="Crop name" />

      <div className="w-full flex justify-between items-center mb-20 mt-20">
        <input type="text" className="w-[30%] h-10 text-center bg-[#9A9087]  placeholder-white outline-none border-2 border-solid border-[#B0A9A4] rounded-lg" placeholder="Start day" />
        <input type="text" className="w-[30%] h-10 text-center bg-[#9A9087]  placeholder-white outline-none border-2 border-solid border-[#B0A9A4] rounded-lg" placeholder="End day(auto)" disabled={!isManualEndDayActive} />
        <button onClick={toggleEndDay} className={`w-[30%] h-10 border-2 border-solid border-[#B0A9A4] rounded-lg text-center ${isManualEndDayActive ? 'bg-[#9A9087]' : 'bg-[#85796F]'}`}>
          {isManualEndDayActive ? 'End day(manual)' : 'End day(auto)'}
        </button>
      </div>

      <div className="w-full flex justify-between items-center mb-20">
        <input type="text" className="w-[30%] h-10 text-center bg-[#9A9087]  placeholder-white outline-none border-2 border-solid border-[#B0A9A4] rounded-lg" placeholder="Type of mushroom" />
        <input type="text" className="w-[30%] h-10 text-center bg-[#9A9087]  placeholder-white outline-none border-2 border-solid border-[#B0A9A4] rounded-lg" placeholder="Temp.mg(auto)" disabled={!isTempManualActive} />
        <button onClick={toggleTempManual} className={`w-[30%] h-10 border-2 border-solid border-[#B0A9A4] rounded-lg text-center ${isTempManualActive ? 'bg-[#9A9087]' : 'bg-[#85796F]'}`}>
          {isTempManualActive ? 'Temp manual' : 'Temp auto'}
        </button>
      </div>

      <div className="w-full flex justify-between items-center">
        <input type="text" className="w-[65%] h-10 text-center bg-[#9A9087]  placeholder-white outline-none border-2 border-solid border-[#B0A9A4] rounded-lg" placeholder="Substratum" />
        <Link to="/containers" className="w-[30%] h-10 text-center bg-[#85796F] border-2 border-solid border-[#B0A9A4] rounded-lg">Add container</Link>

      </div>
    </div>
  )
}

export default ContainerForm;