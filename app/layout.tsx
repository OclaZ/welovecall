import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

export const metadata = {
  title: "WeLoveCall - Lead Generation Immobilier",
  description: "Générez des leads immobiliers qualifiés avec WeLoveCall",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${kanit.variable} font-sans`}>{children}</body>
    </html>
  );
}
