import { FilterSearch, StandardFacets } from "@yext/search-ui-react";
import GeolocateButton from "./GeolocateButton";
import { useLocatorContext } from "./Locator";

// TODO: Where should config like this go and if possible get from streams definition?
const searchFields = [
  { fieldApiName: "builtin.location", entityType: "location" },
];

type SearchBoxProps = {
  title: string,
  subTitle: string,
  placeholderText?: string,
}

// TODO: look into selecting first autocomplete option on enter
export default function SearchBox(props: SearchBoxProps) {
  const { title, subTitle, placeholderText } = props;
  const { initialParamsLoaded } = useLocatorContext();

  return (
    <div className="shadow-brand-shadow p-6">
      <h1 className="Heading--lead mb-4">
        { title }
      </h1>
      <div className="mb-2 text-brand-gray-400">
        { subTitle }
      </div>
      <div className="flex items-center">
        <div className="relative w-full h-9">
          <FilterSearch
            customCssClasses={{
              filterSearchContainer: "absolute w-full",
            }}
            label=""
            placeholder={ placeholderText }
            searchFields={ searchFields }
            searchOnSelect={ true }
          />
        </div>
        <GeolocateButton className="ml-4" />
      </div>
      {initialParamsLoaded && (
        // TODO: update facet designs once available from design team.
        <StandardFacets
          collapsible={false}
          showOptionCounts={true}
          customCssClasses={{
            standardFacetsContainer: "md:absolute md:bottom-8 md:left-[480px] z-[100] bg-white md:max-w-[calc(100%-510px)]",
            optionsContainer: "flex max-w-2xl overflow-x-auto",
            option: "bg-brand-gray-200 py-2 px-4 mx-2 rounded-3xl",
            optionInput: "",
            optionLabel: "text-brand-primary ml-0 whitespace-pre"
          }}
          searchOnChange={true}
        />
      )}
    </div>
  )
}
