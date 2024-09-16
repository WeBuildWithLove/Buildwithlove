import { BsPersonWorkspace } from "react-icons/bs";
import { PiHandCoins } from "react-icons/pi";
import VisionComponent from "./VisionComponent";

const Vision = () => {
  return (
    <section className="max-container padding-container pt-14 md:pt-[100px] flex flex-col md:flex-row justify-between gap-10">
      <VisionComponent
        title="Our Vision"
        description="We aim to be a driving force in the digital space, known for our innovative solutions and commitment to supporting businesses of all sizes. Our vision is to create a community of thriving businesses that leverage digital experiences to succeed and grow."
        icon={<BsPersonWorkspace className="icon" color="#4B0082" />}
      />
      <VisionComponent
        title="Our Mission"
        description="Our mission is to empower businesses and individuals by delivering beautiful and functional digital experiences. We are dedicated to understanding each client’s unique needs, providing customized solutions that drive growth and success, while maintaining a focus on creativity and quality."
        icon={<PiHandCoins className="icon" color="#4B0082" />}
      />
    </section>
  );
};

export default Vision;
