"use client";

import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import {
  PiHouse,
  PiHouseFill,
  PiFire,
  PiFireFill,
  PiMicrophone,
  PiMicrophoneFill,
  PiSparkle,
  PiSparkleFill,
  PiGear,
  PiGearFill,
} from "react-icons/pi";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";

const Header = () => {
  const pathname = usePathname() ?? "";

  const links = [
    {
      href: "/",
      label: "Home",
      icon: <PiHouse className="text-sm" />,
      iconActive: <PiHouseFill className="text-sm" />,
    },
    {
      href: "/discover",
      label: "Discover",
      icon: <PiFire className="text-sm" />,
      iconActive: <PiFireFill className="text-sm" />,
    },
    {
      href: "/podcast",
      label: "Podcast",
      icon: <PiMicrophone className="text-sm" />,
      iconActive: <PiMicrophoneFill className="text-sm" />,
    },
    {
      href: "/watchlist",
      label: "Watchlist",
      icon: <PiSparkle className="text-sm" />,
      iconActive: <PiSparkleFill className="text-sm" />,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: <PiGear className="text-sm" />,
      iconActive: <PiGearFill className="text-sm" />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[--background-default] px-6 py-3 border-b border-[--border-color] flex items-center justify-between">
      <aside className="flex items-center gap-6">
        <h1 className="text-xl font-bold">
          Cooud <span className="text-sky-400">TV</span>
        </h1>
        <div className="bg-[--border-color] h-6 w-[1px]" />
        <nav className="text-sm hidden lg:flex">
          <ul className="flex items-center text-sm text-[--text-gray] w-full mr-8">
            {links.map(({ href, label, icon, iconActive }) => (
              <motion.li
                key={href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={href}
                  aria-label={`Navigate to ${label}`}
                  className={clsx(
                    "flex items-center p-2 rounded-md duration-300 text-nowrap w-full",
                    pathname === href
                      ? "text-[--text-black]"
                      : "hover:text-gray-500 dark:hover:text-gray-400"
                  )}
                >
                  <span className="mr-1">
                    {pathname === href ? iconActive : icon}
                  </span>
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </aside>
      <ModeToggle />
    </header>
  );
};

export default Header;
