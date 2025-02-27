import { Button } from "@/components/ui/button";
import React from "react";
import NavigationMenu from "./NavigationMenu";

const SiteHeaderMD: React.FC = () => {
  return (
    <div className="flex items-center gap-6">
      <NavigationMenu />
      <Button variant="outline" className="ml-14 h-8">Request a Demo</Button>
    </div>
  );
};

export default SiteHeaderMD;
