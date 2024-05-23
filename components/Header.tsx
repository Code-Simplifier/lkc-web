import { secondary } from "@/app/fonts";
import React from "react";

interface HeaderProps {
  title: string;
  className?: any;
}

const Header = ({ title, className }: HeaderProps) => {
  return (
    <div
      className={` md:text-5xl text-center capitalize ${secondary.className} bg-transparent text-transparent bg-clip-text bg-gradient-to-t from-primary to-secondary ${className} `}
    >
        {title}
    </div>
  );
};

export default Header;
