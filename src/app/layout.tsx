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
      className={cn("bg-white text-slate-900 antialiased", work_sans.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased  ">
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
