import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useModalStore } from "@/store/useModalState";
import { addLog } from "@/hook/useLog";

function Header() {
  const { setIsPreApplyModalOpen } = useModalStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`z-50 py-3 px-2 flex flex-row justify-between items-center transition-transform duration-300 bg-white w-full fixed top-0 left-0 ${
          isScrolled
            ? "translate-y-0 opacity-100 border-bottom border"
            : "-translate-y-full opacity-0"
        }`}
      >
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
      <div
        className={`z-50 py-4 px-2 flex flex-row justify-between items-center transition-transform duration-300 bg-white w-full`}
      >
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
    </>
  );
}

export default React.memo(Header);
