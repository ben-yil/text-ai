"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Paragraph from "../components/ui/Paragraph";
import LargeHeading from "../components/ui/LargeHeading";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme: applicationTheme } = useTheme();

  return (
    <section className="relative w-full min-h-screen md:h-screen flex flex-row md:block  justify-center overflow-x-hidden">
      <div className="pt-36">
        {applicationTheme === "dark" ? (
          <Image
            priority
            fill
            quality={100}
            className="pointer-events-none select-none"
            style={{ objectFit: "cover" }}
            src="/dark-mode-background.png"
            alt="background image"
          />
        ) : (
          <Image
            priority
            fill
            quality={100}
            className="pointer-events-none select-none"
            style={{ objectFit: "cover" }}
            src="/background.png"
            alt="background image"
          />
        )}

        <div className=" relative flex flex-column z-10 md:pt-0 md:top-1/4 lg:top-1/3 max-w-7xl mx-auto ">
          <div className="max-w-2xl px-4 ml-28 flex flex-col gap-8  sm:bg-inherit  ">
            <LargeHeading className="text-7xl md:text-7xl font-extrabold text-sky-600   ">
              Text AI
            </LargeHeading>

            <LargeHeading
              size={"sm"}
              className="border-4 p-3 border-sky-600 dark:border-sky-800 bg-[#fffbf0]  dark:bg-slate-900"
            >
              AI based text solutions
            </LargeHeading>

            <Paragraph className="text-white text-lg max-w-xl mt-44 ">
              Just sign up for your free API key, integrate Text Ai API <br />
              into your project, and start using right away.
            </Paragraph>
            {/* <Image src="/line.png" alt="line" width={"200"} height={"100"} /> */}
          </div>
        </div>
        <Image
          src="/girl.png"
          alt="girl image"
          quality={100}
          width={550}
          height={500}
          className="absolute -right-40 top-32 invisible lg:visible   "
        />
      </div>
    </section>
  );
}
