import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Advice } from '@/lib/types';

interface AdviceCardProps {
  advice: Advice;
  className?: string;
}

export default function AdviceCard({ advice, className }: AdviceCardProps) {
  return (
    <Link href={`/advice/${advice.id}`}>
      <div 
        className={cn(
          "advice-card bg-white rounded-lg overflow-hidden shadow-md h-full border border-beige-200",
          className
        )}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={advice.imageUrl}
            alt={advice.title}
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <div className="text-xs font-medium text-red-700 mb-2">
            {advice.category === 'health' && 'الصحة زمان'}
            {advice.category === 'cleaning' && 'نظافة البيت'}
            {advice.category === 'cooking' && 'الطبخ الشعبي'}
            {advice.category === 'secrets' && 'أسرار جدتي'}
            {advice.category === 'memories' && 'ذكريات زمان'}
          </div>
          <h3 className="font-amiri text-lg font-bold mb-2 line-clamp-2">{advice.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-3">{advice.summary}</p>
          <div className="mt-4 flex justify-between items-center">
            {advice.region && (
              <span className="text-xs text-olive-700">{advice.region}</span>
            )}
            <span className="text-xs text-gray-500">
              {new Date(advice.createdAt).toLocaleDateString('ar-EG')}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}