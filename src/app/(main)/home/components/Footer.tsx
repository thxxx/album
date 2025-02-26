import React from "react";
import { addLog } from "@/hook/useLog";

function Footer() {
  return (
    <div className="mt-[30vh] flex items-end justify-center flex-row w-full">
      <div className="w-[90%] max-w-[480px] border-t border-t-gray-300 pb-[5vh]">
        <div className="w-full flex flex-row justify-between mt-2 text-sm text-gray-400">
          <span
            className="cursor-pointer hover:text-gray-500"
            onClick={() => {
              window.open(
                "https://sprinkle-cartwheel-102.notion.site/Terms-of-Service-10606d5cf0e680bb830afedd4e62ec40"
              );
              addLog("terms-of-service");
            }}
          >
            terms of service
          </span>
          <span
            className="cursor-pointer hover:text-gray-500"
            onClick={() => {
              window.open("https://x.com/DanielKim_a");
              addLog("contact");
            }}
          >
            contact - x
          </span>
          <span
            className="cursor-pointer hover:text-gray-500"
            onClick={() => {
              window.open(
                "https://app.termly.io/policy-viewer/policy.html?policyUUID=3b0fd428-814d-4aee-8b38-5e96a3024dad"
              );
              addLog("privacy-policy");
            }}
          >
            privacy policy
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
