import { Link } from "react-router-dom";

function HeaderGraphics() {
    return(
        <div className="w-full h-full col-span-10 bg-[#A49C9F] rounded-tl-2xl rounded-tr-2xl grid grid-cols-4 custom-shadow items-center place-items-center">
            <div className="flex justify-center items-center border-l border-b border-black w-[80%] h-[50%]">
                <Link to="/temperature" className="w-full h-full text-xl font-bold text-center">Temperature</Link>
            </div>
            <div className="flex justify-center items-center border-l border-b border-black w-[80%] h-[50%]">
                <Link to="/humidity" className="w-full h-full text-xl font-bold text-center">Humidity</Link>
            </div>
            <div className="flex justify-center items-center border-l border-b border-black w-[80%] h-[50%]">
                <Link to="/co2" className="w-full h-full text-xl font-bold text-center">CO2</Link>
            </div>
            <div className="flex justify-center items-center border-l border-b border-black w-[80%] h-[50%]">
                <Link to="/luxometer" className="w-full h-full text-xl font-bold text-center">Luxometer</Link>
            </div>
        </div>
    )
}

export default HeaderGraphics;
