import React from "react";
import Image from "next/image";
import { useModalStore } from "@/store/useModalState";
import { addLog } from "@/hook/useLog";

function Header() {
  const { setIsPreApplyModalOpen } = useModalStore();

  return (
    <div className="py-4 px-2 flex flex-row justify-between items-center bg-white w-full">
      <Image
        src="/img/logo.png"
        width={48}
        height={48}
        alt="logo"
        className="ml-2"
      />
      <button
        onClick={() => {
          setIsPreApplyModalOpen(true);
          addLog("app-btn");
        }}
        className="bg-black rounded-full text-white px-4 py-1.5 text-sm font-semibold"
      >
        Join the Waitlist
      </button>
    </div>
  );
}

export default React.memo(Header);
