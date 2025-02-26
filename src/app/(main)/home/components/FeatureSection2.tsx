import React from "react";
import Image from "next/image";

function FeatureSection2() {
  return (
    <div className="p-4 max-w-[480px] flex sm:h-[480px]">
      <div className="rounded-[8px] w-full h-full p-6 flex flex-col justify-between items-center relative bg-gray-800">
        <div className="h-[50vw]">
          <Image
            src="/img/sec2.png"
            width={280}
            height={280}
            alt="sec1"
            className="absolute left-[1px] top-[1px] rounded-tl-[8px] rounded-br-[8px] w-[90%]"
          />
        </div>
        <div>
          <div className="text-white font-bold text-[1.2em] leading-7 tracking-tight">
            Specific requirements and styles
            <br />
            can also be incorporated.
            {/* 구체적인 요구사항과
            <br />
            스타일도 반영가능합니다. */}
          </div>
          <div className="text-gray-400 text-[0.875em] mt-2">
            Choose from sample images to indicate any elements or image styles
            you’d like to see reflected in the design.
            {/* 이미지에 반영되었으면 하는 점이나, 원하는 이미지 스타일을 보기
            이미지들 중에서 골라서 적용해보세요. */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection2;
