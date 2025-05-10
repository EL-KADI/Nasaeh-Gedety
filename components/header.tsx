"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Search } from "lucide-react";

const categories = [
  { name: "الصحة زمان", slug: "health" },
  { name: "نظافة البيت", slug: "cleaning" },
  { name: "الطبخ الشعبي", slug: "cooking" },
  { name: "أسرار جدتي", slug: "secrets" },
  { name: "ذكريات زمان", slug: "memories" },
];

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-olive-700 text-beige-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-amiri text-2xl xl:text-3xl font-bold tracking-wide">
                نصائح جدتي
              </span>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center lg:space-x-0  space-x-4 xl:space-x-4  rtl:space-x-reverse">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="px-3 py-2 hover:bg-olive-600 rounded-md transition-colors font-medium text-lg"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="ابحث عن نصيحة..."
                className="bg-olive-600 text-beige-100 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 w-48 lg:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-beige-200"
              >
                <Search size={18} />
              </button>
            </form>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-beige-200 hover:text-white hover:bg-olive-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">
                {isOpen ? "إغلاق القائمة" : "فتح القائمة"}
              </span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-olive-600"
              onClick={() => setIsOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-olive-600">
          <form onSubmit={handleSearch} className="px-3 py-2 relative">
            <input
              type="text"
              placeholder="ابحث عن نصيحة..."
              className="bg-olive-600 text-beige-100 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-beige-200"
            >
              <Search size={18} />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
