import React from "react";
import Image from "next/image";

function FeatureSection3() {
  return (
    <div className="p-4 max-w-[480px] flex sm:h-[480px]">
      <div className="bg-gray-100 rounded-[8px] flex flex-col w-full h-full p-6 justify-between items-center">
        <div>
          <div className="font-bold text-[1.2em] leading-7 tracking-tight">
            생성된 이미지에 대한 저작권을 제공하고
            <br />
            상업적 이용도 가능합니다.
          </div>
          <div className="text-gray-500 text-[0.875em] mt-2">
            생성된 커버 이미지의 저작권을 제공하며, 상업적 용도로도 자유롭게
            사용하실 수 있습니다.
          </div>
        </div>
        <Image
          src="/img/sec3.png"
          width={280}
          height={280}
          alt="sec1"
          className="mt-6 w-[80%]"
        />
      </div>
    </div>
  );
}

export default React.memo(FeatureSection3);
