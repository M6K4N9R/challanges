import { volumes } from "../../resources/lib/data.js";
import Link from "next/link";
import Image from "next/image";

export default function TheTwoTowers() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  const volumeIndex = volumes.findIndex(({ slug }) => slug === volume.slug);
  const prevVolume = volumeIndex > 0 ? volumes[volumeIndex - 1] : null;
  const nextVolume =
    volumeIndex < volumes.length - 1 ? volumes[volumeIndex + 1] : null;
  return (
    <>
      <h2>
        <Link href="/">"← All Volumes"</Link>
      </h2>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, i) => (
          <li key={i}>
            {book.ordinal} {book.title}
          </li>
        ))}
      </ul>

      <div>
        <Image
          src="/the-two-towers.png"
          alt={volume.title}
          width={140}
          height={230}
        />
      </div>
      <div>
        {prevVolume && (
          <p>
            <Link href={`/volumes/${prevVolume.slug}`}>← Previous Volume</Link>
          </p>
        )}
        {nextVolume && (
          <p>
            <Link href={`/volumes/${nextVolume.slug}`}>Next Volume →</Link>
          </p>
        )}
      </div>
    </>
  );
}
