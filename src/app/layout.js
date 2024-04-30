import "./globals.css";
import Nav from '@/Components/Header/Header'
import { Providers } from "@/Redux/Provider";
export const metadata = {
  title: "Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>

        <Nav/>
        {children}
        </Providers>
        </body>
    </html>
  );
}
