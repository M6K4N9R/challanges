import StarFilled from "../assets/star-filled";
import Star from "../assets/star";

export default function FavoriteButton({ onToggleFavorite, isFavorite, id }) {
  // this should be a state variable

  return (
    <button
      className="favorite-button"
      onClick={onToggleFavorite(id)}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
