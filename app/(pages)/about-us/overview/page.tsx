"use client";

import React, { useEffect, useState } from "react";

import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

import { getAboutOverviewDocs } from "@/app/db/getDocs";
import { AboutDoc } from "@/app/types";

const Overview = () => {
  const [documents, setDocuments] = useState<AboutDoc[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDocuments = await getAboutOverviewDocs();
      setDocuments(fetchedDocuments);
    };

    fetchData();
  }, []);
  return (
    <div className="pt-20">
      <Header
        title="why choose khalsa college?"
        className="my-10 py-2 text-2xl"
      />
      {documents.map((document, index) => (
        <div key={index}>
          <SubHeader title={document.title} />
          <p className="text-justify md:text-lg px-7 md:px-10">{document.content}</p>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Overview;
