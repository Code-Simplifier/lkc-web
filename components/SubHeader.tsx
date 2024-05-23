import React from "react";

interface SubHeaderProps {
  title: string;
  className?: any;
}

const SubHeader = ({ title, className }: SubHeaderProps) => {
  return (
    <div className="flex items-center justify-center text-white my-5 uppercase tracking-wide ">
      <p
        className={`py-1 px-2 md:px-3 rounded-md bg-gradient-to-r from-primary to-secondary md:text-4xl ${className}`}
      >
        {title}
      </p>
    </div>
  );
};

export default SubHeader;
