import Layout from "@/layout";
import Hero from "./Hero";
import Vision from "./Vision";
import MeetTheTeam from "./MeetTheTeam";
import Clients from "./Clients";
import FAQ from "./FAQ";
import ElevateCard from "@/components/Home/ElevateCard";

const page = () => {
  return (
    <Layout>
      <Hero />
      <Vision />
      <MeetTheTeam />
      <Clients />
      <FAQ />
      <ElevateCard />
    </Layout>
  );
};

export default page;
