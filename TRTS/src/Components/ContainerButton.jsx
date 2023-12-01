import { Link } from "react-router-dom";

function ContainerButton(){
    return (
        <>
          <Link to="/containers"className="w-40 h-10 border-l border-b border-black text-xl font-bold text-center">Containers</Link><br />
          <Link to="/newcontainer" className="w-40 h-10 border-l border-b border-black text-xl font-bold text-center">New container</Link><br />
        </>
    )
}

export default ContainerButton;