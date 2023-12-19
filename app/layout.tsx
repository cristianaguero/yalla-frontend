import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Comp/Navbar";
import RegisterModal from "./Comp/Modals/RegisterModal";
import LoginModal from "./Comp/Modals/LoginModal";

import { ToasterProvider } from "./providers/ToasterProvider";
import EventModal from "./Comp/Modals/EventModal";
import EventCard from "./Comp/EventCard";
import { eventsList } from "./data/eventsList";
import Link from "next/link";
import SearchModal from "./Comp/Modals/SearchModal";
import ClientOnly from "./Comp/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yalla",
  description: "Yalla App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <EventModal />
          <RegisterModal />
          <LoginModal />
          <SearchModal />
          <Navbar />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
