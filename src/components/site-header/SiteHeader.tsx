import Logo from "@/assets/LOGO.svg";
import React from "react";
import SiteHeaderMD from "./SiteHeaderMD";
import SiteHeaderSM from "./SiteHeaderSM";

const SiteHeader: React.FC = () => {
  return (
    <header className="flex justify-between p-4 border-b bg-background">
      <div className="logo">
        <img src={Logo} alt="Jacobi Robotics Logo" className="h-12 site-logo" />
      </div>

      <div className="hidden md:flex">
        <SiteHeaderMD />
      </div>
      <div className="md:hidden">
        <SiteHeaderSM />
      </div>
    </header>
  );
};

export default SiteHeader;
