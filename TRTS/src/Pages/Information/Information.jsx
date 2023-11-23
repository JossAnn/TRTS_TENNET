import MonitoringButton from "../../Components/MonitoringButton";
import Plane from "../../Components/Plane";
import PlotContainer from "../../Components/PlotContainer";
import Sidebar from "../../Components/SideBar";
import Info from "../../Components/Info";

function Information() {
    return (
        <div className='bg-[#B0A9A4] min-h-screen grid grid-cols-12'>
            <Sidebar>
                <MonitoringButton></MonitoringButton>
            </Sidebar>
            <PlotContainer>
                <Plane>
                    <Info></Info>
                </Plane>
          </PlotContainer>
        </div>
    )
}

export default Information;