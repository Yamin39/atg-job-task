import { useState } from "react";

/* eslint-disable react/prop-types */
const GroupLi = ({ img, name }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <li className="flex justify-between items-center gap-3">
      <div className="flex gap-3 items-center">
        <img src={img} className="size-[36px]" alt={`${name} image`} />

        <p className="text-sm leading-[18px]">{name}</p>
      </div>

      <button
        onClick={() => setIsFollowed(!isFollowed)}
        className={`text-xs leading-4 px-3 py-1 duration-300 rounded-[14px] ${isFollowed ? "text-white bg-black" : "bg-[#EDEEF0] text-black"}`}
      >
        {isFollowed ? "Followed" : "Follow"}
      </button>
    </li>
  );
};

export default GroupLi;
