import Image from "next/image";
import Link from "next/link";
import { adviceData, getAdviceById } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import LazySection from "@/components/LazySection";

export async function generateStaticParams() {
  return adviceData.map((advice) => ({
    id: advice.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const advice = getAdviceById(params.id);

  if (!advice) {
    return {
      title: "نصيحة غير موجودة | نصائح جدتي",
      description: "عذراً، النصيحة التي تبحث عنها غير موجودة.",
    };
  }

  return {
    title: `${advice.title} | نصائح جدتي`,
    description: advice.summary,
  };
}

export default function AdvicePage({ params }: { params: { id: string } }) {
  const advice = getAdviceById(params.id);

  if (!advice) {
    notFound();
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "health":
        return "الصحة زمان";
      case "cleaning":
        return "نظافة البيت";
      case "cooking":
        return "الطبخ الشعبي";
      case "secrets":
        return "أسرار جدتي";
      case "memories":
        return "ذكريات زمان";
      default:
        return "";
    }
  };

  return (
    <div className="pattern-bg min-h-screen py-8">
      <article className="container mx-auto px-4 max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-80 w-full">
          <Image
            src={advice.imageUrl}
            alt={advice.title}
            className="object-cover object-center"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-6">
            <Link
              href={`/category/${advice.category}`}
              className="text-sm inline-block bg-beige-200 text-red-800 px-3 py-1 rounded-full hover:bg-beige-300 transition-colors"
            >
              {getCategoryName(advice.category)}
            </Link>
          </div>

          <h1 className="font-amiri text-3xl md:text-4xl font-bold mb-4">
            {advice.title}
          </h1>

          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span>
              {new Date(advice.createdAt).toLocaleDateString("ar-EG")}
            </span>
            {advice.region && (
              <>
                <span className="mx-2">•</span>
                <span>{advice.region}</span>
              </>
            )}
          </div>

          <div className="prose max-w-none mb-8">
            <LazySection>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                {advice.content}
              </p>
            </LazySection>

            {advice.ingredients && (
              <LazySection>
                <div className="mb-6 bg-beige-50 p-4 rounded-lg border border-beige-200">
                  <h2 className="font-amiri text-xl font-bold text-olive-800 mb-3">
                    المكونات:
                  </h2>
                  <ul className="list-disc list-inside space-y-1">
                    {advice.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-700">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </LazySection>
            )}

            <LazySection>
              <div className="mb-6">
                <h2 className="font-amiri text-xl font-bold text-olive-800 mb-3">
                  الطريقة:
                </h2>
                <ol className="list-decimal list-inside space-y-3">
                  {advice.steps.map((step, index) => (
                    <li key={index} className="text-gray-700">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </LazySection>

            {advice.tips && (
              <LazySection>
                <div className="mb-6 bg-[#76aa0832] p-4 rounded-lg border border-[#618c0320]">
                  <h2 className="font-amiri text-xl font-bold text-[#618c03] mb-3">
                    نصائح جدتي:
                  </h2>
                  <ul className="list-disc list-inside space-y-1">
                    {advice.tips.map((tip, index) => (
                      <li key={index} className="text-gray-700">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </LazySection>
            )}

            {advice.warnings && (
              <LazySection>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
                  <h2 className="font-amiri text-xl font-bold text-red-800 mb-3">
                    تحذيرات:
                  </h2>
                  <ul className="list-disc list-inside space-y-1">
                    {advice.warnings.map((warning, index) => (
                      <li key={index} className="text-red-700">
                        {warning}
                      </li>
                    ))}
                  </ul>
                </div>
              </LazySection>
            )}

            {advice.source && (
              <LazySection>
                <div className="text-sm text-gray-500 italic mt-8">
                  المصدر: {advice.source}
                </div>
              </LazySection>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
