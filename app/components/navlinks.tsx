"use client";

import CustomLink from "./customlink";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState, useEffect } from "react";

const links = [
    { name: "about", href: "/about" },
    { name: "projects", href: "/projects" },
];

export default function NavLinks() {
    const pathname = usePathname();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkModeEnabled = document.documentElement.classList.contains('dark');
        setIsDarkMode(darkModeEnabled);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <div className="flex flex-row md:flex-col md:items-end">
            {links.map((link) => {
                return (
                    <CustomLink
                        key={link.name}
                        href={link.href}
                        type="navbar"
                        className={clsx(
                            "mx-2 md:mx-0 md:my-1",
                            pathname === link.href ? "text-foreground-100 italic" : "text-foreground-60"
                        )}
                    >
                        <p>{link.name}</p>
                    </CustomLink>
                );
            })}
            <CustomLink
                href=""
                type="navbar"
                onClick={toggleDarkMode}
                className="mx-2 text-foreground-60 md:mx-0 md:my-1"
            >
                lightswitch
            </CustomLink>
        </div>
    );
}