/* eslint-disable react/prop-types */
import { useState } from "react";
import dots from "../../assets/icons/3 dot.svg";
import eyeIcon from "../../assets/icons/eye.svg";
import shareIcon from "../../assets/icons/share.svg";

const PostCard = (props) => {
  const [dotMenu, setDotMenu] = useState(false);
  const { img, category, title, desc, authorImg, authorName, views } = props;
  return (
    <div className="border border-[#E0E0E0] rounded">
      <div className="w-full h-[120px] sm:h-[220px]">
        <img src={img} className="size-full object-cover rounded-t" alt="Post 1 Image" />
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-sm leading-[18px] sm:text-lg font-medium sm:leading-[23px]">{category}</p>
        <div className="mt-[7px] sm:mt-2.5 flex justify-between gap-2">
          <h1 className="text-base leading-[21px] sm:text-[22px] font-semibold sm:leading-[134.17%] max-w-[600px]">{title}</h1>

          <div className="relative">
            <button onClick={() => setDotMenu(!dotMenu)} className={`size-7 rounded hover:border ${dotMenu ? "bg-[#BFC0C0]" : "bg-white"}`}>
              <img src={dots} className="size-full" alt="3 dot icon" />
            </button>

            <ul
              className={`absolute bg-white duration-300 right-0 w-[160px] rounded text-sm leading-[18px] ${
                dotMenu
                  ? "h-[104px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.16)] py-1 opacity-100"
                  : "opacity-0 h-0 py-0 shadow-none overflow-hidden"
              }`}
            >
              <li>
                <button className="hover:bg-[#F5F6F8] px-3 py-[7px] w-full text-left">Edit</button>
              </li>
              <li>
                <button className="hover:bg-[#F5F6F8] px-3 py-[7px] w-full text-left">Report</button>
              </li>
              <li>
                <button className="hover:bg-[#F5F6F8] px-3 py-[7px] w-full text-left">Option 3</button>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-[11px] sm:mt-3 mb-[21px] sm:mb-8 text-sm leading-[18px] sm:text-[18px] text-[#5C5C5C] sm:leading-[134.17%] sm:tracking-[-0.01px] line-clamp-1">
          {desc}
        </p>

        <div className="flex justify-between items-center gap-2 pb-1">
          <div className="flex items-center gap-2.5">
            <div className="size-[37px] sm:size-12">
              <img src={authorImg} className="size-full" alt={`${authorName} photo`} />
            </div>

            <div className="flex flex-col justify-center">
              <h6 className="text-[13px] leading-[17px] sm:text-lg text-[#212529] font-semibold sm:leading-[23px]">{authorName}</h6>
              <p className="sm:hidden text-xs font-medium leading-4 text-[#495057]">{views} views</p>
            </div>
          </div>

          <div className="sm:flex items-center gap-10">
            <div className="hidden sm:flex items-center gap-2">
              <img src={eyeIcon} className="size-[18px]" alt="Eye Icon" />

              <p className="text-[#525252] text-sm font-medium leading-[18px]">{views} views</p>
            </div>

            <button className="rounded-[2px] bg-[#EDEEF0] py-2 px-3 flex items-center gap-1 sm:block">
              <img src={shareIcon} className="size-[18px]" alt="Share Icon" />

              <p className="text-[12px] text-[#212529] sm:hidden">Share</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
