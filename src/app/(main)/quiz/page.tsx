"use client";

import React, { useEffect } from "react";
import Layout from "../layout";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const Quiz = () => {
  const router = useRouter();

  const loadQuizes = async () => {
    const res = await supabase.from("items").select();
    console.log("res", res);
  };

  useEffect(() => {
    loadQuizes();
  }, []);

  return (
    <Layout>
      <div className="flex justify-center items-center text-center flex-col gap-[40px]">
        <div></div>
      </div>
    </Layout>
  );
};

export default Quiz;
