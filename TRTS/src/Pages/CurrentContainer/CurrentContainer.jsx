import Sidebar from "../../Components/SideBar";
import MonitoringButton from "../../Components/MonitoringButton"
import Plane from "../../Components/Plane";
import Live from "../../Components/Live";
import PlotContainer from "../../Components/PlotContainer";
PlotContainer

function CurrentContainer(){
    return (
        <div className='bg-[#B0A9A4] min-h-screen grid grid-cols-12'>
          <Sidebar>
            <MonitoringButton></MonitoringButton>
          </Sidebar>
          <PlotContainer>
            <Plane>
                <Live></Live>
            </Plane>
          </PlotContainer>
        </div>
    )
}

export default CurrentContainer;