"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        {href: "/", label: "Home"},
        {href: "/profile", label: "Profile"},
        {href: "/clubs", label: "My Clubs"},
    ];

    return (
        <nav className="flex flex-col gap-4 p-4 bg-green-500 text-white h-screen w-75">
            <h1 className="text-2xl font-bold mb-6">My Team</h1>
            {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`p-2 rounded hover:bg-green-700 ${
                        isActive ? "bg-green-700 font-bold" : ""
                        }`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );

}

