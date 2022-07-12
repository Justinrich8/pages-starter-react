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
import { Data, ProfileProvider } from "../types/data";
import CommonLayout from "../layouts/Common";
import BasicDirectory from "../components/BasicDirectory";
import { GetPath, TemplateConfig } from "@yext/yext-sites-scripts";
import "../index.css";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "country",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "dm_directoryChildrenCount",
      "dm_directoryChildren.slug",
      "dm_directoryParents",
      "slug",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["ce_root"],
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
export const getPath: GetPath<Data> = (data: Data) => {
  return data.document.streamOutput.slug;
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
const Country: React.FC<Data> = (props) => {
  const { document } = props;
  const { streamOutput } = document;
  const { dm_directoryChildrenCount, dm_directoryChildren } = streamOutput;
  return (
    <ProfileProvider value={streamOutput}>
      <CommonLayout
        streamOutput={streamOutput}
        content={
          <BasicDirectory
            count={dm_directoryChildrenCount}
            directoryChildren={dm_directoryChildren}
            name="the United States"
          />
        }
      />
    </ProfileProvider>
  );
};

export default Country;
