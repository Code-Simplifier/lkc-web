"use client";

import React, { useEffect, useState } from "react";

import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

import { getAboutVisionDocs } from "@/app/db/getDocs";
import { AboutDoc } from "@/app/types";

const Vision = () => {
  const [documents, setDocuments] = useState<AboutDoc[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDocuments = await getAboutVisionDocs();
      setDocuments(fetchedDocuments);
    };

    fetchData();
  }, []);
  return (
    <div className="pt-20">
      <Header
        title="Fostering Excellence in Education"
        className="my-10 py-2 text-xl"
      />
      {documents.map((document, index) => (
        <div key={index}>
          <SubHeader title={document.title} className="text-xl" />
          <p className="text-justify md:text-lg px-7 md:px-10">{document.content}</p>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Vision;
