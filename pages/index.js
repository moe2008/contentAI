import Spline from "@splinetool/react-spline";
import { Inter } from "next/font/google";
import { FaTwitter, FaGithub } from "react-icons/fa";
import Router from "next/router";
import { Button } from "@material-tailwind/react";
import IntroAnimation from "@/components/UI/IntroAnimation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const clickTryApp = () => {
    Router.push("/app");
  };
  return (
    <div className="relative">
      <IntroAnimation />
      <main
        className={`relative h-screen sm:min-h-screen sm:max-w-screen mainAnim ${inter.className}`}
      >
        <div className="absolute top-0 flex flex-row w-full justify-between p-16">
          <span className="text-white flex flex-row gap-4">
            <FaTwitter
              className="w-6 h-6 hover:cursor-pointer iconAnim"
              onClick={() => (document.location.href = "https://x.com/")}
            />
            <FaGithub
              className="w-6 h-6 hover:cursor-pointer iconAnim"
              onClick={() => (document.location.href = "https://github.com/")}
            />
          </span>
        </div>

        <Spline scene="https://prod.spline.design/r80KJbUOe98a2WvU/scene.splinecode" />

        <div className="absolute top-2/3 left-1/2 -translate-x-1/2">
          <Button color="purple" onClick={clickTryApp} className="animationBox">
            Try App
          </Button>
        </div>
      </main>
    </div>
  );
}
