import React from "react";
import Image from "next/image";

function FeatureSection1() {
  return (
    <div className="p-4 max-w-[480px] flex sm:h-[480px]">
      <div className="bg-gray-100 rounded-[8px] flex flex-col w-full h-full p-6 justify-between items-center">
        <Image
          src="/img/sec1.png"
          width={280}
          height={280}
          alt="sec1"
          className="mt-2 w-[90%]"
        />
        <div>
          <div className="font-bold text-[1.2em] leading-7 tracking-tight mt-8">
            {/* Analyze your track and capture its intent to create the perfect
            album cover image.  */}
            Analyze your track and its intent to generate the most fitting album
            cover
            {/* 곡을 분석하고, 의도까지 반영해서
            <br />
            앨범 커버 이미지를 생성합니다. */}
          </div>
          <div className="text-gray-500 text-[0.9em] mt-2">
            Upload your track with details, or simply provide a description - we
            {"'"}ll generate the most suitable image.
            {/* Upload your track and share some details about it. If your track is
            incomplete, a description will suffice.
            <br />
            Even if you don’t specify a desired image, we’ll determine and
            generate the image that best suits your song. */}
            {/* 곡을 업로드하고 곡에 대해서 적어주세요. 곡이 미완성이라면, 설명만
            적어주셔도 됩니다.
            <br />
            원하는 이미지에 대해서 직접 적지 않더라도, 노래에 가장 어울리는
            이미지를 직접 판단 후 생성해 드립니다. */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(FeatureSection1);
