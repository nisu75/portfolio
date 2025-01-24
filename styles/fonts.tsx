import { Sometype_Mono } from "next/font/google";
import localFont from "next/font/local";

export const sometypeMono = Sometype_Mono({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
});

export const arialUnicode = localFont({
    src: "../public/fonts/arialuni.woff2",
})