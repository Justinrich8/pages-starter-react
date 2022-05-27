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
    {link: props.facebook, label: <FaFacebook color="white" />},
    {link: props.twitter, label: <FaTwitter color="white" />},
    {link: props.youtube, label: <FaYoutube color="white" />},
    {link: props.instagram, label: <FaInstagram color="white" />},
    {link: props.linkedIn, label: <FaLinkedinIn color="white" />},
  ].filter(x => x.link)
>>>>>>> 5ff9812 (feat: add page sections)

  return (
    <footer className="bg-blue-500 text-white">
      <div className="flex justify-center items-center">
        {socialLinks.map(link => <Link className="p-4" key={link.link} link={link.link}>{link.label}</Link>)}
      </div>
      <div>
        {props.links1.map(link => <Link className="p-4" key={link.link} link={link.link}>{link.label}</Link>)}
      </div>
      <div>
        {props.links2.map(link => <Link className="p-4" key={link.link} link={link.link}>{link.label}</Link>)}
      </div>
      <div className="w-full px-8 mt-4 rounded-b-lg bg-blueGray-50">
        ©2017-{currentYear()} ESSILOR OF AMERICA, INC. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
