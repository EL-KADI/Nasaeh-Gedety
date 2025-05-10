import Image from "next/image";
import { categories, getAdviceByCategory } from "@/lib/data";
import LazyAdviceList from "@/components/LazyAdviceList";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = categories.find((cat) => cat.slug === params.slug);

  if (!category) {
    return {
      title: "قسم غير موجود | نصائح جدتي",
      description: "عذراً، القسم الذي تبحث عنه غير موجود.",
    };
  }

  return {
    title: `${category.name} | نصائح جدتي`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((cat) => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  const adviceList = getAdviceByCategory(params.slug);

  return (
    <div className="pattern-bg min-h-screen">
     
      <section className="relative h-64 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={category.imageUrl}
            alt={category.name}
            className="object-cover object-center"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="font-amiri text-4xl md:text-5xl font-bold mb-5 gele2">{category.name}</h1>
          <p className="max-w-2xl text-lg">{category.description}</p>
        </div>
      </section>

   
      <section className="py-12 container mx-auto px-4">
        <h2 className="font-amiri text-2xl font-bold mb-6">نصائح {category.name}</h2>

        {adviceList.length > 0 ? (
          <LazyAdviceList adviceList={adviceList} />
        ) : (
          <div className="text-center py-12 bg-beige-100 rounded-lg">
            <p className="text-xl text-gray-600">لا توجد نصائح في هذا القسم حالياً.</p>
            <p className="mt-2 text-gray-500">ترقبوا إضافة المزيد من النصائح قريباً.</p>
          </div>
        )}
      </section>
    </div>
  );
}