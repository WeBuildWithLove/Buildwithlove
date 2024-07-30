import Commitment from "@/components/Home/Commitment";
import HomeHero from "@/components/Home/HomeHero";
import Services from "@/components/Home/Services";
import Layout from "@/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <HomeHero/>
      <Services/>
      <Commitment/>
    </Layout>
  );
}
