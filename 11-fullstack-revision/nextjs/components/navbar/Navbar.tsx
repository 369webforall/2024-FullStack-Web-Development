import React from "react";
import { NavigationLink } from "./NavLink";
import { ModeToggle } from "./ModeToggle";
import { MobileNav } from "./SheetContent";
import { UserProfile } from "./avatar";
const Navbar = () => {
  return (
    <div className="border-b h-14 px-8 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-semibold text-orange-600">WEB APP</h1>

        <NavigationLink />
      </div>

      <div className="flex items-center gap-6">
        <ModeToggle />
        <div className="md:hidden">
          <MobileNav />
        </div>
        <UserProfile />
      </div>
    </div>
  );
};

export default Navbar;
