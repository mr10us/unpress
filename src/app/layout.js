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
  openGraph: {
    title: "Unpress AI",
    description:
      "Unpress AI is a leading Ukrainian artificial intelligence-based platform that makes news creation fast, accurate, and cost-effective.",
    url: "https://unpress.ai",
    type: "website",
    images: [
      {
        url: "https://unpress.ai/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unpress AI Open Graph Image",
      },
    ],
  },
  twitter: {
  card: "summary_large_image",
  title: "Unpress AI",
  description:
    "Unpress AI is a leading Ukrainian artificial intelligence-based platform that makes news creation fast, accurate, and cost-effective.",
  images: ["https://unpress.ai/images/og-image.png"],
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
