import { Poppins } from 'next/font/google';
import './global.css'
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '700'], // Specify the weights you need
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}   