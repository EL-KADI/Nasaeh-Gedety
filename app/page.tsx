import Image from "next/image";
import { categories } from "@/lib/data";
import LazyLoadList from "@/components/LazyLoadList";
import DailyTip from "@/components/daily-tip";
import FeaturedAdvice from "@/components/featured-advice";
import SearchForm from "@/components/SearchForm"; // Import the new SearchForm component

export default function Home() {
  return (
    <div className="pattern-bg min-h-screen">
      <section className="relative h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&w=1600"
            alt="أطباق تقليدية وأواني نحاسية"
            className="object-cover object-center"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="font-amiri text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              نصائح جدتي
            </h1>
            <p className="text-lg md:text-xl mb-6">
              كنز من الحكمة التقليدية والوصفات الشعبية والنصائح المنزلية
              المتوارثة عبر الأجيال
            </p>
            <SearchForm /> 
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <FeaturedAdvice />
      </section>
      
      <section className="py-12 container mx-auto px-4 bg-beige-50">
        <DailyTip />
      </section>
      
      <section className="py-12 container mx-auto px-4">
        <h2 className="font-amiri text-3xl font-bold mb-6 text-olive-800">
          استكشف أقسام النصائح
        </h2>
        <LazyLoadList />
      </section>

     

   

      <section className="py-12 bg-red-700 text-beige-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-amiri text-3xl font-bold mb-4">
            شارك نصائح جدتك مع العالم
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            هل تعرف وصفات تقليدية أو نصائح منزلية قديمة تريد مشاركتها مع
            الآخرين؟ ساعدنا في الحفاظ على موروثنا الثقافي.
          </p>
          <a
            href="/contact"
            className="inline-block bg-beige-100 text-red-800 hover:bg-beige-200 py-3 px-6 rounded-lg font-bold transition-colors"
          >
            أرسل نصيحتك الآن
          </a>
        </div>
      </section>
    </div>
  );
}