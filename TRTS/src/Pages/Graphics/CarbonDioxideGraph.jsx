import MonitoringButton from "../../Components/MonitoringButton";
import Plane from "../../Components/Plane";
import PlotContainer from "../../Components/PlotContainer";
import HeaderGraphics from "../../Components/HeaderGraphics";
import CumulativeHistogram from "../../Components/CumulativeHistogram";
import Sidebar from "../../Components/SideBar";

function CarboDioxideGraph() {
    return (
        <div className='bg-[#B0A9A4] min-h-screen grid grid-cols-12'>
            <Sidebar>
                <MonitoringButton></MonitoringButton>
            </Sidebar>
            <PlotContainer>
                <Plane>
                    <HeaderGraphics></HeaderGraphics>
                    <CumulativeHistogram></CumulativeHistogram>
                </Plane>
          </PlotContainer>
        </div>
    )
}

export default CarboDioxideGraph;