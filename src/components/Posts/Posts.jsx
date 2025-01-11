import likeIcon from "../../assets/icons/like.svg";
import locationIcon from "../../assets/icons/location.svg";
import warningIcon from "../../assets/icons/warning.svg";
import groupImg2 from "../../assets/images/activism.png";
import josephGray from "../../assets/images/joseph-gray.png";
import groupImg1 from "../../assets/images/leisure.png";
import groupImg3 from "../../assets/images/mba.png";
import groupImg4 from "../../assets/images/philosophy.png";
import post1 from "../../assets/images/post1.jpeg";
import post2 from "../../assets/images/post2.jpeg";
import post3 from "../../assets/images/post3.jpeg";
import ronalJones from "../../assets/images/ronal-jones.png";
import sarahWest from "../../assets/images/sarah-west.png";
import sarthakKamra from "../../assets/images/sarthak-kamra.png";
import GroupLi from "./GroupLi";
import JobPost from "./JobPost";
import MeetUpPost from "./MeetUpPost";
import PostCard from "./PostCard";

const Posts = () => {
  const groups = [
    {
      img: groupImg1,
      name: "Leisure",
    },
    {
      img: groupImg2,
      name: "Activism",
    },
    {
      img: groupImg3,
      name: "MBA",
    },
    {
      img: groupImg4,
      name: "Philosophy",
    },
  ];
  return (
    <div className="max-w-[1040px] 2md:w-[72.22%] mx-auto mt-7 flex flex-col 2md:flex-row justify-between">
      <div className="w-full 2md:w-[66.54%] space-y-4">
        {/* post 1 */}
        <PostCard
          img={post1}
          category={"✍️ Article"}
          title={"What if famous brands had regular fonts? Meet RegulaBrands!"}
          desc={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}
          authorImg={sarthakKamra}
          authorName={"Sarthak Kamra"}
          views={"1.4k"}
        ></PostCard>

        {/* post 2 */}
        <PostCard
          img={post2}
          category={"🔬️ Education"}
          title={"Tax Benefits for Investment under National Pension Scheme launched by Government"}
          desc={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}
          authorImg={sarahWest}
          authorName={"Sarah West"}
          views={"4.8k"}
        ></PostCard>

        {/* post 3 */}
        <MeetUpPost
          img={post3}
          category={"🗓️ Meetup"}
          title={"Finance & Investment Elite Social Mixer @Lujiazui"}
          date={"Fri, 12 Oct, 2018"}
          location={"Ahmedabad, India"}
          authorImg={ronalJones}
          authorName={"Ronal Jones"}
          views={"800"}
        ></MeetUpPost>

        {/* post 4 */}
        <JobPost
          category={"💼️ Job"}
          title={"Software Developer"}
          designation={"Innovaccer Analytics Private Ltd."}
          location={"Noida, India"}
          authorImg={josephGray}
          authorName={"Joseph Gray"}
          views={"1.7k"}
        ></JobPost>
      </div>
      <div className="hidden 2md:block w-[26%] lg:w-[23.36%] pt-[27px]">
        <form className="flex items-center pb-2.5 border-b border-b-[#B8B8B8]">
          <img src={locationIcon} className="size-[18px] mr-1.5" alt="Location Icon" />
          <input
            type="search"
            className="w-full text-black placeholder:text-[#808080] text-[14px] leading-[18px] focus:outline-none"
            placeholder="Enter your location"
          />
        </form>

        <div className="flex gap-[7px] mt-8">
          <img src={warningIcon} className="size-4" alt="Warning Icon" />

          <p className="text-xs leading-4 text-[#7F7F7F]">Your location will help us serve better and extend a personalised experience.</p>
        </div>

        <div className="mt-[54px]">
          <div className="flex items-center gap-1 mb-6">
            <img src={likeIcon} className="size-[18px]" alt="Like Icon" />

            <p className="text-sm leading-[18px] tracking-[10%] capitalize">RECOMMENDED GROUPS</p>
          </div>

          <ul className="space-y-[22px] mb-[54px]">
            {groups.map((group, index) => (
              <GroupLi key={index} img={group.img} name={group.name}></GroupLi>
            ))}
          </ul>

          <div className="flex justify-end">
            <button className="text-xs leading-4 text-[#2F6CE5]">See More...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
