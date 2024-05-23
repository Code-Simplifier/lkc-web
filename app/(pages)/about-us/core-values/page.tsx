"use client";

import React, { useEffect, useState } from "react";

import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

import { getAboutValuesDocs } from "@/app/db/getDocs";
import { AboutDoc } from "@/app/types";

const CoreValues = () => {
  const [documents, setDocuments] = useState<AboutDoc[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDocuments = await getAboutValuesDocs();
      setDocuments(fetchedDocuments);
    };

    fetchData();
  }, []);
  return (
    <div className="pt-20">
      <Header
        title="The Core Values of the Institution"
        className="my-10 py-2 text-xl"
      />
      {documents.map((document, index) => (
        <div key={index}>
          <SubHeader title={document.title} />
          <div className="text-justify md:text-lg px-7 md:px-10">{document.content}</div>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default CoreValues;
