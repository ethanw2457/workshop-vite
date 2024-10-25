import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Home() {
  const [showOutline, setShowOutline] = useState(false);


  // Names and images for each profile 
  const profileData = [
    { name: "Sheehan Dandapat", imageSrc: "/sd2.jpg" },  // Feel free to remove demo page whenever you want
    { name: "EthanWang", imageSrc: "/EthanWangProfile.jpg" },
    { name: "sidPage", imageSrc: "/defaultpfp.jpg" },
    { name: "Nathan Wan", imageSrc: "/nathanwan.png" },
    { name: "Person4", imageSrc: "/defaultpfp.jpg" },
    { name: "Michael Li", imageSrc: "/public/Michael_Pic.jpg" },
    { name: "Person6", imageSrc: "/defaultpfp.jpg" },
    { name: "Person7", imageSrc: "/defaultpfp.jpg" },
    { name: "Person8", imageSrc: "/defaultpfp.jpg" },
    { name: "Person9", imageSrc: "/defaultpfp.jpg" },
    { name: "Ishana D", imageSrc: "/defaultpfp.jpg" }
  ];

  const toggleOutline = () => {
    setShowOutline((prev) => !prev);
  };

  return (
    <>
      <div className={`min-h-screen w-screen bg-black flex flex-col ${showOutline ? 'outline' : ''}`}>
        {/* Outline Toggle Button */}
        <div className="absolute top-4 right-4 flex items-center">
          <label className="switch">
            <input type="checkbox" checked={showOutline} onChange={toggleOutline} />
            <span className="slider round"></span>
          </label>
          <span className="ml-2 text-white">Toggle Outline</span>
        </div>

        <div className="h-1/12 w-full font-monument text-white text-5xl flex items-center justify-center py-8">
          <img src="/leftarrow.png" alt="Left arrow" />
          <h1 className="pt-2 mx-8 animate-text">Dream Team</h1>
          <img src="/rightarrow.png" alt="Right arrow" />
        </div>

        <div className="w-full flex flex-wrap justify-center px-48 gap-16 mb-12">
          {profileData.map((profile) => (
            <div key={profile.name} className="w-48 h-48 flex flex-col items-center font-monument text-xl">
              <Link to={`/profile/${profile.name}`}>
                <img
                  className="profile-img"
                  src={profile.imageSrc}
                  alt={`${profile.name}'s profile`}
                />
              </Link>
              <span className="text-white font-semibold mt-2">{profile.name}</span>
            </div>
          ))}
        </div>

        <div className="w-full flex gap-10 font-monument text-base bg-black text-white pt-16 mt-auto">
          <div className="flex-col px-8 pt-16 z-10">
            <h1 className="pb-4 text-htfgreen">CONTACT US</h1>
            <h1>htfpurdue@gmail.com</h1>
            <div className="flex text-4xl pt-4 gap-4">
              <a href="https://www.instagram.com/hackthefuturepurdue/" target="_blank">
                <FaInstagram className="hover:animate-pop cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/company/hack-the-future-at-purdue/" target="_blank">
                <FaLinkedin className="hover:animate-pop cursor-pointer" />
              </a>
              <a href="https://github.com/Hack-the-Future" target="_blank">
                <FaGithubSquare className="hover:animate-pop cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="flex-col pt-16 w-1/2"></div>
          <div className="flex-col justify-right px-8 pt-16">
            <img src="/Logo.png" className="h-12 w-42 pl-12 mb-8 ml-6 object-right" alt="Logo" />
            <h1 className="text-right">Purdue University, West Lafayette, IN, 47906</h1>
          </div>
        </div>
      </div>
    </>
  );
}