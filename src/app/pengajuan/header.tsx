import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed p-2 w-screen bg-blue-950 text-white overflow-hidden">
      <ul className="list-none flex justify-end space-x-8 mr-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/card">Card</Link>
        </li>
        <li>
          <Link href="/fixed">Fixed</Link>
        </li>
        <li>
          <Link href="/grid">Grid</Link>
        </li>
      </ul>
    </header>
  );
}
