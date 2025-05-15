import "./globals.css";
import type { Metadata } from "next";
import { Cairo, Amiri } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
});

export const metadata = {
  title: "نصائح جدتي | تراث وحكمة الجدات العربية",
  description:
    "اكتشفي كنز نصائح جدتي: وصفات شعبية، علاجات منزلية، طبخ تراثي، حرف يدوية، ورعاية أطفال بأسلوب الجدات العربية من مصر والخليج وبلاد الشام.",
  keywords: [
    "نصائح تقليدية",
    "وصفات شعبية",
    "طب بلدي",
    "علاجات منزلية",
    "طبخ تراثي",
    "حرف يدوية عربية",
    "رعاية الأطفال التقليدية",
    "حفظ الأطعمة التقليدية",
    "خياطة يدوية",
    "جمال طبيعي",
    "زراعة منزلية",
    "تراث مصري",
    "تراث خليجي",
    "تراث شامي",
    "حكمة الجدات",
    "ديكور تقليدي",
    "تطريز يدوي",
    "أعشاب طبية",
    "ضيافة عربية",
    "نصائح جدتي",
    "نصايح جدتي",
    "جدتي",
    "نصيحة جدتي",
  ],
  metadataBase: new URL("https://nasaehgedety.vercel.app/"),
  openGraph: {
    title: "نصائح جدتي | تراث وحكمة الجدات العربية",
    description:
      "استمتعي بوصفات تراثية، نصائح منزلية، وحرف يدوية من الجدات العربية. اكتشفي الحلول التقليدية للطبخ، الصحة، والعناية بالمنزل!",
    url: "https://nasaehgedety.vercel.app/",
    type: "website",
    images: [
      {
        url: "/images/Logo.jpg", 
        width: 1200,
        height: 630,
        alt: "نصائح جدتي - تراث عربي تقليدي",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="ar" dir="rtl">
      <head>
        <Script src="https://cdn.botpress.cloud/webchat/v2.5/inject.js"></Script>
        <Script src="https://files.bpcontent.cloud/2025/05/14/17/20250514172648-XWMOF8BC.js"></Script>
      </head>
      <body
    suppressHydrationWarning={true}    className={`${cairo.variable} ${amiri.variable} font-cairo bg-beige-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4125738794087531"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
