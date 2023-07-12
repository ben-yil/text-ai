import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toast";
import "@/styles/globals.css";
import { Work_Sans } from "next/font/google";

import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";

const work_sans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-[#FEF8EE]  antialiased",
        work_sans.className
      )}
    >
      <body className="min-h-screen bg-[#FBEBE1] dark:bg-slate-900 antialiased  ">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <Toaster position="bottom-right" />

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
