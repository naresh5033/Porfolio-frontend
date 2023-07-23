import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
const twitterUrl = "https://twitter.com/naresh_xo";
const githubUrl = "https://github.com/naresh5033";
const linkedinUrl = "https://www.linkedin.com/in/naresh-sekar-652443119";
const SocialMedia = () => (
  <div className="app__social">
    <div className="cursor-pointer">
      <a href={githubUrl}>
        <BsGithub />
      </a>
    </div>
    <div className="cursor-pointer">
      <a href={linkedinUrl}>
        <BsLinkedin />
      </a>
    </div>
    <div className="cursor-pointer">
      <a href={twitterUrl}>
        <BsTwitter />
      </a>
    </div>
  </div>
);

export default SocialMedia;
