import { useState } from "react";
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
    </div>
  );
};

export default Home;
