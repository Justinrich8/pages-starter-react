import React from "react";
import { Link } from "@yext/sites-react-components";
import { H1 } from "./Heading";

interface DirectoryProps {
  name: string;
  count: number;
  directoryChildren: { slug: string; name: string }[];
}

export default function BasicDirectory(props: DirectoryProps) {
  const { name, count, directoryChildren } = props;

  return (
    <div className="container my-8">
      <H1 className="mb-6">
        {count} locations in {name}
      </H1>
      <div className="flex flex-wrap">
        {directoryChildren.map((child: any, idx: number) => (
          <Link
            className="Link m-6"
            key={idx}
            link={child.slug}
            linkType={"URL"}
          >
            {child.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
