import { Link } from "react-router-dom";

function MonitoringButton(){
    return (
        <>
          <button className="w-40 h-10 border-l border-b border-black text-xl"><strong>Live</strong></button><br />
          <button className="w-40 h-10 border-l border-b border-black text-xl"><strong>Graphics</strong></button><br />
          <Link to="/containers"className="w-40 h-10 border-l border-b border-black text-xl font-bold text-center">Containers</Link><br />
        </>
    )
}

export default MonitoringButton;