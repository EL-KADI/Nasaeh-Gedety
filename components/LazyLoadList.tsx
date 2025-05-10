"use client";
import React, { useState, useEffect, useRef } from "react";
import { categories } from "@/lib/data";
import CategoryCard from "./category-card";

const ITEMS_PER_PAGE = 6;

const LazyLoadList = () => {
  const [visibleItems, setVisibleItems] = useState(
    categories.slice(0, ITEMS_PER_PAGE)
  );
  const [hasMore, setHasMore] = useState(categories.length > ITEMS_PER_PAGE);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          const newItems = categories.slice(
            0,
            visibleItems.length + ITEMS_PER_PAGE
          );
          setVisibleItems(newItems);
          setHasMore(newItems.length < categories.length);
        }
      },
      { threshold: 0.1 }
    );

    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }

    return () => {
      if (lastItemRef.current) {
        observer.unobserve(lastItemRef.current);
      }
    };
  }, [visibleItems, hasMore]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((category, index) => (
          <div
            key={category.id}
            ref={index === visibleItems.length - 1 ? lastItemRef : null}
          >
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
      {hasMore && (
        <p className="text-center mt-6 text-olive-800">جاري تحميل المزيد...</p>
      )}
    </div>
  );
};

export default LazyLoadList;
