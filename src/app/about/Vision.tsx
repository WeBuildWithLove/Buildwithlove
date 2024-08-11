import { BsPersonWorkspace } from "react-icons/bs";
import { PiHandCoins } from "react-icons/pi";
import VisionComponent from "./VisionComponent";

const Vision = () => {
  return (
    <section className="max-container padding-container pt-14 md:pt-[100px] flex flex-col md:flex-row justify-between gap-10">
      <VisionComponent
        title="Our Vision"
        description="Our vision is to be a leading force in the digital world, known for
          our innovative and heartfelt approach. We aspire to build a community
          of empowered businesses and individuals who thrive online, setting new
          standards in the industry."
        icon={<BsPersonWorkspace className="icon" color="#4B0082" />}
      />
      <VisionComponent
        title="Our Mission"
        description="Our mission is to empower businesses and individuals by creating
          beautiful, functional digital experiences that foster growth and
          success. We are committed to understanding our clients' unique needs
          and delivering tailored solutions with creativity and excellence."
        icon={<PiHandCoins className="icon" color="#4B0082" />}
      />
    </section>
  );
};

export default Vision;
