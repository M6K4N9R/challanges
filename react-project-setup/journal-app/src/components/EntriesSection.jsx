import Tab from "./Tab";
import EntriesList from "./EntryList";
import FavoriteButton from "./FavouriteButton";



export default function EntriesSection({ entries }) {
  return (
    <>
      <section className="tabs-section">
        <Tab text={"All Entries"} counter={3} className={"tabs tab--entries"} />
        <Tab text={"Favorites"} counter={1} className={"tabs tab--favorites"} />
      </section>
      <EntriesList icon={FavoriteButton} entries={entries}/>
    </>
  );
}
