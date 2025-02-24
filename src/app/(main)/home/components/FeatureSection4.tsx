import React from "react";
import Image from "next/image";

function FeatureSection3() {
  return (
    <div className="p-4 w-[98vw] max-w-[480px] max-h-[480px]">
      <div className="bg-black rounded-[8px] w-full h-full p-6 flex flex-col justify-between items-center">
        <Image
          src="/glif.gif"
          width={160}
          height={160}
          alt="source-https://blog.adafruit.com/2020/09/01/atom-inspired-gif-art-from-valeris-arttuesday/"
          className=""
        />
        <div className="font-bold text-[1.2em] leading-7 tracking-tight text-white mt-4">
          최고 퀄리티의 앨범 커버를
          <br />
          한번의 입력으로
        </div>
        <div className="text-gray-400 text-[0.875em] mt-2">
          sleeve studio는 몇십 장의 이미지를 생성하고 그 중 가장 적합한
          이미지만을 선택합니다. 또한, 해당 이미지가 적합한 이유를 함께 제공하여
          판단을 도와드립니다.
        </div>
      </div>
    </div>
  );
}

export default React.memo(FeatureSection3);
