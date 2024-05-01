import "./globals.css";
import Nav from '@/Components/Header/Header'
import { Providers } from "@/Redux/Provider";
import Footer from "@/Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
      <Toaster position="top-right"/>
        <Nav/>
        {children}
        <Footer/>
        </Providers>
        </body>
    </html>
  );
}
