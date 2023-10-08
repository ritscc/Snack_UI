import Image from "next/image";
import { Inter } from "next/font/google";
import Chat from "@/components/Chat";
import Online from "@/components/Online";
import ChatHomeCenter from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex w-full  ">
      <Chat/>
    </div>
  );
}
