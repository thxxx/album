import React from "react";
import Image from "next/image";

function Teamintro() {
  return (
    <div className="flex flex-col justify-between items-center text-center my-[5vh]">
      <Image
        src="/img/logo.png"
        width={44}
        height={44}
        alt="logo"
        className="ml-2"
      />
      <div className="text-2xl font-semibold">
        <i>Sleeve Studio</i>
      </div>
      <Image
        src="/img/covers.png"
        width={260}
        height={260}
        alt="logo"
        className="mt-0"
      />
    </div>
  );
}

export default Teamintro;
