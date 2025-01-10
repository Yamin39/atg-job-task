import { useState } from "react";
import arrowBackIcon from "../../assets/icons/arrow-back.svg";
import banner from "../../assets/images/banner.jpeg";

const Banner = () => {
  const [isJoinGroup, setIsJoinGroup] = useState(false);
  return (
    <section style={{ backgroundImage: `url(${banner})` }} className="bg-cover bg-center bg-no-repeat h-[236px] md:h-[27.5rem]">
      <div style={{ background: "linear-gradient(180.00deg, rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.6) 100%)" }} className="size-full">
        <div className="max-w-[1040px] w-[90.56%] md:w-[72.22%] mx-auto h-full">
          <div className="text-white pt-[14px] md:pt-0 pb-[2.0625rem] md:pb-20 flex flex-col justify-between md:justify-end h-full">
            <div className="flex md:hidden items-center justify-between">
              <button>
                <img src={arrowBackIcon} alt="Arrow Back Icon" />
              </button>
              <button onClick={() => setIsJoinGroup(!isJoinGroup)} className="text-xs font-medium leading-4 pt-[6px] pb-[7px] px-2 rounded border border-white">
                {isJoinGroup ? "Leave Group" : "Join Group"}
              </button>
            </div>

            <div>
              <h1 className="text-[1.0625rem] leading-[1.375rem] md:text-4xl font-bold md:leading-[2.9375rem]">Computer Engineering</h1>
              <p className="mt-0.5 md:mt-1 text-[0.75rem] md:text-lg leading-4 md:leading-[1.4375rem]">142,765 Computer Engineers follow this</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
