import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-olive-800 text-beige-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap20 ">
          <div>
            <h3 className="font-amiri text-xl font-bold mb-4">نصائح جدتي</h3>
            <p className="mb-4">
              موقع يحافظ على تراث أجدادنا وحكمتهم المتوارثة <br /> عبر الأجيال،
              لنستفيد من خبراتهم في حياتنا اليومية.
            </p>
          </div>
          <div>
            <h3 className="font-amiri text-xl font-bold mb-4">اهم الأقسام</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/health"
                  className="hover:text-red-300 transition-colors"
                >
                  الصحة زمان
                </Link>
              </li>
              <li>
                <Link
                  href="/category/cleaning"
                  className="hover:text-red-300 transition-colors"
                >
                  نظافة البيت
                </Link>
              </li>
              <li>
                <Link
                  href="/category/cooking"
                  className="hover:text-red-300 transition-colors"
                >
                  الطبخ الشعبي
                </Link>
              </li>
              <li>
                <Link
                  href="/category/secrets"
                  className="hover:text-red-300 transition-colors"
                >
                  أسرار جدتي
                </Link>
              </li>
              <li>
                <Link
                  href="/category/memories"
                  className="hover:text-red-300 transition-colors"
                >
                  ذكريات زمان
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-amiri text-xl font-bold mb-4">تواصل معنا</h3>
            <p className="mb-2">شاركنا نصائح جدتك وإرثها من الحكمة</p>
            <Link
              href="/contact"
              className="inline-block bg-red-800 hover:bg-red-700 text-beige-100 px-4 py-2 rounded transition-colors"
            >
              أرسل نصيحة
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-olive-600 mt-8 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} نصائح جدتي - جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}
