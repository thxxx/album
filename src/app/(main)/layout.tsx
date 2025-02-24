"use client";

import React from "react";
import { Provider } from "@/components/ui/provider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex bg-slate-100 justify-center items-center w-full h-full min-h-[100vh]">
        {children}
      </div>
    </>
  );
};

export default Layout;
