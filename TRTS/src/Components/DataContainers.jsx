import { Link } from "react-router-dom";

function DataContainers({ info }) {
    return (
        <div className="col-span-6 grid grid-cols-5 w-full h-full">
            {info.slice(0, 9).map((item, index) => (
                <div key={index} className={`w-full h-[90%] flex flex-col items-center justify-center bg-[#A49C9F] custom-shadow rounded-xl ${index % 3 === 0 ? 'col-start-1' : ''} ${index % 3 === 1 ? 'col-start-3' : ''} ${index % 3 === 2 ? 'col-start-5' : ''}`}>
                    <h1 className="text-sm font-bold text-white">{item.name}</h1>
                    <div className="h-[80%] w-[90%] cursor-pointer">
                        <Link to="/information">
                            <img src="./Hongo2.jpg" className="w-full h-full object-cover rounded-xl"/>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DataContainers;
