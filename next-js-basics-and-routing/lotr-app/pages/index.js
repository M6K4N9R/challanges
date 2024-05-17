import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "@/resources/lib/data";

export default function HomePage() {
  volumes.map((volume, i) => {
    return (
      <div>
        <h1>Lord of The Ring App</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <ul>
          <li>
            <Link href="./volumes/the-fellowship-of-the-ring">
              {" "}
              {volume.title}
            </Link>
          </li>
        </ul>
      </div>
    );
  });
}
