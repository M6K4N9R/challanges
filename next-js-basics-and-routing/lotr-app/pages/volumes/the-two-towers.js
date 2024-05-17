import { volumes } from "../../resources/lib/data.js";
import Link from "next/link.js";

export function TheTwoTowers() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <h2>
        <Link href="../index.js">"← All Volumes"</Link>
      </h2>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      {volume.books.map((book, i) => {
        <ul key={i}>
          <li>
            {book.ordinal} {book.title}
          </li>
        </ul>;
      })}
    </>
  );
}
