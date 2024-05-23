import React from "react";

import Header from "@/components/Header";
import DepartmentCard from "@/components/cards/DepartmentCard";

import { ArrowRightDoubleIcon, BriefcaseIcon, CompassIcon, ComputerIcon } from "@/components/icons/departments";
import Link from "next/link";

const Departments = () => {
  return (
    <>
      <Header title="Our Departments" className="my-5 pb-2 text-3xl" />
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center mt-5 w-full">
        <DepartmentCard
          title="computer science"
          icon={<ComputerIcon className="h-[80px] w-[80px] text-primary/90" />}
          url="/computer-science"
        />
        <DepartmentCard
          title="mathematics"
          icon={<CompassIcon className="h-[80px] w-[80px] text-primary/90" />}
          url="/mathematics"
        />
        <DepartmentCard
          title="business administration"
          icon={<BriefcaseIcon className="h-[80px] w-[80px] text-primary/90" />}
          url="/commerce-and-business"
        />
      </div>
      <Link
        href={"/departments"}
        className="btn btn-ghost flex justify-between gap-x-2 hover:gap-x-3 transition-all duration-150 text-lg uppercase"
      >
        <p>explore all</p>
        <ArrowRightDoubleIcon />
      </Link>
    </>
  );
};

export default Departments;
