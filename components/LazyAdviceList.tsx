"use client";

import React, { useState, useEffect, useRef } from "react";
import AdviceCard from "./ui/card-advice";
import { Advice } from "@/lib/types"; 

const ITEMS_PER_PAGE = 6;

interface LazyAdviceListProps {
  adviceList: Advice[];
}

const LazyAdviceList = ({ adviceList }: LazyAdviceListProps) => {
  const [visibleItems, setVisibleItems] = useState(adviceList.slice(0, ITEMS_PER_PAGE));
  const [hasMore, setHasMore] = useState(adviceList.length > ITEMS_PER_PAGE);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          const newItems = adviceList.slice(0, visibleItems.length + ITEMS_PER_PAGE);
          setVisibleItems(newItems);
          setHasMore(newItems.length < adviceList.length);
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
  }, [visibleItems, hasMore, adviceList]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((advice, index) => (
          <div
            key={advice.id}
            ref={index === visibleItems.length - 1 ? lastItemRef : null}
          >
            <AdviceCard advice={advice} />
          </div>
        ))}
      </div>
      {hasMore && <p className="text-center mt-6 text-olive-800">جاري تحميل المزيد...</p>}
    </div>
  );
};

export default LazyAdviceList;