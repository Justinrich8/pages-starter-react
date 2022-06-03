import React from "react";
import { Image, Link } from "@yext/sites-react-components";
import { CTA } from "@yext/types";
import "./Header.css"
import { useBreakpoint } from "../hooks/useBreakpoints";

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

  const isDesktop = useBreakpoint('sm');

  if (!isDesktop) {
    return (
      <nav className="Header">
        <div className="flex justify-start items-center bg-brand-blue py-2">
          <div className="container">
            <Image className="Header-logo" src={logo} /></div>
        </div>
      </nav>
    )
  }

  function renderLinks(links: CTA[]) {
    return links.map((link) => (
      <div key={link.label}>
        <Link className="Link px-4 uppercase" target="_blank" link={link.link}>
          {link.label}
        </Link>
      </div>
    ));
  }

  return (
    <nav className="Header">
      <div className="Header-top bg-gray1 text-xs py-2">
        <div className="container">
          <div className="flex items-center justify-end">{renderLinks(topLinks)}</div>
        </div>
      </div>
      <div className="bg-brand-blue">
        <div className="Header-bottom container relative flex justify-between items-center">
          <Image className="Header-logo left-0" src={logo} />
          <div className="flex items-center justify-end text-white">{renderLinks(links)}</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
