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
import { reactWrapper } from "../wrapper";
import { renderToString } from "react-dom/server";
import { Data, ProfileProvider } from "../types/data";
import CommonLayout from "../layouts/Common";
import { H1 } from "../components/Heading";
import LocationCard from "../components/cards/LocationCard";
import "../index.css";
import { Breadcrumbs } from "@yext/sites-react-components";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config = {
  // The name of the feature.
  // NOTE: A future change may remove this and the feature name would use the name of the template by default.
  name: "city",
  streamId: "city",
  stream: {
    $id: "city",
    // Required for now, but the plugin could set this automatically for you.
    source: "knowledgeGraph",
    // Required for now, but the plugin could set this automatically for you.
    destination: "pages",
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
      entityTypes: ["ce_City"],
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
export const getPath = (data: Data) => {
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
const City: React.FC<Data> = (props) => {
  const { document } = props;
  const { streamOutput } = document;
  const {dm_directoryChildrenCount, dm_directoryChildren, name} = streamOutput;
  console.log("doc: ", document);
  return <ProfileProvider value={streamOutput} >
        <CommonLayout 
        streamOutput={streamOutput}
        content={
          <div className="container my-8">
            <H1 className="mb-6">{dm_directoryChildrenCount} locations in {name}</H1>
            <div className="grid grid-cols-3 gap-6">
              {dm_directoryChildren.map((child: any, idx: number) => <LocationCard key={idx} profile={child}/>)}
            </div>
          </div>
        }
      />
    </ProfileProvider>
};

/**
 * Defines how the plugin will render the template for the production build. This has no
 * impact on local dev.
 *
 * A convenient function is currently defined in src/wrapper.ts.
 *
 * NOTE: Future changes may impact how this is used.
 */
export const render = (data: Data) =>
  reactWrapper(data, "city.tsx", renderToString(<City {...data} />), true);

export default City;
