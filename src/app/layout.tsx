import "./global.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust to your needs
  variable: "--font-poppins", // this gives us a CSS variable
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans text-[var(--color-primary-text)] bg-[var(--color-slide-bg)]`}
      >
        {children}
      </body>
    </html>
  );
}
