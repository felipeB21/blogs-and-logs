import Link from "next/link";
import React from "react";
import { AuthGithubServer } from "./auth-githbub-server";

const links = [
  { name: "Blogs", href: "/blogs" },
  { name: "Issues", href: "/issues" },
  { name: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="py-3">
      <div className="w-[1000px] mx-auto flex items-center justify-between">
        <div>
          <Link className="text-lg font-medium" href="/">
            Blogs&Logs
          </Link>
        </div>
        <nav className="flex items-center gap-5">
          <ul className="flex items-center gap-5">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <Link href="signin">
            <button className="bg-neutral-800 py-1 px-5 rounded-md hover:bg-neutral-950">
              Sign in
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
