import { secondary, secondary_bold } from "@/app/fonts";
import Header from "@/components/Header";
import { UserIcon } from "@/components/icons/departments";
import { departments } from "@/constants/departments";
import React from "react";

interface Props {
  params: {
    url: string;
  };
}

const DepartmentDetail = ({ params }: Props) => {
  return (
    <div className="pt-20">
      <Header
        title={params.url.replaceAll("-", " ").replaceAll("and", "&")}
        className="my-10 pb-2 text-3xl"
      />
      {departments.map(
        (department) =>
          department.title
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll("&", "and") === params.url && (
            <div className="flex flex-col items-center justify-center" key={department.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3">
                <div className="flex text-justify px-10 text-lg">
                  {department.details.desc}
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2 w-[80%] bg-primary/30 p-4 rounded-md border-2 border-primary">
                  <p className={`text-2xl my-5 ${secondary.className}`}>
                    Courses
                  </p>
                  {department.details.courses.map((course, index) => (
                    <div className="bg-neutral rounded-md p-2 flex w-full justify-between" key={index}>
                      <p>{course.title}</p>
                      <p>{course.duration} yrs</p>
                    </div>
                  ))}
                </div>
              </div>
              <Header title="faculty" className="my-10 text-3xl pb-2" />
              <div className="overflow-x-auto w-[90%] mb-10 bg-secondary/30 rounded-md border-2 border-secondary">
                <table className="table table-zebra">
                  {/* head */}
                  <thead>
                    <tr className={`${secondary_bold.className} tracking-tight md:text-lg`}>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Qualification</th>
                      <th>Profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {department.details.faculty?.map((prof) => (
                      <tr key={prof.id} className="md:text-lg">
                        <td className="capitalize">{prof.name}</td>
                        <td className="capitalize">{prof.occupation}</td>
                        <td>{prof.qualification}</td>
                        <td>
                            <button className="btn btn-secondary">
                                <UserIcon className="text-white" />
                            </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default DepartmentDetail;
