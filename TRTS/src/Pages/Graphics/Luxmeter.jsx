import MonitoringButton from "../../Components/MonitoringButton";
import Plane from "../../Components/Plane";
import PlotContainer from "../../Components/PlotContainer";
import HeaderGraphics from "../../Components/HeaderGraphics";
import MixedChart from "../../Components/MixedChart";
import Sidebar from "../../Components/SideBar";

function Luxmeter() {
    return(
        <div className='bg-[#B0A9A4] min-h-screen grid grid-cols-12'>
            <Sidebar>
                <MonitoringButton></MonitoringButton>
            </Sidebar>
            <PlotContainer>
                <Plane>
                    <HeaderGraphics></HeaderGraphics>
                    <MixedChart></MixedChart>
                </Plane>
          </PlotContainer>
        </div>
    )
}

export default Luxmeter;