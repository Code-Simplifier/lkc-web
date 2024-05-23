import React from "react";
import { ArrowRightIcon } from "@/components/icons/departments";
import Link from "next/link";

interface DepartmentCardProps {
  title: string;
  icon: any;
  url: string;
}

const DepartmentCard = ({ title, icon, url }: DepartmentCardProps) => {
  return (
    <div className="w-[90%] md:w-[400px] relative h-[400px] bg-primary/40 border-2 border-primary rounded-md mb-10">
      <div className="flex h-full items-center justify-center">{icon}</div>
      <Link href={`/departments/${url}`}>
        <div className="bottom-0 w-full absolute flex items-center justify-between rounded-md">
          <div className="w-full mx-1 mb-1 p-3 rounded-md bg-neutral hover:mb-2 hover:bg-white transition-all duration-200 cursor-pointer flex items-center self-center justify-between">
            <p className="uppercase">{title}</p>
            <ArrowRightIcon />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DepartmentCard;
