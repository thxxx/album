import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="py-4 px-2 flex flex-row justify-between items-center bg-white w-full">
      <Image
        src="/img/logo.png"
        width={48}
        height={48}
        alt="logo"
        className="ml-2"
      />
      <button className="bg-black rounded-full text-white px-4 py-1.5 text-sm font-semibold">
        Try for free
      </button>
    </div>
  );
}

export default React.memo(Header);
