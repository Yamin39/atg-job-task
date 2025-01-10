import { useState } from "react";
import Banner from "../components/Banner/Banner";
import Filter from "../components/Filter/Filter";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const [isJoinGroup, setIsJoinGroup] = useState(false);
  return (
    <div className="font-ibm-plex-sans">
      <Navbar></Navbar>
      <Banner isJoinGroup={isJoinGroup} setIsJoinGroup={setIsJoinGroup}></Banner>
      <Filter isJoinGroup={isJoinGroup} setIsJoinGroup={setIsJoinGroup}></Filter>
    </div>
  );
};

export default Home;
