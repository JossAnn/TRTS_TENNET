import { useState } from 'react';

function ContainerForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [temp, setTemp] = useState('');
  const [initDay, setInitDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [substratum, setSubstratum] = useState('');

  const addContainer = async () => {
    try {
      const userId = localStorage.getItem('user_id');

      const response = await fetch('44.196.3.52:3006/container', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          type,
          temp,
          init_day: initDay,
          end_day: endDay || undefined,
          substratum,
          user_id: userId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      window.location.href = '/containers';
    } catch (error) {
      alert(error.message);
    }
  };
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
      <input type="text" className="w-[70%] h-10 mb-4 text-center bg-[#9A9087]  placeholder-white outline-none border-2 border-solid border-[#B0A9A4] rounded-lg" onChange={(e) => setName(e.target.value)} placeholder="Crop name" />

      <div className="w-full flex justify-between items-center mb-20 mt-20">
        <input type="text" className="w-[30%] h-10 text-center bg-[#9A9087]  placeholder-white outline-none border-2 border-solid border-[#B0A9A4] rounded-lg" onChange={(e) => setInitDay(e.target.value)} placeholder="Start day" />
        <input type="text" className="w-[30%] h-10 text-center bg-[#9A9087]  placeholder-white outline-none border-2 border-solid border-[#B0A9A4] rounded-lg" onChange={(e) => setEndDay(e.target.value)} placeholder="End day(auto)" disabled={!isManualEndDayActive} />
        <button onClick={toggleEndDay} className={`w-[30%] h-10 border-2 border-solid border-[#B0A9A4] rounded-lg text-center ${isManualEndDayActive ? 'bg-[#9A9087]' : 'bg-[#85796F]'}`}>
          {isManualEndDayActive ? 'End day(manual)' : 'End day(auto)'}
        </button>
      </div>

      <div className="w-full flex justify-between items-center mb-20">
        <input type="text" className="w-[30%] h-10 text-center bg-[#9A9087]  placeholder-white outline-none border-2 border-solid border-[#B0A9A4] rounded-lg" onChange={(e) => setType(e.target.value)} placeholder="Type of mushroom" />
        <input type="text" className="w-[30%] h-10 text-center bg-[#9A9087]  placeholder-white outline-none border-2 border-solid border-[#B0A9A4] rounded-lg" onChange={(e) => setTemp(e.target.value)} placeholder="Temp.mg(auto)" disabled={!isTempManualActive} />
        <button onClick={toggleTempManual} className={`w-[30%] h-10 border-2 border-solid border-[#B0A9A4] rounded-lg text-center ${isTempManualActive ? 'bg-[#9A9087]' : 'bg-[#85796F]'}`}>
          {isTempManualActive ? 'Temp manual' : 'Temp auto'}
        </button>
      </div>

      <div className="w-full flex justify-between items-center">
        <input type="text" className="w-[65%] h-10 text-center bg-[#9A9087]  placeholder-white outline-none border-2 border-solid border-[#B0A9A4] rounded-lg" onChange={(e) => setSubstratum(e.target.value)} placeholder="Substratum" />
        <button onClick={addContainer} className="w-[30%] h-10 text-center bg-[#85796F] border-2 border-solid border-[#B0A9A4] rounded-lg">Add container</button>

      </div>
    </div>
  )
}

export default ContainerForm;