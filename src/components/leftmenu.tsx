import React from "react";
import { useRouter } from "next/navigation";
import {
  MdContacts,
  MdMore,
  MdOutlineLiveHelp,
  MdRoundaboutRight,
} from "react-icons/md";
import { FaArrowRotateRight } from "react-icons/fa6";
import { RiCustomerServiceFill, RiHome4Line } from "react-icons/ri";

function Leftmenu() {
  const router = useRouter();
  const homePage = () => {
    router.push("/home");
  };

  const aboutPage = () => {
    router.push("/about");
  };
  const contactPage = () => {
    router.push("/contact");
  };
  const knowMorePage = () => {
    router.push("/knowmore");
  };
  const helplinePage = () => {
    router.push("/helpline");
  };
  const servicePage = () => {
    router.push("/service");
  };
  const mainPage = () => {
    router.push("/");
  };

  return (
    <div className="bg-yellow-400 h-full w-1/6  flex-col justify-normal items-center cursor-pointer">
      <div
        onClick={homePage}
        className="text-black hover:bg-blue-600 gap-2 justify-start flex items-center p-2 cursor-pointer transition duration-300"
      >
        <RiHome4Line /> <p> HOME</p>
      </div>
      <div
        onClick={aboutPage}
        className="text-black hover:bg-blue-600 gap-2 justify-start flex items-center p-2 cursor-pointer transition duration-300"
      >
        <MdRoundaboutRight />
        <p>ABOUT</p>
      </div>
      <div
        onClick={servicePage}
        className="text-black hover:bg-blue-600 gap-2 justify-start flex items-center p-2 cursor-pointer transition duration-300"
      >
        <RiCustomerServiceFill /> <p>SERVICES</p>
      </div>
      <div
        onClick={contactPage}
        className="text-black hover:bg-blue-600 gap-2 justify-start flex items-center p-2 cursor-pointer transition duration-300"
      >
        <MdContacts /> <p>CONTACT</p>
      </div>
      <div
        onClick={knowMorePage}
        className="text-black hover:bg-blue-600 gap-2 justify-start flex items-center p-2 cursor-pointer transition duration-300"
      >
        <MdMore /> <p>KNOW MORE</p>
      </div>
      <div
        onClick={helplinePage}
        className="text-black hover:bg-blue-600 gap-2 justify-start flex items-center p-2 cursor-pointer transition duration-300"
      >
        <MdOutlineLiveHelp />
        <p>HELP-LINE</p>
      </div>
      <div
        onClick={mainPage}
        className="text-green-500 hover:bg-red-600 gap-2 justify-start flex items-center p-2 cursor-pointer transition duration-300"
      >
        <FaArrowRotateRight />
        <p> MAIN PAGE</p>
      </div>
    </div>
  );
}
export default Leftmenu;
