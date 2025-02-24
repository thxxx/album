"use client";

import React, { useEffect } from "react";
import Layout from "../layout";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Teamintro from "./components/Teamintro";
import FeatureSection1 from "./components/FeatureSection1";
import FeatureSection2 from "./components/FeatureSection2";
import FeatureSection3 from "./components/FeatureSection3";
import FreeSection from "./components/FreeSection";
import Footer from "./components/Footer";
import LastSection from "./components/LastSection";
import { useModalStore } from "@/store/useModalState";
import ApplyModal from "./components/ApplyModal";
import { v4 } from "uuid";
import FeatureSection4 from "./components/FeatureSection4";

const Home = () => {
  const { isPreApplyModalOpen, setIsPreApplyModalOpen } = useModalStore();

  const addLog = async () => {
    const getLodId = localStorage.getItem("logId");
    if (!getLodId) {
      const logid = v4();
      localStorage.setItem("logId", logid);
    }
  };

  useEffect(() => {
    addLog();
  }, []);

  return (
    <Layout>
      <div className="bg-white flex justify-center items-center text-center flex-col w-full">
        {/* header */}
        <Header />
        {/* hero */}
        <HeroSection />
        {/* Team intro */}
        <Teamintro />
        {/* Feature section 1 */}
        <FeatureSection1 />
        {/* Feature section 2 */}
        <FeatureSection2 />
        {/* Feature section 3 */}
        <FeatureSection3 />
        {/* Feature section 4 */}
        <FeatureSection4 />
        {/* Free section */}
        <FreeSection />
        {/* Last section */}
        <LastSection />
        {/* Footer */}
        <Footer />

        <ApplyModal
          isModalOpen={isPreApplyModalOpen}
          setIsModalOpen={setIsPreApplyModalOpen}
        />
      </div>
    </Layout>
  );
};

export default Home;
