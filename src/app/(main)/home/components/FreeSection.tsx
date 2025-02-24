import { useModalStore } from "@/store/useModalState";
import React from "react";

function FreeSection() {
  const { setIsPreApplyModalOpen } = useModalStore();

  return (
    <div className="p-4 w-[90vw] max-w-[480px] mt-[10vh]">
      <div className="p-6 border border-gray-300 rounded-[8px] flex items-start justify-center flex-col">
        <div className="text-[22px] font-extrabold">
          무료로 생성해볼 수 있어요!
        </div>
        <div className="text-gray-500 text-sm mt-1 text-left">
          무료로 앨범 커버를 생성하고 마음에 든다면 그때 다운로드를 할지 말지
          결정하실 수 있습니다. 커피한잔 가격으로.
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={() => {
              setIsPreApplyModalOpen(true);
            }}
            className="p-2 border border-gray-300 rounded-[8px] h-[50px] w-[186px] font-bold mt-8 hover:bg-gray-150 text-[16px]"
          >
            무료로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(FreeSection);
