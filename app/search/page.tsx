"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { searchAdvice } from "@/lib/data";
import AdviceCard from "@/components/ui/card-advice";
import { Advice } from "@/lib/types";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [results, setResults] = useState<Advice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      // Simulate search delay
      setTimeout(() => {
        const searchResults = searchAdvice(query);
        setResults(searchResults);
        setIsLoading(false);
      }, 500);
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [query]);

  return (
    <div className="pattern-bg min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-amiri text-3xl font-bold text-olive-800">
            نتائج البحث: {query}
          </h1>
          <p className="text-gray-600 mt-2">
            {isLoading
              ? "جاري البحث..."
              : results.length > 0
              ? `تم العثور على ${results.length} نتيجة`
              : "لم يتم العثور على نتائج مطابقة"}
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md h-72 animate-pulse overflow-hidden"
              >
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((advice) => (
              <AdviceCard key={advice.id} advice={advice} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="font-amiri text-xl font-bold text-gray-700 mb-2">
              لا توجد نتائج مطابقة لـ "{query}"
            </h3>
            <p className="text-gray-600 mb-6">
              حاول البحث باستخدام كلمات مختلفة أو تفقد الأقسام المختلفة.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
