/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import * as React from "react";
import { Profile, ProfileProvider } from "../types/data";
import CommonLayout from "../layouts/Common";
import { H1 } from "../components/Heading";
import LocationCard from "../components/cards/LocationCard";
import { GetPath, TemplateConfig, TemplateProps } from "@yext/yext-sites-scripts";
import "../index.css";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "city",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "dm_directoryChildrenCount",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.name",
      "dm_directoryChildren.address",
      "dm_directoryChildren.mainPhone",
      "dm_directoryParents.slug",
      "dm_directoryParents.name",
      "slug",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["ce_city"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = (data: TemplateProps) => {
  return data.document.slug;
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const City: React.FC<TemplateProps> = (props) => {
  const { document } = props;
  const { dm_directoryChildrenCount, dm_directoryChildren, name } = document;
  return (
    <ProfileProvider value={document as Profile}>
      <CommonLayout
        document={document}
        content={
          <div className="container my-8">
            <H1 className="mb-6">
              {dm_directoryChildrenCount} locations in {name}
            </H1>
            <div className="grid grid-cols-3 gap-6">
              {dm_directoryChildren.map((child: any, idx: number) => (
                <LocationCard key={idx} profile={child} />
              ))}
            </div>
          </div>
        }
      />
    </ProfileProvider>
  );
};

export default City;
