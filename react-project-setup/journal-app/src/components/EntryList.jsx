import FavoriteButton from "./FavouriteButton";

export default function EntriesList({ entries, onToggleFavorite, isFavorite, id }) {
  return (
    <section className="entries-section">
      {entries.map((entry) => (
        <acticle key={entry.id} className="entries">
          <div className="date">{entry.date}</div>
          <div className="acticle-info">
            <h3 className="entries--title">{entry.motto}</h3>
            <FavoriteButton onToggleFavorite={onToggleFavorite} isFavorite={isFavorite} id={id}/>
          </div>

          <p className="article">{entry.notes}</p>
          <hr className="break" />
        </acticle>
      ))}
    </section>
  );
}
