import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "@/components/pages/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="items-center max-w-md min-h-screen px-4 pt-24 mx-auto">
      <HomePage />
    </main>
  );
}
