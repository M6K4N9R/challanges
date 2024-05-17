import { volumes } from "../../../resources/lib/data.js";

export function TheFellowshipOfTheRing() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <h2>
        <Link href="../index.js">"← All Volumes"</Link>
      </h2>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      {volume.books.map((book, i) => {
        <ul>
          <li>{book.ordinal}</li>
          <li>{book.title}</li>
        </ul>;
      })}
    </>
  );
}
