import { Link } from "react-router-dom";
import Image from "../../assets/images/logo.svg";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  const signedIn = window.sessionStorage.getItem("userId") !== null;

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link to="/user/home" className="w-36">
          <img src={Image} alt="logo" width={128} height={38} />
        </Link>

        {signedIn && (
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        )}

        <div className="flex w-32 justify-end gap-3">
          {signedIn && (
            <>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <MobileNav />
            </>
          )}
          {!signedIn && (
            <Button asChild className="rounded-full" size="lg">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
