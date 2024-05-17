import { volumes } from "../../../resources/lib/data.js";

export function TheReturnOfTheKing() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <h2>
        <Link href="../index.js">"← All Volumes"</Link>
      </h2>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      {volume.books.map((book, i) => {
        <ul key={i}>
          {book.ordinal} {book.title}
        </ul>;
      })}
    </>
  );
}
