"use client"

import React, { useState, useEffect, useRef } from "react";

interface TabItem {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
}

const TabsComponent: React.FC<TabsProps> = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (firstBtnRef.current) {
      firstBtnRef.current.focus();
    }
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="md:w-[70%] flex flex-col gap-y-2 mx-3">
        <div className="bg-primary rounded-xl flex justify-between items-center gap-x-2 text-white">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-full p-2 capitalize hover:bg-white/25 transition-all duration-150 rounded-xl text-center focus:bg-white focus:text-primary ${
                selectedTab === index ? "ring-1 ring-primary bg-white text-primary" : ""
              } `}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="bg-white p-2 rounded-xl">
          {items.map((item, index) => (
            <div className={selectedTab === index ? "" : "hidden"} key={index}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
