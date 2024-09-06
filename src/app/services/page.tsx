import Layout from "@/layout";
import Hero from "./Hero";
import Services from "./Services";
import Clients from "../about/Clients";
import FAQ from "../about/FAQ";
import ElevateCard from "@/components/Home/ElevateCard";

const page = () => {
  return (
    <Layout>
        <Hero />
        <Services />
        <Clients />
        <FAQ />
        <ElevateCard />
    </Layout>
  );
};

export default page;