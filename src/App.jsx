import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./Layout";
import Hero from "./sectionsV2/Hero";
import Brands from "./sections/Brands";
import FutureListing from "./sections/FutureListing";
import GetStrong from "./sectionsV2/GetStrong";
import NoMoreShitCoin from "./sectionsV2/NoMoreShitCoin";
import Presale from "./sectionsV2/PreSale";
import FutureListing2 from "./sectionsV2/FollowUS";
import Roadmap from "./sectionsV2/Roadmap";
import EarnMore from "./sectionsV2/EarnMoreBro";
import Faq from "./sections/Faq";
import Footer from "./sectionsV2/Footer";
import Footer2 from "./sections/Footer2";
import Dogenomics from "./sectionsV2/Dogenomics";
import BlackSection from "./sectionsV2/BlackSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Hero />
        <Brands />
        <FutureListing />
        <GetStrong />
        <NoMoreShitCoin />
        <Presale />
        <FutureListing2 />
        <Dogenomics />
        <BlackSection />
        <Roadmap />
        <EarnMore />
        <Faq />
        <Footer />
        <Footer2 />
      </Layout>
    </>
  );
}

export default App;
