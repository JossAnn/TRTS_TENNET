import MonitoringButton from "../../Components/MonitoringButton";
import Plane from "../../Components/Plane";
import PlotContainer from "../../Components/PlotContainer";
import HeaderGraphics from "../../Components/HeaderGraphics";
import BarChart from "../../Components/BarChart";
import Sidebar from "../../Components/SideBar";

function HumidityGraph() {
    return(
        <div className='bg-[#B0A9A4] min-h-screen grid grid-cols-12'>
            <Sidebar>
                <MonitoringButton></MonitoringButton>
            </Sidebar>
            <PlotContainer>
                <Plane>
                    <HeaderGraphics></HeaderGraphics>
                    <BarChart></BarChart>
                </Plane>
          </PlotContainer>
        </div>
    )
}

export default HumidityGraph;