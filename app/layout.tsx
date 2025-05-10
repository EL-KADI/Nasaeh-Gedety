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

export const metadata: Metadata = {
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
  ],
  openGraph: {
    title: "نصائح جدتي | تراث وحكمة الجدات العربية",
    description:
      "استمتعي بوصفات تراثية، نصائح منزلية، وحرف يدوية من الجدات العربية. اكتشفي الحلول التقليدية للطبخ، الصحة، والعناية بالمنزل!",
    url: "https://www.nasaehgedety.vercel.app",
    type: "website",
    images: [
      {
        url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGsMB4uMi607u7mnFc92ZnA7SZJQQHel6SXgGiEIvmGWGmUFIt7hS-TGxcxM44ewKtHGrLPNB5tih4ypANGh_qJnpho7-mdZDD1Cwakbi33uFK32QOeGyaRnlEPCENap0sFK-mVEtH3_SHXQuYYuoa-7R-tQvxJ01TmmtlvfLTGr8DEfQu8JADVL37yOc/s320/Logo.jpg",
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
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${amiri.variable} font-cairo bg-beige-100`}
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
