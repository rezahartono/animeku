"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { KeyboardEvent } from "react";

const Navbar = () => {
  const router = useRouter();
  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.currentTarget.value) {
      router.push(`/search/${event.currentTarget.value}`);
    }
  };

  return (
    <nav className="py-4 z-50 px-2 md:px-40 shadow bg-main-primary text-main-light fixed top-0 left-0 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="right-side flex items-center gap-4">
          <Link href="/">
            <h1 className="font-bold text-2xl flex items-center gap-2">
              <Image src="/logo.png" alt="logo" height={30} width={30} />
              <span className="hidden md:block">AnimeKu</span>
            </h1>
          </Link>
          <div className="relative text-main-dark">
            <input
              type="text"
              className="rounded-md h-9 pe-2 ps-8 placeholder:text-[14px]"
              placeholder="Searh Anime..."
              onKeyDown={handleSearch}
            />
            <Icon
              icon="iconamoon:search-bold"
              className="absolute top-[50%] -translate-y-[50%] left-2"
            />
          </div>
        </div>
        <div className="left-side mt-4 md:mt-0">
          <ul className="flex gap-5 list-none items-center">
            <li className="font-light hover:scale-[1.1] transition-all">
              <Link href="/">Home</Link>
            </li>
            <li className="font-light hover:scale-[1.1] transition-all">
              <Link href="/popular">Popular Anime</Link>
            </li>
            <li className="font-light hover:scale-[1.1] transition-all">
              <Link href="/upcoming">Upcoming Anime</Link>
            </li>
            <li className="font-light hover:scale-[1.1] transition-all">
              <Link href="/">Recomended</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
