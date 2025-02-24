import React from "react";

function Footer() {
  return (
    <div className="mt-[20vh] flex items-end justify-center flex-row w-full">
      <div className="w-[90%] max-w-[480px] border-t border-t-gray-300 pb-[5vh]">
        <div className="w-full flex flex-row justify-between mt-2 text-sm text-gray-300">
          <span>terms of service</span>
          <span>contact - x</span>
          <span>privacy policy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
