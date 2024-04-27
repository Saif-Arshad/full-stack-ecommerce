import "./globals.css";
import Nav from '@/Components/Header/Header'

export const metadata = {
  title: "Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
        </body>
    </html>
  );
}
