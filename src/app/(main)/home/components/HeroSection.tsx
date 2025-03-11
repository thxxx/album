import React from "react";
import Image from "next/image";
import { useModalStore } from "@/store/useModalState";
import { addLog } from "@/hook/useLog";

function HeroSection() {
  const { setIsPreApplyModalOpen } = useModalStore();

  return (
    <div className="pt-[6vh] pb-[10vh]">
      <h3 className="text-3xl font-bold md:text-5xl">
        Make a perfect artwork
        <br />
        only for your song
      </h3>
      <div className="text-[0.9em] md:text-[1.1em] mt-4 text-gray-500 w-full flex-wrap text-wrap px-8">
        With just one click, get a{" "}
        <span className="text-gray-900">uniquely designed album cover</span>{" "}
        crafted through a model optimized for album cover images.
        {/* 한번의 클릭으로 앨범 커버 이미지에 최적화된 모델을 통해 완성된 디자인의{" "}
        <strong className="text-gray-900">유니크한 앨범 커버</strong>를
        가져가세요. */}
      </div>
      <button
        className="bg-new-black rounded-full text-white px-8 py-2 text-lg font-normal mt-8 hover:opacity-90"
        onClick={() => {
          setIsPreApplyModalOpen(true);
          addLog("hero-btn");
        }}
      >
        Try for free
      </button>
      <div className="text-gray-700 mt-2">1000 + in waitlist</div>
      <div className="flex relative items-center justify-center mt-[12vh]">
        <Image
          src="/img/heroimg.png"
          width={260}
          height={260}
          alt="logo"
          className="z-10 pr-6"
        />
        <div className="absolute top-[-8px] pl-10">
          <Image
            src="/img/lp.png"
            width={236}
            height={236}
            alt="logo"
            className="animate-spin-slow-2 ml-6"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
