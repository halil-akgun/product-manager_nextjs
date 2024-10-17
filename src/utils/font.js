import { Inter, Roboto } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-inter",
});
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500"],
    variable: "--font-roboto", // use in index.scss
});

export { inter, roboto };