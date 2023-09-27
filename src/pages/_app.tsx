import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-full w-full flex-col ">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div className=" hide-scrollbar h-full overflow-y-auto ">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
