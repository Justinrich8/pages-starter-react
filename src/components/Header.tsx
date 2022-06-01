import * as React from "react";
import { Link } from "@yext/sites-react-components";
import { CTA } from "@yext/types";
import "./Header.css"

export type Link = {
  label: string;
  url: string;
};

type Header = {
  links: Link[];
}

type HeaderProps = {
  topLinks: CTA[];
  links: CTA[];
  logo: string;
};

const Header = (props: HeaderProps) => {
  const { topLinks, links, logo } = props;

  function renderLinks(links: CTA[]) {
    return links.map((link) => (
      <div key={link.label}>
        <Link className="px-4 uppercase" target="_blank" link={link.link}>
          {link.label}
        </Link>
      </div>
    ));
  }

  return (
    <nav className="Header">
      <div className="Header-top bg-gray1">
        <div className="container">
          <div className="flex items-center justify-end">{renderLinks(topLinks)}</div>
        </div>
      </div>
      <div className="bg-brand-blue">
        <div className="Header-bottom container relative flex justify-between items-center">
          <img className="Header-logo left-0" src={logo} width="72" height="72"></img>
          <div className="flex items-center justify-end text-white">{renderLinks(links)}</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
