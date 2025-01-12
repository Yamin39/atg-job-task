import { useState } from "react";
import penIcon from "../assets/icons/pen.svg";
import Banner from "../components/Banner/Banner";
import CreateAccount from "../components/CreateAccount/CreateAccount";
import Filter from "../components/Filter/Filter";
import Navbar from "../components/Navbar/Navbar";
import Posts from "../components/Posts/Posts";

const Home = () => {
  const [isJoinGroup, setIsJoinGroup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(false);
  return (
    <div className="font-ibm-plex-sans pb-5 sm:pb-[98px]">
      <Navbar user={user} setUser={setUser} setIsModalOpen={setIsModalOpen}></Navbar>
      <Banner isJoinGroup={isJoinGroup} setIsJoinGroup={setIsJoinGroup}></Banner>
      <Filter isJoinGroup={isJoinGroup} setIsJoinGroup={setIsJoinGroup}></Filter>
      <Posts></Posts>

      <button
        onClick={() => !user && setIsModalOpen(true)}
        className="size-[54px] flex 2md:hidden flex-col rounded-full fixed bottom-[18px] right-[18px] justify-center items-center shadow-[0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.18)]"
        style={{ background: "linear-gradient(180deg, rgb(255, 92, 92), rgb(240, 86, 138) 100%)" }}
      >
        <img src={penIcon} className="size-6" alt="Pen Icon" />
      </button>

      {/* modal */}
      <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center ${isModalOpen ? "block" : "hidden"}`}>
        <div className="absolute size-full bg-black opacity-60"></div>
        <div className="absolute size-full flex justify-center items-end md:items-center">
          <CreateAccount setUser={setUser} setIsModalOpen={setIsModalOpen}></CreateAccount>
        </div>
      </div>
    </div>
  );
};

export default Home;
