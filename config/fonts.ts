import { Fira_Code as FontMono, Inter as FontSans, Inter, Lora, Source_Sans_3, Poppins, Just_Another_Hand } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});