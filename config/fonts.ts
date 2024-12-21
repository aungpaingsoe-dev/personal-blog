import { Fira_Code as FontMono, Inter as FontSans, Inter, Lora, Source_Sans_3, Poppins, Just_Another_Hand } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const inter = Inter();
export const lora = Lora();
export const source_sans_3 = Source_Sans_3();
export const poppins = Poppins({ weight: '300' });
export const just_another_hand = Just_Another_Hand({ weight: "400" });