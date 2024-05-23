import Header from "@/components/Header";
import DepartmentCard from "@/components/cards/DepartmentCard";
import { departments } from "@/constants/departments";
import React from "react";

const Departments = () => {
  return (
    <div className="pt-20">
      <Header title="Our Departments" className="my-10 pb-2 text-3xl" />
      <div className="hidden md:grid grid-cols-3 place-items-center mt-5 w-full">
        {departments.map((department) => (
          <div key={department.id}>
            <DepartmentCard
              title={department.title}
              icon={
                <department.icon className="h-[80px] w-[80px] text-primary/90" />
              }
              url={department.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .replaceAll("&", "and")}
            />
          </div>
        ))}
      </div>
      <div className="md:hidden grid grid-cols-1 md:grid-cols-3 pl-10 mt-5 w-full">
        {departments.map((department) => (
          <div key={department.id}>
            <DepartmentCard
              title={department.title}
              icon={
                <department.icon className="h-[80px] w-[80px] text-primary/90" />
              }
              url={department.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .replaceAll("&", "and")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
