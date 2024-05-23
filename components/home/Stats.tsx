import React from "react";
import {
  AutoConversationsIcon,
  GraduationScrollIcon,
  StarIcon,
} from "../icons";

const Stats = () => {
  return (
    <div className="stats stats-vertical mt-10 mb-4 w-[90%]  lg:stats-horizontal shadow-md">
      <div className="stat">
        <div className="stat-figure">
          <StarIcon className="text-primary" />
        </div>
        <div className="stat-title">CGPA</div>
        <div className="stat-value text-primary">3.21 / 4</div>
        <div className="stat-desc">by NAAC</div>
      </div>

      <div className="stat">
        <div className="stat-figure">
          <AutoConversationsIcon className="text-secondary" />
        </div>
        <div className="stat-title">Potential of</div>
        <div className="stat-value text-secondary">Excellence</div>
        <div className="stat-desc">by GNDU</div>
      </div>

      <div className="stat">
        <div className="stat-figure">
          <GraduationScrollIcon className="text-primary" />
        </div>
        <div className="stat-title">Grade</div>
        <div className="stat-value text-primary">A</div>
        <div className="stat-desc">by NAAC</div>
      </div>
    </div>
  );
};

export default Stats;
