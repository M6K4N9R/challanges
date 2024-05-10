import Tab from "./Tab";
import EntriesList from "./EntryList";

export default function EntriesSection() {
  return (
    <>
      <section className="tabs-section">
        <Tab text={"All Entries"} counter={3} className={"tabs tab--entries"} />
        <Tab text={"Favorites"} counter={1} className={"tabs tab--favorites"} />
      </section>
      <EntriesList
        title={"That's Life in the city"}
        date={"27 Feb - 2024"}
        icon={
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#FF4A11"
            stroke="#FF4A11"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        }
      />
      <EntriesList
        title={"Another day in the village"}
        date={"30 Feb - 2024"}
        icon={
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="#ff4a11"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        }
      />
      <EntriesList
        title={"Holiday in London"}
        date={"14 Mar - 2024"}
        icon={
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="#ff4a11"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        }
      />
    </>
  );
}
