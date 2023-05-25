import { ThemeToggle } from "@/components/ThemeToggle";
import LoginButton from "@/components/ui/LoginButton";
import SignOutButton from "@/components/ui/SignOutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Siemreap } from "next/font/google";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "./ui/Button";

interface NavbarProps {}

const Navbar = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed flex backdrop-blur-sm bg-inherent dark:bg-slate-800 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm items-center justify-between">
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
          {session ? (
            <>
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href="/dashboard"
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
