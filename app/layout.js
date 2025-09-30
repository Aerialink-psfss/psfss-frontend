import localFont from "next/font/local";
import "./globals.css";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

const aptos = localFont({
  src: [
    {
      path: "/fonts/aptos/Aptos.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/aptos/Aptos-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/aptos/Aptos-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/aptos/Aptos-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-aptos",
  display: "swap",
});

export const metadata = {
  title: "Aerialink Cloud",
  description: "Aerialink Cloud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${aptos.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
