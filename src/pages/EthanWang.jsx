import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function DemoPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [showOutline, setShowOutline] = useState(false);

  const toggleOutline = () => {
    setShowOutline((prev) => !prev);
  };

  return (
    <div className={`h-screen w-screen bg-black ${showOutline ? 'outline' : ''}`}>
      <div className="h-full w-full bg-black flex-col relative pt-10">

        <div className="absolute top-4 right-4 flex items-center">
          <label className="switch">
            <input type="checkbox" checked={showOutline} onChange={toggleOutline} />
            <span className="slider round"></span>
          </label>
          <span className="ml-2 text-white">Toggle Outline</span>
        </div>

        {/* Header */}
        <div className="h-1/12 w-full font-monument text-white text-5xl flex-col items-center">
          <div className="flex items-center justify-center h-full ">
            <img src="/leftarrow.png" alt="left arrow" />
            <h1 className="pt-2 mx-8 animate-text gradient">Team Member Profile</h1>
            <img src="/rightarrow.png" alt="right arrow" />
          </div>
        </div>

        {/* Profile Section */}
        <div className="w-full h-3/6 flex flex-col items-center mt-4 pt-12">
          {/* Profile Picture */}
          <img
            src="../ryanpic.jpg" // Placeholder image
            alt="Profile Picture"
            className={`w-48 h-48 object-cover ${isHovered ? "scale-110" : "scale-100"} transition-transform duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />

          {/* Member Info */}
          <div className="text-center text-white mt-8">
            <h2 className="text-4xl font-bold">Ryan Erickson</h2>
            <h3 className="text-xl mt-2">Technical Director</h3>
            <p className="mt-4 text-gray-400 max-w-md">
              Computer science student at Purdue University, from Prior Lake Minnesota.
              2nd year in Hack the Future, previously a member of YWCA Scheduling team.
            </p>
          </div>
          <Link to="/" className="z-10 mt-6 bg-htfgreen text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-green-700">
            Back to Home
          </Link>

          {/* Contact Links */}
          <div className="flex mt-8 gap-8 z-10">
            <a href="https://www.linkedin.com/in/ryanerickson680/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-white text-4xl hover:animate-pop cursor-pointer" />
            </a>
            <a href="https://github.com/RyanErickson680" target="_blank" rel="noreferrer">
              <FaGithubSquare className="text-white text-4xl hover:animate-pop cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/erickson_ryan/" target="_blank" rel="noreferrer">
              <FaInstagram className="text-white text-4xl hover:animate-pop cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full flex gap-10 font-monument text-base bg-black text-white pt-20">
          <div className="flex-col px-8 pt-16">
            <h1 className="pb-4 text-htfgreen">CONTACT US</h1>
            <h1>htfpurdue@gmail.com</h1>
            <div className="flex absolute z-10 text-4xl pt-4 gap-4">
              <a href="https://www.instagram.com/hackthefuturepurdue/" target="_blank" rel="noreferrer">
                <FaInstagram className="hover:animate-pop cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/company/hack-the-future-at-purdue/" target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:animate-pop cursor-pointer" />
              </a>
              <a href="https://github.com/Hack-the-Future" target="_blank" rel="noreferrer">
                <FaGithubSquare className="hover:animate-pop cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="flex-col pt-16 w-1/2"></div>
          <div className="flex-col relative justify-right px-8 pt-16">
            <img src="/Logo.png" className="h-12 w-42 pl-32 mb-8 ml-40 object-end" alt="Logo" />
            <h1 className="text-right">Purdue University, West Lafayette, IN, 47906</h1>
          </div>
          <img className="absolute overflow-hidden bottom-0 z-0" src="/globe.png" alt="Globe Background" />
        </div>
      </div>
    </div>
  );
}
