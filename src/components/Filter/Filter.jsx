/* eslint-disable react/prop-types */
import { useState } from "react";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";
import groupIcon from "../../assets/icons/group.svg";
import leaveIcon from "../../assets/icons/leave.svg";

const Filter = ({ isJoinGroup, setIsJoinGroup }) => {
  const [activeTab, setActiveTab] = useState("All Posts");
  const activeTabStyle =
    "text-black relative after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-[-20px] after:left-0 after:duration-300 after:ease-in-out";
  return (
    <section>
      <div className="max-w-[1040px] w-[72.22%] mx-auto border-b border-b-[#E0E0E0] mt-10 mb-7 pb-[11.5008px] hidden 2md:flex justify-between items-center">
        <ul className="flex gap-5 text-[#8A8A8A]">
          <li onClick={() => setActiveTab("All Posts")} className={`leading-5 cursor-pointer ${activeTab === "All Posts" ? activeTabStyle : ""}`}>
            All Posts(32)
          </li>
          <li onClick={() => setActiveTab("Article")} className={`leading-5 cursor-pointer ${activeTab === "Article" ? activeTabStyle : ""}`}>
            Article
          </li>
          <li onClick={() => setActiveTab("Event")} className={`leading-5 cursor-pointer ${activeTab === "Event" ? activeTabStyle : ""}`}>
            Event
          </li>
          <li onClick={() => setActiveTab("Education")} className={`leading-5 cursor-pointer ${activeTab === "Education" ? activeTabStyle : ""}`}>
            Education
          </li>
          <li onClick={() => setActiveTab("Job")} className={`leading-5 cursor-pointer ${activeTab === "Job" ? activeTabStyle : ""}`}>
            Job
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="text-[15px] font-medium leading-5 flex items-center gap-4 px-3 py-2 rounded bg-[#EDEEF0]">
            <p>Write a Post</p>
            <img src={arrowDownIcon} className="w-[9.17px]" alt="Arrow Down Icon" />
          </button>
          {!isJoinGroup ? (
            <button
              onClick={() => setIsJoinGroup(true)}
              className="font-medium text-white py-[7px] pl-2.5 pr-3 bg-[#2F6CE5] rounded flex items-center gap-1.5 text-[15px] leading-5"
            >
              <img src={groupIcon} alt="Group Icon" />
              <span>Join Group</span>
            </button>
          ) : (
            <button
              onClick={() => setIsJoinGroup(false)}
              className="font-medium text-[#6A6A6B] py-[9.75px] pl-[12.75px] pr-2.5 border border-[#989899] rounded flex items-center gap-[8.75px] text-[15px] leading-5"
            >
              <img src={leaveIcon} alt="Leave Icon" />
              <span>Leave Group</span>
            </button>
          )}
        </div>
      </div>

      <div className="2md:hidden w-[90.56%] mx-auto mt-[14px] mb-5 flex justify-between items-center gap-2">
        <p className="text-sm font-bold leading-[18px] tracking-[1%]">Posts(368)</p>

        <button className="text-[13px] font-medium leading-[17px] flex items-center gap-4 pl-2.5 pr-[15.8px] py-2 rounded bg-[#F1F3F5]">
          <p>Filter: All</p>
          <img src={arrowDownIcon} className="w-[8.33px]" alt="Arrow Down Icon" />
        </button>
      </div>
    </section>
  );
};

export default Filter;
