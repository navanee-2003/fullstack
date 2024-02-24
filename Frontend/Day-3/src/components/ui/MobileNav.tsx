import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Menu from "../../assets/icons/menu.svg";
import Image from "../../assets/images/logo.svg";
import { Separator } from "./separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden ">
      <Sheet>
        <SheetTrigger className="align-middle">
          <img
            src={Menu}
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <img
            src={Image}
            alt="logo"
            width={128}
            height={38}
            className="cursor-pointer"
          />
          <Separator className="border border-gray-50"/>
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
