import { ThemeToggle } from "@/components/ThemeToggle";
import { getServerSession } from "next-auth";
import { Siemreap } from "next/font/google";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "./ui/Button";
// import { ThemeToggle } from './ThemeToggle'

interface NavbarProps {}

const Navbar = async ({}) => {
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link
          href="/"
          className={buttonVariants({ variant: "link", size: "lg" })}
        >
          Text Ai
        </Link>

        <div className="md:hidden">
          <ThemeToggle />
        </div>

        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Docs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
