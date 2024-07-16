import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import { AppHeader } from "@/components/app-header/app-header";
import { AppProvider } from "./utils/_providers/app-providers.";
import AuthorizedGuard from "./utils/authorized-guard";

const fontSans = FontSans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Адресная книга",
  description: "Адресная книга",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body id="printpage" className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <AppHeader />
        <AppProvider>

          {children}

        </AppProvider>
      </body>
    </html>
  );
}
