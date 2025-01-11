import { useState } from "react";
import penIcon from "../assets/icons/pen.svg";
import Banner from "../components/Banner/Banner";
import Filter from "../components/Filter/Filter";
import Navbar from "../components/Navbar/Navbar";
import Posts from "../components/Posts/Posts";

const Home = () => {
  const [isJoinGroup, setIsJoinGroup] = useState(false);
  return (
    <div className="font-ibm-plex-sans pb-5 sm:pb-[98px]">
      <Navbar></Navbar>
      <Banner isJoinGroup={isJoinGroup} setIsJoinGroup={setIsJoinGroup}></Banner>
      <Filter isJoinGroup={isJoinGroup} setIsJoinGroup={setIsJoinGroup}></Filter>
      <Posts></Posts>

      <button
        className="size-[54px] flex 2md:hidden flex-col rounded-full fixed bottom-[18px] right-[18px] justify-center items-center shadow-[0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.18)]"
        style={{ background: "linear-gradient(180deg, rgb(255, 92, 92), rgb(240, 86, 138) 100%)" }}
      >
        <img src={penIcon} className="size-6" alt="Pen Icon" />
      </button>
    </div>
  );
};

export default Home;
