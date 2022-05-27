<<<<<<< HEAD
import * as React from "react";
import Cta from "../components/cta";

export type Link = {
  label: string;
  url: string;
};

type Header = {
  links: Link[];
=======
import { Link } from "@yext/sites-react-components";
import { CTA } from "@yext/types";
import React from "react";

type HeaderProps = {
  topLinks: CTA[];
  links: CTA[];
>>>>>>> 5ff9812 (feat: add page sections)
  logo: string;
};

const Header = (props: HeaderProps) => {
  const { topLinks, links, logo } = props;

  function renderLinks(links: CTA[]) {
    return links.map((link) => (
      <div key={link.label}>
        <Link target="_blank" link={link.link}>
          {link.label}
        </Link>
      </div>
    ));
  }

  return (
    <nav className="py-6 flex items-center justify-between">
      <img src={logo} width="50" height="50"></img>
      <div className="text-2xl font-semibold">
        Yext&apos;s Fashion Warehouse
      </div>
      <div className="">{renderLinks(topLinks)}</div>
      <div className="">{renderLinks(links)}</div>
    </nav>
  );
};

export default Header;
