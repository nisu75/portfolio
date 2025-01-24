import { Metadata } from "next";
import "../styles/globals.css";
import { sometypeMono } from "../styles/fonts";
import NavBar from "./components/navbar";
import HomeButton from "./components/homebutton";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: {
    template: "nicole cui | %s",
    default: "nicole cui"
  },
  description: "hey, i'm nicole! come check out my portfolio ☆ ～('▽^人)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sometypeMono.className}>
      <body className="antialiased">
        <div className="flex flex-col items-start justify-start w-full mx-auto gap-4 mt-[8vh] p-4 min-h-screen md:max-w-4xl md:px-20">
          <div className="md:ml-[2.5rem]">
            <HomeButton />
          </div>
          <div className="flex flex-col w-full gap-6 md:flex-row">
            <div className="flex md:w-1/8 md:flex-col">
              <NavBar />
            </div>
            <div className="flex-grow w-full mt-1 mx-2 pb-8 md:w-3/5 body">
              {children}
              <div className="mt-8">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
