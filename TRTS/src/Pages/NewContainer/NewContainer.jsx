import Sidebar from "../../Components/SideBar";
import PlotContainer from "../../Components/PlotContainer";
import ContainerButton from "../../Components/ContainerButton";
import Plane from "../../Components/Plane";
import ContainerForm from "../../Components/ContainerForm";

function NewContainer() {
    return (
        <div className='bg-[#B0A9A4] min-h-screen grid grid-cols-12'>
          <Sidebar>
            <ContainerButton></ContainerButton>
          </Sidebar>
          <PlotContainer>
            <Plane>
                <ContainerForm></ContainerForm>
            </Plane>
          </PlotContainer>
        </div>
    )
}

export default NewContainer;