import Commitment from "@/components/Home/Commitment";
import HomeHero from "@/components/Home/HomeHero";
import Layout from "@/layout";
import Image from "next/image";
import Services from "./services/Services";

export default function Home() {
  return (
    <Layout>
      <HomeHero/>
      <Services/>
      <Commitment/>
    </Layout>
  );
}
