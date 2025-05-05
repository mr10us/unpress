import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Toaster } from "sonner";

export const metadata = {
  title: "Unpress AI",
  description:
    "Unpress AI is a leading Ukrainian artificial intelligence-based platform that makes news creation fast, accurate, and cost-effective. What does Unpress AI do?",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
