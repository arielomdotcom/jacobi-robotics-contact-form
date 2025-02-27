import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React, { useState } from "react";

const SiteHeaderSM: React.FC = () => {
  const [open, setOpen] = useState(false);

  const menuItemsClasses =
    "block px-3 py-2 text-lg font-bold hover:bg-gray-100";
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-2">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col h-full">
        <h2 id="menu-title" className="text-lg font-semibold">
          Menu
        </h2>

        <nav className="mt-4 flex-1 space-y-2">
          <a href="#" className={menuItemsClasses}>
            Developers
          </a>
          <a href="#" className={menuItemsClasses}>
            Solutions
          </a>
          <a href="#" className={menuItemsClasses}>
            Company
          </a>
          <a href="#" className={menuItemsClasses}>
            Blog
          </a>
        </nav>

        <div className="mt-auto">
          <Button variant="outline" className="w-full">
            Request a Demo
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SiteHeaderSM;
