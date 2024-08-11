import Layout from "@/layout";
import Hero from "./Hero";
import Services from "./Services";
import Clients from "../about/Clients";
import FAQ from "../about/FAQ";

const page = () => {
  return (
    <Layout>
        <Hero />
        <Services />
        <Clients />
        <FAQ />
    </Layout>
  );
};

export default page;