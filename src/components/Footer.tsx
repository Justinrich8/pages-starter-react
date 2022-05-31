<<<<<<< HEAD
import * as React from "react";
=======
import { Link } from "@yext/sites-react-components";
import { CTA } from "@yext/types";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

interface FooterProps {
  instagram: URL
  youtube: URL
  linkedIn: URL
  twitter: URL
  facebook: URL
  links1: CTA[]
  links2: CTA[]
}

function currentYear() {
  return new Date().getFullYear();
}

const Footer = (props: FooterProps) => {
  const socialLinks = [
    {link: props.facebook, label: <FaFacebook size={28} color="white" />},
    {link: props.twitter, label: <FaTwitter size={28} color="white" />},
    {link: props.youtube, label: <FaYoutube size={28} color="white" />},
    {link: props.instagram, label: <FaInstagram size={28} color="white" />},
    {link: props.linkedIn, label: <FaLinkedinIn size={28} color="white" />},
  ].filter(x => x.link)
>>>>>>> 5ff9812 (feat: add page sections)

  return (
    <footer className="bg-brand-blue">
      <div className="centered-container text-white">
        <div className="flex justify-center items-center">
          {socialLinks.map(link => <Link className="p-4" key={link.link} link={link.link}>{link.label}</Link>)}
        </div>
        <div className="flex">
          {props.links1.map(link => <Link className="p-4" key={link.link} link={link.link}>{link.label}</Link>)}
        </div>
      </div>
      <div className="bg-[#dbdada]">
        <div className="centered-container">
          <div className="flex">
            {props.links2.map(link => <Link className="p-4" key={link.link} link={link.link}>{link.label}</Link>)}
          </div>
          <div className="w-full">
            ©2017-{currentYear()} ESSILOR OF AMERICA, INC. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
