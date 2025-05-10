import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/lib/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="advice-card group relative h-64 overflow-hidden rounded-lg shadow-md">
        <div className="absolute inset-0">
          <Image
            src={category.imageUrl}
            alt={category.name}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 w-full p-4 text-beige-100">
          <h3 className="font-amiri text-2xl font-bold mb-1">{category.name}</h3>
          <p className="text-sm line-clamp-2  text-beige-200">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}