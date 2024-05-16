import Tab from "./Tab";
import EntriesList from "./EntryList";
import FavoriteButton from "./FavouriteButton";

export default function EntriesSection({
  entries,
  onShowAllEntries,
  onShowFavoriteEntries,
}) {
  return (
    <>
      <section className="tabs-section">
        <Tab
          text={"All Entries"}
          counter={3}
          className={"tabs__button tab--entries"}
          onClick={onShowFavoriteEntries}
          
        />
        <Tab
          text={"Favorites"}
          counter={1}
          className={"tabs__button tab--favorites"}
          onClick={onShowAllEntries}
          
        />
      </section>
      <EntriesList icon={FavoriteButton} entries={entries} />
    </>
  );
}
