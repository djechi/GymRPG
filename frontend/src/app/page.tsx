"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getStoredUser } from "@/src/data/api";
import loadingGif from "@/public/loadingRun.gif"
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const user = getStoredUser();
    router.replace(user ? "/character" : "/login")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Image
        src={loadingGif}
        alt="LoadingChibi"
        width={100}
        height={100}
      />
    </div>
  );
};
