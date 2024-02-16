import { inter, figtree } from "./ui/fonts";
import "./globals.css";
import Lenify from "@/hooks/Lenis";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${figtree.variable}`}>
        <Lenify>{children}</Lenify>
      </body>
    </html>
  );
}
