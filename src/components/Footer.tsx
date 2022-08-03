import { Link } from "@yext/sites-react-components";
import { CTA } from "@yext/types";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

interface FooterProps {
  instagram: URL;
  youtube: URL;
  linkedIn: URL;
  twitter: URL;
  facebook: URL;
  links1: CTA[];
  links2: CTA[];
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

  return (
    <footer className="text-sm sm:text-xs">
      <div className="bg-brand-blue py-11">
        <div className="container text-white">
          <div className="flex justify-center items-center">
            {socialLinks.map((link) => (
              <Link className="Link p-4" key={link.link} cta={link} />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            {(props.links1 || []).map((link) => (
              <Link
                className="Link py-4 sm:px-4"
                key={link.link}
                cta={link}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray1">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            {(props.links2 || []).map((link) => (
              <Link
                className="Link py-4 sm:px-4"
                key={link.link}
                cta={link}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="w-full bg-white text-center p-3">
          ©2017-{currentYear()} ESSILOR OF AMERICA, INC. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
