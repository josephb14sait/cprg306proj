import Link from "next/link";

export default function Home() {

let linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main>
      <h1 className="text-3xl">Wheres My Local?</h1>
      <p className="text-sm">"Where's My Local?" is a dynamic platform dedicated to the fighting game community. It allows users to discover and host local fighting game events, fostering connections among players and providing a centralized hub for competitive gatherings. Whether you're a seasoned competitor or a casual fan, this site makes it easy to find or promote events in your area.</p>
      <ul>
        <li><Link href="./wheres-my-local/" className={linkStyles}>Search</Link></li>
      </ul>
    </main>
  );
}
