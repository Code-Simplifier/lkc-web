"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";

import { getAboutConductDocs } from "@/app/db/getDocs";
import { AboutConductDoc } from "@/app/types";
import Link from "next/link";
import { SquareArrowUpRightIcon } from "@/components/icons";

const CodeOfConduct = () => {
  const [documents, setDocuments] = useState<AboutConductDoc[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDocuments = await getAboutConductDocs();
      setDocuments(fetchedDocuments);
    };

    fetchData();
  }, []);
  return (
    <div className="pt-20">
      <Header
        title="Student's Code of Conduct"
        className="my-10 py-2 text-xl"
      />
      <Link
        href={
          "https://lkc.ac.in/wp-content/uploads/2019/09/Hand-book-of-Code-of-Conduct.pdf"
        }
        target="_blank"
        className="underline text-primary flex items-center justify-center tracking-tight text-lg mb-5 gap-x-1"
      >
        Read the official handbook here{" "}
        <SquareArrowUpRightIcon className="text-primary" />
      </Link>
      <p className="text-lg text-justify px-10 mb-10">
        To foster a sense of discipline among the students a code of conduct has
        been laid down by the College. The institution expects the students to
        observe this code of conduct strictly.{" "}
      </p>
      <ul className="flex flex-col ml-10 gap-y-5 px-4 text-slate-500 list-disc">
        {documents.map((document, index) => (
          <li key={index}>{document.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CodeOfConduct;
