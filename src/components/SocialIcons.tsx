import Link from "next/link";
import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook, CiYoutube } from "react-icons/ci";
const SocialIcons = () => {
  const socialLinks = [
    { name: "Github", icon: <FaGithub />, link: "" },
    { name: "Linkdin", icon: <CiLinkedin />, link: "" },
    { name: "Youtube", icon: <CiYoutube />, link: "" },
    { name: "Facebook", icon: <CiFacebook />, link: "" },
    { name: "Twitter", icon: <FaTwitter />, link: "" },
  ];
  return (
    <div className="fixed bottom-0 left-[3rem] hidden md:flex ">
      <ul className="flex flex-col gap-8 border_line_left">
        {socialLinks.map((socialLink, index) => (
          <li
            key={index}
            className="text-2xl hover:text-yellow-500 transition-all delay-75 ease-in"
          >
            <Link href={socialLink.link} target="_blank">
              {socialLink.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
