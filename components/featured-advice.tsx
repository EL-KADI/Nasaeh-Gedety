import AdviceCard from '@/components/ui/card-advice';
import { getFeaturedAdvice } from '@/lib/data';

export default function FeaturedAdvice() {
  const featuredAdvice = getFeaturedAdvice();

  return (
    <section className="my-12">
      <h2 className="font-amiri text-2xl font-bold mb-6 text-olive-800">نصائح مميزة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredAdvice.map((advice) => (
          <AdviceCard key={advice.id} advice={advice} />
        ))}
      </div>
    </section>
  );
}