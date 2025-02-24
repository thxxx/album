import { useModalStore } from "@/store/useModalState";
import Image from "next/image";
import React from "react";

const ICS = 18;

function LastSection() {
  const { setIsPreApplyModalOpen } = useModalStore();

  return (
    <div className="p-4 w-[90vw] max-w-[480px] mt-8">
      <div className="p-6 border border-gray-300 bg-black text-white rounded-[8px] flex items-start justify-center flex-col">
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
              }}
              className="h-14 w-14 transition-all duration-200 rounded-full bg-white flex justify-center items-center pl-1 outline outline-gb-200 outline-offset-1 cursor-pointer hover:scale-90"
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
