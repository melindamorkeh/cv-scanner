import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { BackgroundPattern } from "../components/background-pattern";

import { useNavigate } from "react-router-dom";

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Scanly
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Discover customised CV analysis and job matching, powered by AI. Streamline application season with this one simple tool.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button 
          onClick = {() => navigate("/login")}
          size="lg" className="rounded-full text-base">
            Get Started <ArrowUpRight className="!h-5 !w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
