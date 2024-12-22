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
  PiUser,
  PiUserFill,
  PiQuestionFill,
  PiQuestion,
  PiSignOut,
} from "react-icons/pi";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AnimatedButton from "../ui/animated-button";

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

  const linksProfile = [
    {
      href: "/my-account",
      label: "My Account",
      icon: <PiUser className="text-sm" />,
      iconActive: <PiUserFill className="text-sm" />,
    },
    {
      href: "/help-center",
      label: "Help Center",
      icon: <PiQuestion className="text-sm" />,
      iconActive: <PiQuestionFill className="text-sm" />,
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
      <aside className="flex items-center">
        <ModeToggle />
        <div className="bg-[--border-color] h-6 w-[1px] ml-5" />
        <Select>
          <SelectTrigger className="border-none w-[80px]">
            <SelectValue placeholder="ENG" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="eng">ENG</SelectItem>
            <SelectItem value="pt-br">PT-BR</SelectItem>
            <SelectItem value="span">SPAN</SelectItem>
          </SelectContent>
        </Select>
        <div className="bg-[--border-color] h-6 w-[1px]  mr-5" />
        <Popover>
          <PopoverTrigger>
            <Avatar className="size-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="mr-6 p-0">
            <section className="flex flex-col items-center justify-center p-6 bg-[--background-container-traffic] rounded-xl border-b border-[--border-color]">
              <Avatar className="size-16">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="mt-3 font-medium text-lg leading-3">
                Pedro Gontijo Braz
              </h1>
              <span className="mt-1 text-sm text-[--text-zinc]">
                pedrobrazdevs@gmail.com
              </span>
              <AnimatedButton className="mt-3" variant="blueLinks">
                Upgrade
              </AnimatedButton>
            </section>
            <section>
              <ul className="flex flex-col text-sm text-[--text-gray] w-full mr-8 p-3">
                {linksProfile.map(({ href, label, icon, iconActive }) => (
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
              <footer className="border-t border-[--border-color] px-3 py-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#"
                    className="flex items-center p-2 rounded-md duration-300 text-nowrap w-full"
                  >
                    <p className="flex items-center text-sm text-[--text-gray] hover:text-gray-500 dark:hover:text-gray-400">
                    <PiSignOut className="mr-1" /> Sign Out
                    </p>
                  </Link>
                </motion.div>
              </footer>
            </section>
          </PopoverContent>
        </Popover>
      </aside>
    </header>
  );
};

export default Header;
