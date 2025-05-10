"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getTipOfDay } from '@/lib/data';
import { Advice } from '@/lib/types';

export default function DailyTip() {
  const [tip, setTip] = useState<Advice | null>(null);

  useEffect(() => {
    setTip(getTipOfDay());
  }, []);

  if (!tip) {
    return <div className="animate-pulse h-80 bg-beige-200 rounded-lg"></div>;
  }

  return (
    <div className="decorative-border bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="font-amiri text-2xl font-bold mb-4 text-red-800">نصيحة اليوم</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-full md:w-1/3 h-48 md:h-auto overflow-hidden rounded-md">
            <Image
              src={tip.imageUrl}
              alt={tip.title}
              className="object-cover h-full w-full"
              width={300}
              height={200}
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="font-amiri text-xl font-bold mb-2">{tip.title}</h3>
            <p className="mb-4 text-gray-700">{tip.summary}</p>
            <div className="mb-4">
              <h4 className="font-bold mb-2 text-olive-700">طريقة الاستخدام:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {tip.steps.slice(0, 2).map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
            <Link 
              href={`/advice/${tip.id}`}
              className="inline-block bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded transition-colors"
            >
              قراءة المزيد
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}