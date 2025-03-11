import { addLog } from "@/hook/useLog";
import { useModalStore } from "@/store/useModalState";
import Image from "next/image";
import React from "react";

const ICS = 18;

function LastSection() {
  const { setIsPreApplyModalOpen } = useModalStore();

  return (
    <div className="p-4 w-[100vw] mt-[10vh] py-12 bg-black flex justify-center items-center">
      {/* <div className="text-[0.9em] border border-gray-200 text-gray-500 w-full flex-wrap text-wrap px-8 flex flex-col gap-2 relative py-8">
        <div className="bg-grid-layout"></div>
        <div
          className="text-gray-900 font-bold text-xl z-10"
          style={{
            background: "linear-gradient(to right, #008A7C, #30BAAC)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Why Sleeve Studio
        </div>
        <div className="z-10">- Optimized model for album covers ✅</div>
        <div className="z-10">
          - Generate 10 unique album covers with a single, precise input — no
          repetitive work required ✅
        </div>
      </div> */}
      <div className="w-full max-w-[800px] p-6 text-white rounded-[8px] flex items-start justify-center flex-col">
        <div className="text-2xl font-extrabold font-jersey-10">
          click to start.wav
        </div>
        <div className="w-full relative mt-2">
          <div className="rounded-full w-full h-[3px] bg-gray-500" />
          <div className="rounded-full h-[3px] top-0 bg-white absolute z-10 border-none animate-expand-contract after:content-[''] after:w-2 after:h-2 after:bg-white after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:transition-none" />
        </div>
        <div className="w-full flex justify-between items-center flex-row mt-6">
          <Image src="/repeat.svg" width={ICS} height={ICS} alt="repeat" />
          <div className="flex flex-row gap-4">
            <Image
              src="/nextplay.svg"
              width={ICS + 4}
              height={ICS + 4}
              alt="repeat"
              className="rotate-180"
            />
            <div
              onClick={() => {
                setIsPreApplyModalOpen(true);
                addLog("last-play-btn");
              }}
              className="h-14 w-14 transition-all duration-200 rounded-full bg-white/95 flex justify-center items-center pl-1 outline outline-gray-500 cursor-pointer hover:scale-95 hover:bg-white"
            >
              <Image src="/play.svg" width={ICS} height={ICS} alt="play" />
            </div>
            <Image
              src="/nextplay.svg"
              width={ICS + 4}
              height={ICS + 4}
              alt="repeat"
            />
          </div>
          <Image src="/shuffle.svg" width={ICS} height={ICS} alt="shuffle" />
        </div>
      </div>
    </div>
  );
}

export default React.memo(LastSection);
