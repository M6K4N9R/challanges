import Link from "next/link";
import { introduction } from "../resources/lib/data.js";
import { volumes } from "../resources/lib/data.js";
import Head from "next/head.js";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lord of The Rings</title>
      </Head>
      <div>
        <h1>Lord of The Ring App</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        {volumes.map((volume, i) => (
          <ul key={i}>
            <li>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
              {/* <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link> */}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
