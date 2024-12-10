import Link from "next/link";

export default function Home() {

let linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  return (
    <main>
      <h1 className="text-3xl">Wheres My Local?</h1>

      <h2>Wheres My Local?</h2>
      <ul>
        <li><Link href="./wheres-my-local/" className={linkStyles}>Search</Link></li>
      </ul>
    </main>
  );
}
