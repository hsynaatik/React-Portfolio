import React from "react";
import Image from "../images/1.jpg";
import {FaGithub,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import { TypeAnimation } from "react-type-animation";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={Image}
        alt="programmer"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold text-black "> <TypeAnimation
              sequence={[
                "Hüseyin",
                1000, 
                "Atık",
                1000,
                "Hüseyin Atık",
                2000
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            /></h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-black">
            <TypeAnimation
              sequence={[
                "Programmer",
                2000, 
                "Developer",
                2000,
                "Software Developer",
                2000
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaInstagram className="cursor-pointer"  size={20}/>
            <FaLinkedinIn  className="cursor-pointer" size={20}/>
            <FaGithub className="cursor-pointer" size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
