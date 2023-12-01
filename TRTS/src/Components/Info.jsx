import React, { useState, useEffect } from 'react';


function Info({ containerId }) {
    const [containerData, setContainerData] = useState({});

    useEffect(() => {
        fetch(`http://127.0.0.1/containers/${containerId}`)
            .then(response => response.json())
            .then(data => setContainerData(data))
            .catch(error => console.error('Error fetching container data:', error));
    }, [containerId]);
    
    return (
        <div className="w-full h-full col-span-10 grid grid-cols-2 bg-[#A49C9F] custom-shadow rounded-bl-2xl rounded-br-2xl text-white">
            <div className="col-span-1 flex flex-col items-center justify-center">
                <strong><label htmlFor="" className="text-center font-bold">Name</label></strong>
                <input type="text" disabled className="w-[80%] font-bold rounded-lg bg-[#9A9087] h-8  placeholder-white outline-none pl-2 text-center border-2 border-solid border-[#B0A9A4]" value={containerData.name || ''} placeholder='Container 1'/><br />
                <strong><label htmlFor="">Type</label></strong>
                <input type="text" disabled className="w-[80%] font-bold rounded-lg bg-[#9A9087] h-8 placeholder-white outline-none pl-2 text-center border-2 border-solid border-[#B0A9A4]"value={containerData.type || ''} placeholder='Pleurotus ostreatus'/><br />
                <strong><label htmlFor="" className="text-left">Substratum</label></strong>
                <input type="text" disabled className="w-[80%] rounded-lg bg-[#9A9087] font-bold h-8  placeholder-white outline-none pl-2 text-center border-2 border-solid border-[#B0A9A4]"value={containerData.substratum || ''} placeholder='peanut shell'/><br />
                <strong><label htmlFor="">Start day</label></strong>
                <input type="text" disabled className="w-[80%] rounded-lg font-bold bg-[#9A9087] h-8 placeholder-white outline-none pl-2 text-center border-2 border-solid border-[#B0A9A4]"value={containerData.init_day || ''} placeholder='21/11/23'/><br />
                <strong><label htmlFor="" className="text-left">End day</label></strong>
                <input type="text" disabled className="w-[80%] rounded-lg font-bold bg-[#9A9087] h-8 placeholder-white outline-none pl-2 text-center border-2 border-solid border-[#B0A9A4]"value={containerData.end_day || ''} placeholder='21/12/23'/>
            </div>
            <div className="col-span-1 col-start-2 h-full flex flex-col justify-between">
                <div className="h-1/3 flex flex-col justify-around items-center">
                    <h2 className="text-center font-bold">Temperature</h2>
                    <div className="flex justify-between w-full px-4">
                        <div><span className="font-bold">Half</span><span className="font-bold">: 24.98</span></div>
                        <div><span className="font-bold">Median</span><span className="font-bold">: 25.15</span></div>
                        <div><span className="font-bold">Fashion</span><span className="font-bold">: 25.02</span></div>
                    </div>
                </div>

                <div className="h-1/3 flex flex-col justify-around items-center">
                    <h2 className="text-center font-bold">Humidity</h2>
                    <div className="flex justify-between w-full px-4">
                        <div><span className="font-bold">Half</span><span className="font-bold">: 77.14</span></div>
                        <div><span className="font-bold">Median</span><span className="font-bold">: 76.77</span></div>
                        <div><span className="font-bold">Fashion</span><span className="font-bold">: 76.94</span></div>
                    </div>
                </div>

                <div className="h-1/3 flex flex-col justify-around items-center">
                    <h2 className="text-center font-bold">Co2</h2>
                    <div className="flex justify-between w-full px-4">
                        <div><span className="font-bold">Half</span><span className="font-bold">: 524.59</span></div>
                        <div><span className="font-bold">Median</span><span className="font-bold">:  540.93</span></div>
                        <div><span className="font-bold">Fashion</span><span className="font-bold">: 537.57</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;