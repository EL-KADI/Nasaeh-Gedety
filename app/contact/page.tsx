"use client";

import { useState } from "react";
import Image from "next/image";
import { categories } from "@/lib/data";
import emailjs from "@emailjs/browser";
import callUs from "../../Images/اتصل بنا.jpg";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    title: "",
    content: "",
    ingredients: "",
    steps: "",
    region: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await emailjs.send(
        "my_gmail_service",
        "template_zwso9a9",
        {
          name: formData.name,
          email: formData.email,
          category:
            categories.find((cat) => cat.id === formData.category)?.name ||
            formData.category,
          title: formData.title,
          content: formData.content,
          ingredients: formData.ingredients,
          steps: formData.steps,
          region: formData.region || "غير محدد",
        },
        "IXA9rjGcKQL-5Ow0a"
      );

      console.log("Email sent successfully:", result.text);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        category: "",
        title: "",
        content: "",
        ingredients: "",
        steps: "",
        region: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setError("حدث خطأ أثناء إرسال النصيحة. حاول مرة أخرى لاحقاً.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pattern-bg min-h-screen">
      <section className="relative h-64 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={callUs}
            alt="شارك نصائح جدتك"
            className="object-cover object-center"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="font-amiri text-4xl md:text-5xl font-bold mb-2">
            شارك نصائح جدتك
          </h1>
          <p className="max-w-2xl text-lg">
            ساعدنا في الحفاظ على تراثنا وخبرات أجدادنا بمشاركة نصائح جدتك مع
            العالم
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto bg-olive-700 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="font-amiri text-2xl font-bold text-olive-800 mb-2">
                  تم استلام نصيحتك بنجاح!
                </h2>
                <p className="text-gray-600 mb-6">
                  شكراً لمساهمتك في الحفاظ على تراثنا. سنقوم بمراجعة النصيحة
                  ونشرها قريباً.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-red-700 hover:bg-red-800 text-white py-2 px-6 rounded-lg transition-colors"
                >
                  إرسال نصيحة أخرى
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-amiri text-2xl font-bold text-olive-800 mb-6">
                  أرسل نصيحة جديدة
                </h2>
                {error && (
                  <div className="bg-red-100 text-red-700 p-4 rounded-md mb-6">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        الاسم
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        القسم
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-600 focus:border-transparent"
                      >
                        <option value="" disabled>
                          اختر قسماً
                        </option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        المنطقة/البلد (اختياري)
                      </label>
                      <input
                        type="text"
                        id="region"
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-600 focus:border-transparent"
                        placeholder="مثال: مصر، سوريا، المغرب"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      عنوان النصيحة
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-600 focus:border-transparent"
                      placeholder="مثال: تنظيف النحاس بالليمون"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="content"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      وصف النصيحة
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      rows={4}
                      required
                      value={formData.content}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-600 focus:border-transparent"
                      placeholder="اشرح النصيحة بالتفصيل، وأهميتها وكيف تعلمتها..."
                    ></textarea>
                  </div>
                  <div>
                    <label
                      htmlFor="ingredients"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      المكونات (اختياري)
                    </label>
                    <textarea
                      id="ingredients"
                      name="ingredients"
                      rows={3}
                      value={formData.ingredients}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-600 focus:border-transparent"
                      placeholder="اكتب كل مكون في سطر جديد"
                    ></textarea>
                  </div>
                  <div>
                    <label
                      htmlFor="steps"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      خطوات التنفيذ
                    </label>
                    <textarea
                      id="steps"
                      name="steps"
                      rows={5}
                      required
                      value={formData.steps}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-600 focus:border-transparent"
                      placeholder="اكتب كل خطوة في سطر جديد"
                    ></textarea>
                  </div>
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-red-700 hover:bg-red-800 text-white py-3 px-8 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "جاري الإرسال..." : "إرسال النصيحة"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
