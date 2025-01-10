import arrowDown from "../../assets/icons/arrow-down.svg";
import mobileNavIcons from "../../assets/icons/mobile-nav-icons.svg";
import searchIcon from "../../assets/icons/search.png";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="max-w-[1296px] w-full md:w-[90%] mx-auto py-[0.4375rem] pr-3 md:pr-0 md:pt-4 md:pb-[0.875rem] flex justify-end md:justify-between items-center">
      <div className="max-w-[10.125rem] hidden md:block">
        <img src={logo} className="w-full object-cover" alt="Logo" />
      </div>

      <form className="px-[0.875rem] py-[0.625rem] w-full max-w-[22.5rem] gap-[0.875rem] bg-[#F2F2F2] hidden md:flex items-center rounded-full">
        <img className="max-w-[1.375rem] object-cover" src={searchIcon} alt="Search Icon" />
        <input
          type="search"
          placeholder="Search for your favorite groups in ATG"
          className="bg-transparent w-full focus:outline-none placeholder:text-[#5c5c5cd2] text-[#5C5C5C] font-medium text-[0.875rem] leading-[1.125rem]"
        />
      </form>

      <button className="hidden md:flex items-center">
        <p className="font-medium text-[#2E2E2E]">
          Create account. <span className="font-bold text-[#2F6CE5]">It’s free!</span>
        </p>
        <div className="px-[0.4375rem]">
          <img src={arrowDown} alt="Arrow Down" />
        </div>
      </button>

      <button className="md:hidden">
        <img src={mobileNavIcons} className="max-w-[3.1875rem]" alt="Mobile Nav Icons" />
      </button>
    </nav>
  );
};

export default Navbar;
