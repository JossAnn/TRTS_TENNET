import { Link } from "react-router-dom";

function MonitoringButton(){
    return (
        <>
          <Link to="/currentcontainer"className="w-40 h-10 border-l border-b border-black text-xl font-bold text-center">Live</Link><br />
          <Link to="/temperature"className="w-40 h-10 border-l border-b border-black text-xl font-bold text-center">Graphics</Link><br />
          <Link to="/containers"className="w-40 h-10 border-l border-b border-black text-xl font-bold text-center">Containers</Link><br />
        </>
    )
}

export default MonitoringButton;