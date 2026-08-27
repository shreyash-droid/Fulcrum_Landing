import Script from "next/script";
import "./globals.css";
import Interactions from "./components/Interactions";

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%231B3A2E'/%3E%3Ctext x='16' y='23' font-family='Georgia,serif' font-size='20' fill='%23FBF8F1' text-anchor='middle'%3EF%3C/text%3E%3Ccircle cx='24.5' cy='22' r='2.2' fill='%23E85D3C'/%3E%3C/svg%3E";

export const metadata = {
  title: "Fulcrum - The CRM for retail businesses & service providers",
  description:
    "Fulcrum is a hyper-local CRM for retail counters. Acquire customers, reward every visit, and bring regulars back - all from one refreshingly simple platform.",
  icons: { icon: FAVICON },
  openGraph: {
    type: "website",
    title: "Fulcrum - The CRM for retail businesses & service providers",
    description:
      "Acquire customers. Retain relationships. Grow repeat business - all from one refreshingly simple platform.",
    siteName: "Fulcrum",
  },
};

export const viewport = {
  themeColor: "#F2ECE0",
  width: "device-width",
  initialScale: 1,
};

const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('fulcrum-theme');if(t==='blue')document.documentElement.setAttribute('data-theme','blue');else if(t==='warm')document.documentElement.removeAttribute('data-theme');}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,400;1,500&family=Geist:wght@400;500;600;700&display=swap"
        />
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_SCRIPT}
        </Script>
      </head>
      <body>
        {children}
        <Interactions />
      </body>
    </html>
  );
}
