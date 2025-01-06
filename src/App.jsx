import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import PrivacyPolicy from "./Privacy";
import TermsAndConditions from "./TermsCondition";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Page Route */}
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <Brands />
              <GetStrong />
              <FutureListing />
              <NoMoreShitCoin />
              <Presale />
              <FutureListing2 />
              <Dogenomics />
              <BlackSection />
              <Roadmap />
              <EarnMore />
              <div className="bg-yellow-400 md:hidden p-4 h-[60vh] mb-16 items-start flex">
                <div
                  className="w-full h-full bg-no-repeat  bg-contain"
                  style={{ backgroundImage: "url('/ss.webp')" }}
                ></div>
              </div>
              <Faq />
              <Footer />
              <Footer2 />
            </Layout>
          }
        />
        {/* Privacy Policy Page Route */}
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
              <Footer2 />
            </Layout>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <Layout>
              <TermsAndConditions />
              <Footer2 />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
