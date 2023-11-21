import Sidebar from "../../Components/SideBar";
import PlotContainer from "../../Components/PlotContainer";
import ContainerButton from "../../Components/ContainerButton";
import Plane from "../../Components/Plane";
import AllContainers from "../../Components/AllContainers";

function Containers() {
    return (
        <div className='bg-[#B0A9A4] min-h-screen grid grid-cols-12'>
          <Sidebar>
            <ContainerButton></ContainerButton>
          </Sidebar>
          <PlotContainer>
            <Plane>
                <AllContainers></AllContainers>
            </Plane>
          </PlotContainer>
        </div>
    )
}

export default Containers;