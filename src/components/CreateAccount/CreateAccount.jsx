/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import closeBlackIcon from "../../assets/icons/close-black.svg";
import closeIcon from "../../assets/icons/close.svg";
import fbIcon from "../../assets/icons/fb.svg";
import googleIcon from "../../assets/icons/google.svg";
import passEye from "../../assets/icons/pass-eye.svg";
import modalImg from "../../assets/images/login-modal.jpg";

const CreateAccount = ({ setUser, setIsModalOpen, setAuthPage }) => {
  const [eyeToggle, setEyeToggle] = useState(false);
  return (
    <div className="w-full md:w-fit relative bg-white shadow-[0px_8px_24px_0px_rgba(0,0,0,0.25)] rounded-[8px_8px_0px_0px] md:rounded-[8px_8px_8px_8px]">
      {/* close modal */}
      <button onClick={() => setIsModalOpen(false)} className="absolute top-6 md:-top-10 right-[22px] md:-right-4 size-5 md:size-6">
        <img src={closeIcon} className="hidden md:block size-full" alt="Close Icon" />
        <img src={closeBlackIcon} className="md:hidden size-full" alt="Close Icon" />
      </button>

      <div className="hidden md:block bg-[#EFFFF4] rounded-[8px_8px_0px_0px] p-[17px]">
        <p className="text-[#008A45] text-sm font-medium leading-4 text-center">
          Let&apos;s learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </p>
      </div>

      <div className="px-5 md:px-9 pt-[22px] md:pt-6 mb-[18px] md:pb-9">
        <div className="flex justify-between items-center gap-2 mb-6">
          <h5 className="text-lg md:text-2xl font-bold leading-[23px] md:leading-[31px]">Create Account</h5>
          <p className="hidden md:block text-[#3D3D3D] text-[13px]">
            Already have an account?{" "}
            <button onClick={() => setAuthPage("Sign In")} className="font-semibold text-[#2F6CE5]">
              Sign In
            </button>
          </p>
        </div>

        <div className="flex justify-between h-min gap-6">
          <div className="w-full md:w-[48.2%]">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2">
                {/* first name */}
                <input
                  type="text"
                  className="focus:outline-none border border-[#D9D9DB] bg-[#F7F8FA] py-3 md:py-[15px] px-3 text-[#8A8A8A] text-[13px] leading-4 md:text-[15px] font-medium md:leading-4"
                  placeholder="First Name"
                />
                {/* Last Name */}
                <input
                  type="text"
                  className="focus:outline-none border border-[#D9D9DB] bg-[#F7F8FA] py-3 md:py-[15px] px-3 text-[#8A8A8A] text-[13px] leading-4 md:text-[15px] font-medium md:leading-4"
                  placeholder="Last Name"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                className="w-full focus:outline-none border border-[#D9D9DB] bg-[#F7F8FA] py-3 md:py-[15px] px-3 text-[#8A8A8A] text-[13px] leading-4 md:text-[15px] font-medium md:leading-4"
                placeholder="Email"
              />

              {/* Password */}
              <div className="border border-[#D9D9DB] bg-[#F7F8FA] py-3 md:py-[15px] px-3 text-[#8A8A8A] flex justify-between">
                <input
                  type={eyeToggle ? "text" : "password"}
                  className="w-full focus:outline-none text-[13px] leading-4 md:text-[15px] bg-transparent font-medium md:leading-4"
                  placeholder="Password"
                />
                <button type="button" onClick={() => setEyeToggle(!eyeToggle)} className="size-[18px]">
                  {!eyeToggle ? <img src={passEye} className="size-full" alt="Password Eye Icon" /> : <IoEyeOffOutline className="text-[18px]" />}
                </button>
              </div>

              {/* Confirm Password */}
              <input
                type={eyeToggle ? "text" : "password"}
                className="w-full focus:outline-none border border-[#D9D9DB] bg-[#F7F8FA] py-3 md:py-[15px] px-3 text-[#8A8A8A] text-[13px] leading-4 md:text-[15px] font-medium md:leading-4"
                placeholder="Confirm Password"
              />

              {/* submit */}
              <div className="my-[22px] md:my-0 flex md:block items-center justify-between gap-2">
                <button
                  onClick={() => {
                    setUser(true);
                    setIsModalOpen(false);
                  }}
                  type="submit"
                  className="w-[150px] md:w-full md:mt-5 md:mb-6 p-3 bg-[#2F6CE5] rounded-[20px] text-sm font-semibold leading-4 text-white hover:brightness-90"
                >
                  Create Account
                </button>

                <button
                  onClick={() => setAuthPage("Sign In")}
                  className="md:hidden text-[#495057] text-[13px] font-medium leading-[17px] tracking-[0px] text-center underline"
                >
                  or, Sign In
                </button>
              </div>
            </form>

            <div className="space-y-2">
              <button
                onClick={() => {
                  setUser(true);
                  setIsModalOpen(false);
                }}
                className="border border-[#D9D9DB] rounded-sm w-full p-3 flex items-center justify-center gap-2.5 text-sm leading-4"
              >
                <img src={fbIcon} className="size-4" alt="Facebook Icon" />
                <span>Sign up with Facebook</span>
              </button>

              <button
                onClick={() => {
                  setUser(true);
                  setIsModalOpen(false);
                }}
                className="border border-[#D9D9DB] rounded-sm w-full p-3 flex items-center justify-center gap-2.5 text-sm leading-4"
              >
                <img src={googleIcon} className="size-4" alt="Google Icon" />
                <span>Sign up with Facebook</span>
              </button>
            </div>

            <p className="md:hidden max-w-[60%] mx-auto text-[#212529] text-[11px] leading-4 tracking-[-0.8%] text-center mt-[22px]">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
          <div className="hidden md:flex w-[48.2%] h-full flex-col justify-between">
            <img src={modalImg} className="w-[94%]" alt="Modal Image" />
            <p className="text-[11px] leading-4 tracking-[-0.8%] mt-3 w-max">By signing up, you agree to our Terms & conditions, Privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
