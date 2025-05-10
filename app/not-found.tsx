import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pattern-bg min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md">
        <div className="mb-6">
          <span className="text-red-700 text-7xl font-bold">404</span>
        </div>
        <h1 className="font-amiri text-2xl font-bold text-olive-800 mb-4">الصفحة غير موجودة</h1>
        <p className="text-gray-600 mb-6">عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
        <Link 
          href="/" 
          className="inline-block bg-red-700 hover:bg-red-800 text-white py-2 px-6 rounded-lg transition-colors"
        >
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}