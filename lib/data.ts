import { Advice, Category } from "./types";
import asrarGedty from "../Images/اسرار جدتي.png";
import zekryatzamaz from "../Images/ذكريات زمان.png";
import kestElnom from "../Images/قصة قبل النوم.jpg";
import leabtelhegla from "../Images/لعبة الحجلة.jpg";
import elsaharfoaelsotoh from "../Images/السهرة فوق السطوح.jpg";
import elgamaleltabeae from "../Images/الجمال الطبيعي.jpg";
import qenaaelzabadyllbashra from "../Images/قناع الزبادي للبشرة.jpg";
import zetzaytonllsaar from "../Images/زيت زيتون للشعر.jpg";
import reaaiaelatfal from "../Images/رعاية الاطفال.jpg";
import tahdeatbokaaelatfal from "../Images/تهدئة بكاء الطفل.jpg";
import sebagatelqomashbelkorkom from "../Images/صبغ القماش بالكركم.jpg";
import rewaitelqesas from "../Images/رواية القصص.jpg";
import alteraselshaaby from "../Images/التراث الشعبي.jpg";
import leabatsega from "../Images/لعبة سيجة.jpg";
import senaatmahfazageld from "../Images/صناعة محفظة جلدية.jpg";
import sebakatelabel from "../Images/تحضير الإبل للسباق.png";
import folkor from "../Images/الفولكلور.png";
import antarebnshadad from "../Images/عنتر بن شداد.png";
import tahmemeltefl from "../Images/تحميم الطفل.jpg";
import zettadlekelatfal from "../Images/زيت تدليك الاطفال.jpg";
import sabghelqomashbelneana from "../Images/صبغ القماش بالنعناع.jpg";
import sabghelqomashbelroman from "../Images/صبغ القماش بالرمان.jpg";
import tqaledhelakteltefl from "../Images/تقاليد حلاقة الأطفال لأول مرة في المغرب.jpg";
import hekayatelshetallgeda from "../Images/حكايات الجدات في الليالي الشتوية.jpg";
import fuanesfokhar from "../Images/تشكيل فوانيس فخارية للزينة.jpg";
import toptorathy from "../Images/تطريز ثوب تراثي بنقوش زهرية.jpg";
import hakebtyd from "../Images/تطريز حقيبة يد تقليدية.jpg";
import askarweharamia from "../Images/عسكر وحرمية.jpg";
import elmalabselbadawya from "../Images/الملابس البدوية.jpg";

export const categories: Category[] = [
  {
    id: "health",
    name: "الصحة زمان",
    slug: "health",
    description:
      "وصفات طبيعية للعلاج كما كان يستخدمها أجدادنا للبرد والصداع والمغص وغيرها",
    imageUrl:
      "https://edraak-marketing-uploads.edraak.org/Courses/Health-Education-Course-Image1.jpg",
  },
  {
    id: "cleaning",
    name: "نظافة البيت زمان",
    slug: "cleaning",
    description: "طرق تنظيف البيت بأدوات طبيعية كما كانت تستخدمها جداتنا",
    imageUrl: "https://d34mfkth6cubud.cloudfront.net/wp-content/uploads/2023/07/02072235/DIY-Tips-to-Clean-Your-House-_-Cover-5-8-22-ar-272023-420x230.jpg",
  },
  {
    id: "cooking",
    name: "الطبخ الشعبي",
    slug: "cooking",
    description: "وصفات مصرية وسورية وخليجية من التراث بطرق تقليدية",
    imageUrl:
      "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "secrets",
    name: "أسرار جدتي",
    slug: "secrets",
    description: "نصائح يومية مثل تلميع النحاس وحفظ الأكل من أسرار الجدات",
    imageUrl: asrarGedty,
  },
  {
    id: "memories",
    name: "ذكريات زمان",
    slug: "memories",
    description: "حواديت شعبية وذكريات من زمن الجدات",
    imageUrl: zekryatzamaz,
  },
  {
    id: "beauty",
    name: "الجمال الطبيعي",
    slug: "beauty",
    description: "وصفات تجميل طبيعية للعناية بالبشرة والشعر",
    imageUrl: elgamaleltabeae,
  },
  {
    id: "gardening",
    name: "زراعة البيت",
    slug: "gardening",
    description: "نصائح لزراعة النباتات المنزلية والعناية بها",
    imageUrl:
      "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "herbal",
    name: "الأعشاب الطبية",
    slug: "herbal",
    description: "استخدام الأعشاب في العلاجات التقليدية",
    imageUrl:
      "https://cdn.salla.sa/zrogd/4DnMUvy0QNWHH51ZlAAUMEPgBsaqX7l7OQhpDtXw.jpg",
  },
  {
    id: "crafts",
    name: "الحرف اليدوية",
    slug: "crafts",
    description: "فنون يدوية تقليدية من تراث الجدات",
    imageUrl:
      "https://media.elwatannews.com/media/img/mediaarc/large/3293397221717485979.jpg",
  },
  {
    id: "hospitality",
    name: "كرم الضيافة",
    slug: "hospitality",
    description: "عادات الضيافة العربية التقليدية",
    imageUrl:
      "https://www.visitmorocco.com/sites/default/files/la-ceremonie-du-the.jpg",
  },
  {
    id: "remedies",
    name: "العلاجات المنزلية",
    slug: "remedies",
    description: "حلول منزلية لمشاكل صحية بسيطة",
    imageUrl:
      "https://vid.alarabiya.net/images/2021/03/30/41d5972a-7b90-4e00-92cf-6383c52ae8e5/41d5972a-7b90-4e00-92cf-6383c52ae8e5_16x9_1200x676.jpg?width=555&format=jpg",
  },
  {
    id: "baking",
    name: "المخبوزات التقليدية",
    slug: "baking",
    description: "وصفات خبز وحلويات من المطبخ العربي",
    imageUrl: "https://pbs.twimg.com/media/EjFqK39WkAAiN6s.jpg",
  },
  {
    id: "preservation",
    name: "حفظ الأطعمة",
    slug: "preservation",
    description: "طرق تقليدية لحفظ الأطعمة لفترات طويلة",
    imageUrl:
      "https://media.akhbar-alkhaleej.com/source/16581/images/Local-16-08-2023-106.jpg",
  },
  {
    id: "sewing",
    name: "الخياطة التقليدية",
    slug: "sewing",
    description: "نصائح للخياطة وإصلاح الملابس يدوياً",
    imageUrl: "https://pbs.twimg.com/media/B6N1G7xIQAAuJXp.jpg",
  },
  {
    id: "childcare",
    name: "رعاية الأطفال",
    slug: "childcare",
    description: "نصائح تقليدية لرعاية الأطفال",
    imageUrl: reaaiaelatfal,
  },
  {
    id: "festivals",
    name: "الاحتفالات الشعبية",
    slug: "festivals",
    description: "عادات وتقاليد الاحتفالات في الماضي",
    imageUrl:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "natural_dyes",
    name: "الصبغات الطبيعية",
    slug: "natural_dyes",
    description: "طرق صبغ الأقمشة بمواد طبيعية",
    imageUrl:
      "https://ar.qyherb.com/Content/uploads/2022809483/20220921144528bfad1bbcdcd845839968a78470789d6b.jpg",
  },
  {
    id: "storytelling",
    name: "رواية القصص",
    slug: "storytelling",
    description: "فن رواية القصص الشعبية",
    imageUrl: rewaitelqesas,
  },
  {
    id: "home_decor",
    name: "ديكور البيت",
    slug: "home_decor",
    description: "أفكار تقليدية لتزيين المنزل",
    imageUrl:
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "spices",
    name: "فن استخدام التوابل",
    slug: "spices",
    description: "نصائح لاستخدام التوابل في الطبخ التقليدي",
    imageUrl:
      "https://static.srpcdigital.com/styles/1037xauto/public/2021/02/21/1613482896625585600.jpg.webp",
  },
  {
    id: "weaving",
    name: "النسيج اليدوي",
    slug: "weaving",
    description: "فن النسيج التقليدي للسجاد والأقمشة",
    imageUrl:
      "https://dla7m3h3caipg.cloudfront.net/wp-content/uploads/2018/11/1541409550_128_52961_6.jpg",
  },
  {
    id: "heritage",
    name: "التراث الشعبي",
    slug: "heritage",
    description: "عادات وتقاليد من التراث العربي",
    imageUrl: alteraselshaaby,
  },
  {
    id: "music",
    name: "الموسيقى الشعبية",
    slug: "music",
    description: "آلات وأغاني شعبية من الماضي",
    imageUrl:
      "https://www.nabdalarab.com/wp-content/uploads/2025/01/%D8%A3%D8%B4%D9%87%D8%B1-%D8%A7%D9%84%D8%A2%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%AA%D8%B1%D8%A7%D8%AB-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A.webp",
  },
  {
    id: "travel",
    name: "عادات السفر",
    slug: "travel",
    description: "نصائح السفر التقليدية",
    imageUrl:
      "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Travel-Destination-Tips-_-Cover-ar22022023.jpg",
  },
  {
    id: "pottery",
    name: "صناعة الفخار",
    slug: "pottery",
    description: "فن صناعة الأواني الفخارية",
    imageUrl:
      "https://hafryat.com/sites/default/files/styles/single_main_image/public/%D9%81%D8%AE%D8%A7%D8%B1%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A.jpg.webp?itok=j0tBJF6D",
  },
  {
    id: "embroidery",
    name: "التطريز اليدوي",
    slug: "embroidery",
    description: "فن التطريز التقليدي على الأقمشة",
    imageUrl:
      "https://cdn.salla.sa/Apznn/iUAYqSpgCkoM5AxQsOAT4hFI5TzMwvnzHOLFkv6k.jpg",
  },
  {
    id: "fishing",
    name: "الصيد التقليدي",
    slug: "fishing",
    description: "طرق الصيد التقليدية في المناطق الساحلية",
    imageUrl:
      "https://modo3.com/thumbs/fit630x300/262928/1672056478/%D8%AA%D9%81%D8%B3%D9%8A%D8%B1_%D8%AD%D9%84%D9%85_%D8%B5%D9%8A%D8%AF_%D8%A7%D9%84%D8%B3%D9%85%D9%83_%D8%A8%D8%A7%D9%84%D8%B3%D9%86%D8%A7%D8%B1%D8%A9_%D9%81%D9%8A_%D8%A7%D9%84%D9%85%D9%86%D8%A7%D9%85.jpg",
  },
  {
    id: "games",
    name: "الألعاب الشعبية",
    slug: "games",
    description: "ألعاب تقليدية كان يلعبها الأطفال",
    imageUrl:
      "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/classical-games2-AR12112019.jpg",
  },
  {
    id: "weddings",
    name: "الأعراس التقليدية",
    slug: "weddings",
    description: "عادات وتقاليد الأعراس في الماضي",
    imageUrl:
      "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "calligraphy",
    name: "الخط العربي",
    slug: "calligraphy",
    description: "فن الخط العربي التقليدي",
    imageUrl:
      "https://turjomanquran.com/ckfinder/userfiles/images/10850104_1389772377984295_2187857220319600313_n.jpg",
  },
  {
    id: "perfumes",
    name: "العطور الطبيعية",
    slug: "perfumes",
    description: "صناعة العطور من مكونات طبيعية",
    imageUrl:
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "jewelry",
    name: "صناعة الحلي والمجوهرات",
    slug: "jewelry",
    description: "فن صناعة الحلي التقليدية",
    imageUrl:
      "https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "candles",
    name: "صناعة الشموع",
    slug: "candles",
    description: "طرق صناعة الشموع المنزلية",
    imageUrl:
      "https://v-genius.fatafeat.com/storage/attachments/15/bigstock-Christmas-candles-burning-at-n-108500090_403872.jpg/r/800/bigstock-Christmas-candles-burning-at-n-108500090_403872.jpg",
  },
  {
    id: "soap_making",
    name: "صناعة الصابون",
    slug: "soap_making",
    description: "صناعة الصابون الطبيعي يدوياً",
    imageUrl:
      "https://aradbranding.com/ar/wp-content/uploads/2022/07/soaps.jpg",
  },
  {
    id: "leatherwork",
    name: "صناعة الجلود",
    slug: "leatherwork",
    description: "فن صناعة المنتجات الجلدية",
    imageUrl:
      "https://diqqa.com/wp-content/uploads/2022/06/leather-tools-4-900x600.jpg",
  },
  {
    id: "basketry",
    name: "صناعة السلال",
    slug: "basketry",
    description: "فن نسج السلال من مواد طبيعية",
    imageUrl:
      "https://www.shorouknews.com/uploadedimages/Other/original/49C62909-0D6E-4427-999B-63688B459C34-1024x682.jpeg",
  },
  {
    id: "carpentry",
    name: "النجارة التقليدية",
    slug: "carpentry",
    description: "صناعة الأثاث الخشبي يدوياً",
    imageUrl:
      "https://najaar-kw.com/wp-content/uploads/2023/07/%D9%85%D8%A7-%D9%87%D9%8A-%D8%A3%D8%AF%D9%88%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D8%AC%D8%A7%D8%B1%D8%A9.jpg",
  },
  {
    id: "beekeeping",
    name: "تربية النحل",
    slug: "beekeeping",
    description: "نصائح لتربية النحل وجمع العسل",
    imageUrl:
      "https://qaenat.com/cdn/shop/articles/ImageForArticle_1238_16209892089992624.jpg?v=1663828150",
  },
  {
    id: "astronomy",
    name: "مراقبة النجوم",
    slug: "astronomy",
    description: "عادات مراقبة النجوم في الماضي",
    imageUrl:
      "https://mf.b37mrtl.ru/media/pics/2023.10/article/653a38e64c59b705b34ae621.PNG",
  },
  {
    id: "navigation",
    name: "الملاحة التقليدية",
    slug: "navigation",
    description: "طرق الملاحة باستخدام النجوم",
    imageUrl:
      "https://static.majalla.com/2023-06/153726.jpg",
  },
  {
    id: "poetry",
    name: "الشعر الشعبي",
    slug: "poetry",
    description: "فن الشعر الشعبي العربي",
    imageUrl:
      "https://cdn1-m.alittihad.ae/store/archive/image/2022/10/12/e543793f-2165-492a-87e2-f0097c9444dc.jpg",
  },
 
  {
    id: "markets",
    name: "الأسواق التقليدية",
    slug: "markets",
    description: "ذكريات الأسواق القديمة",
    imageUrl:
      "https://patisseriegato.ma/wp-content/uploads/2022/07/%D8%A3%D8%B3%D9%88%D8%A7%D9%82-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A9-%D9%85%D8%B1%D8%A7%D9%83%D8%B4-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-3.jpg",
  },
  {
    id: "falconry",
    name: "الصيد بالصقور",
    slug: "falconry",
    description: "فن الصيد باستخدام الصقور",
    imageUrl:
      "https://cdn.alweb.com/thumbs/fonoonalsayd/article/fit710x532/%D9%83%D9%8A%D9%81%D9%8A%D8%A9-%D8%B5%D9%8A%D8%AF-%D8%A7%D9%84%D8%B5%D9%82%D9%88%D8%B1.jpg",
  },
  {
    id: "camel_racing",
    name: "سباقات الإبل",
    slug: "camel_racing",
    description: "تقاليد سباقات الإبل في الخليج",
    imageUrl:
      "https://www.al-jazirah.com/2018/20180210/ms_23_1.jpg",
  },
  {
    id: "bedouin_life",
    name: "حياة البدو",
    slug: "bedouin_life",
    description: "عادات وتقاليد البدو",
    imageUrl:
      "https://www.visitdubai.com/-/media/gathercontent/article/l/life-of-a-bedouin-al-marmoom/fallback-image/life-of-a-bedouin-al-marmoom-desert-header.jpg",
  },
  {
    id: "folklore",
    name: "الفولكلور",
    slug: "folklore",
    description: "قصص وحكايات من الفولكلور العربي",
    imageUrl:folkor,
  },
  {
    id: "architecture",
    name: "العمارة التقليدية",
    slug: "architecture",
    description: "تصاميم البيوت التقليدية",
    imageUrl:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "festive_foods",
    name: "أطعمة الأعياد",
    slug: "festive_foods",
    description: "وصفات تقليدية للأعياد والمناسبات",
    imageUrl:
      "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
export const adviceData: Advice[] = [
    {
      id: "health-1",
      title: "الكمادات البلدي للحرارة",
      summary: "طريقة تخفيض حرارة الجسم باستخدام الخل والماء",
      category: "health",
      content:
        "كانت جدتي تعالج ارتفاع الحرارة بالكمادات البلدي، وهي طريقة فعالة خاصة للأطفال.",
      ingredients: ["نصف كوب خل أبيض", "كوب ماء بارد", "قماش قطني"],
      steps: [
        "اخلطي الخل مع الماء في وعاء",
        "بللي القماش بالخليط واعصريه",
        "ضعي الكمادة على الجبين وأسفل القدمين",
        "كرري كل 10-15 دقيقة",
      ],
      warnings: ["لا تستخدمي ماء مثلج", "راجعي الطبيب إذا استمرت الحرارة"],
      tips: [
        "استخدمي ماء بدرجة حرارة الغرفة لتجنب الصدمة الحرارية",
        "ضعي منشفة صغيرة تحت القماش لتجنب تهيج الجلد"
      ],
      imageUrl:
        "https://media.gemini.media/img/large/2019/12/5/2019_12_5_22_11_4_913.jpg",
      region: "مصر",
      createdAt: "2023-04-10",
      viewCount: 1254,
      featured: true,
    },
    {
      id: "health-2",
      title: "شاي الزنجبيل لنزلات البرد",
      summary: "وصفة لتخفيف أعراض البرد والسعال",
      category: "health",
      content: "شاي الزنجبيل يدفئ الجسم ويخفف احتقان الحلق.",
      ingredients: [
        "قطعة زنجبيل (2 سم)",
        "كوب ماء مغلي",
        "ملعقة عسل",
        "عصير نصف ليمونة",
      ],
      steps: [
        "ابشري الزنجبيل ناعماً",
        "أضيفي الماء المغلي واتركيه 5 دقائق",
        "صفيه وأضيفي العسل والليمون",
        "اشربيه ساخناً",
      ],
      warnings: ["تجنبي الزنجبيل إذا كنتِ تعانين من ارتفاع ضغط الدم"],
      tips: [
        "أضيفي رشة قرفة لتعزيز النكهة والفائدة",
        "اشربيه ببطء لتجنب تهيج المعدة"
      ],
      imageUrl:
        "https://cdn.altibbi.com/cdn/cache/1000x500/image/2022/09/26/f2b320dd614a928532ab57f9f23311ba.webp",
      region: "بلاد الشام",
      createdAt: "2023-08-22",
      viewCount: 876,
      featured: false,
    },
    {
      id: "health-3",
      title: "الحجامة لتخفيف الألم",
      summary: "طريقة تقليدية لعلاج آلام العضلات",
      category: "health",
      content: "الحجامة كانت تُستخدم لتخفيف آلام الظهر والمفاصل.",
      ingredients: ["أكواب حجامة", "زيت زيتون", "مطهر"],
      steps: [
        "نظفي الجلد بالمطهر",
        "ادهني المنطقة بزيت الزيتون",
        "ضعي الأكواب لسحب الهواء",
        "اتركيها 5-10 دقائق",
      ],
      warnings: ["استشيري مختص قبل التجربة"],
      tips: [
        "تأكدي من تعقيم الأدوات جيدًا لتجنب العدوى",
        "ابدئي بجلسات قصيرة لتعتادي على العلاج"
      ],
      imageUrl:
        "https://cdn.altibbi.com/cdn/cache/1000x500/image/2020/12/14/58b011e8bdb12e99efea07098fcfca24.png.webp",
      region: "الخليج",
      createdAt: "2023-09-01",
      viewCount: 543,
      featured: false,
    },
    {
      id: "cleaning-1",
      title: "تنظيف النحاس بالليمون والملح",
      summary: "طريقة لتلميع النحاس بمكونات طبيعية",
      category: "cleaning",
      content: "النحاس يلمع بسهولة باستخدام الليمون والملح.",
      ingredients: ["ليمونة", "ملح خشن", "قماش ناعم"],
      steps: [
        "اغمسي الليمون في الملح",
        "افركي النحاس بحركات دائرية",
        "اشطفيه بالماء الفاتر",
        "جففيه جيداً",
      ],
      warnings: ["لا تستخدمي على النحاس المطلي"],
      tips: [
        "استخدمي ليمونة طازجة لنتائج أفضل",
        "جففي النحاس مباشرة لتجنب البقع المائية"
      ],
      imageUrl: "https://hlpr.eg//wp-content/uploads/2020/05/Lemon-and-Salt.png",
      createdAt: "2023-03-15",
      viewCount: 987,
      featured: false,
    },
    {
      id: "cleaning-2",
      title: "إزالة بقع الزيت من الملابس",
      summary: "استخدام بودرة التلك لإزالة بقع الزيت",
      category: "cleaning",
      content: "بودرة التلك تمتص الزيت بسهولة من الأقمشة.",
      ingredients: ["بودرة تلك", "فرشاة ناعمة", "ماء فاتر"],
      steps: [
        "رشي البودرة على البقعة",
        "اتركيها ساعة",
        "افركي برفق",
        "اغسلي بالماء والصابون",
      ],
      warnings: ["اختبري على جزء صغير أولاً"],
      tips: [
        "ضعي ورقة نشاف تحت القماش لامتصاص الزيت الزائد",
        "كرري العملية إذا كانت البقعة قديمة"
      ],
      imageUrl: "https://media.elbalad.news/2024/10/large/717/4/421.jpg",
      region: "الخليج",
      createdAt: "2023-09-10",
      viewCount: 654,
      featured: false,
    },
    {
      id: "cleaning-3",
      title: "تنظيف السجاد بالخل",
      summary: "إزالة البقع من السجاد باستخدام الخل",
      category: "cleaning",
      content: "الخل فعال في تنظيف السجاد دون الحاجة لمنظفات كيميائية.",
      ingredients: ["كوب خل أبيض", "كوب ماء", "قماش نظيف"],
      steps: [
        "اخلطي الخل مع الماء",
        "بللي القماش بالخليط",
        "افركي البقعة برفق",
        "جففي السجاد بمنشفة",
      ],
      warnings: ["اختبري الخليط على ركن صغير"],
      tips: [
        "استخدمي مروحة لتسريع تجفيف السجاد",
        "أضيفي قطرة صابون سائل للبقع العنيدة"
      ],
      imageUrl: "https://media.elbalad.news/2024/10/large/850/9/330.jpg",
      region: "مصر",
      createdAt: "2023-10-15",
      viewCount: 432,
      featured: false,
    },
    {
      id: "cooking-1",
      title: "المحشي البلدي على أصوله",
      summary: "وصفة محشي ورق العنب والكوسة والباذنجان",
      category: "cooking",
      content: "المحشي من الأكلات المصرية الأصيلة التي تُحضر في المناسبات.",
      ingredients: [
        "كيلو أرز مصري",
        "نصف كيلو طماطم",
        "بصلتان",
        "بقدونس",
        "شبت",
        "كزبرة",
        "زيت زيتون",
        "سمن بلدي",
        "ملح وفلفل",
        "بهارات",
        "ورق عنب أو خضار",
      ],
      steps: [
        "اغسلي الأرز",
        "اخلطي المكونات واتركيها ساعة",
        "احشي الخضار أو ورق العنب",
        "رصيها في الحلة",
        "أضيفي الماء واطهي على نار هادئة",
      ],
      warnings: ["اغسلي ورق العنب جيداً"],
      tips: [
        "أضيفي شرائح بطاطس في قاع الحلة لمنع الالتصاق",
        "استخدمي مرق دجاج لنكهة أغنى"
      ],
      imageUrl:
        "https://i.ytimg.com/vi/k8wYA3SsMlo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqcEfYL7kTyaruOwt_wW71ffFErQ",
      region: "مصر",
      createdAt: "2023-05-20",
      viewCount: 2433,
      featured: true,
    },
    {
      id: "cooking-2",
      title: "كبسة الدجاج الخليجية",
      summary: "وصفة الكبسة بالدجاج والتوابل الخليجية",
      category: "cooking",
      content: "الكبسة طبق خليجي شهير يُحضر في المناسبات.",
      ingredients: [
        "دجاجة",
        "3 أكواب أرز بسمتي",
        "بصلتان",
        "طماطم",
        "معجون طماطم",
        "بهارات الكبسة",
        "كركم",
        "قرفة",
        "هيل",
        "ملح وفلفل",
        "زيت",
        "مكسرات",
      ],
      steps: [
        "انقعي الأرز",
        "اقلي البصل وال روز",
        "أضيفي الطماطم والبهارات",
        "اطهي الدجاج",
        "أضيفي الأرز للمرق",
        "قدميه مع المكسرات",
      ],
      warnings: ["انقعي الأرز جيداً"],
      tips: [
        "استخدمي زعفران للون والنكهة الأصيلة",
        "قلي المكسرات قليلاً لتعزيز النكهة"
      ],
      imageUrl:
        "https://i.ytimg.com/vi/EdgbBtAx9LM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA93g-apCWdXREkQBNVsq5rdtUFhw",
      region: "الخليج",
      createdAt: "2023-10-05",
      viewCount: 1987,
      featured: true,
    },
    {
      id: "cooking-3",
      title: "فتة الشاورما السورية",
      summary: "وصفة فتة شاورما بالطحينة والخبز المقرمش",
      category: "cooking",
      content: "الفتة طبق سوري شهير يجمع بين النكهات الغنية.",
      ingredients: [
        "500 غرام لحم شاورما",
        "3 أرغفة خبز مقطعة",
        "كوب طحينة",
        "كوب زبادي",
        "عصير ليمون",
        "ثوم مهروس",
        "ملح وفلفل",
        "زيت",
        "بقدونس",
      ],
      steps: [
        "اقلي الخبز حتى يصبح مقرمشاً",
        "اطهي الشاورما",
        "امزجي الطحينة والزبادي والثوم",
        "رصي الخبز ثم الشاورما",
        "أضيفي صوص الطحينة وزيني بالبقدونس",
      ],
      warnings: ["لا تفرطي في الثوم إذا كنتِ لا تفضلينه"],
      tips: [
        "استخدمي خبزًا طازجًا لقرمشة أفضل",
        "أضيفي رمان لنكهة مميزة"
      ],
      imageUrl:
        "https://img.youm7.com/ArticleImgs/2018/1/22/237174-%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%B9%D9%85%D9%84-%D9%81%D8%AA%D8%A9-%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7--(1).jpg",
      region: "بلاد الشام",
      createdAt: "2023-11-20",
      viewCount: 1654,
      featured: false,
    },
    {
      id: "secrets-1",
      title: "حفظ الخضروات الورقية",
      summary: "طريقة لإطالة عمر الخضروات الورقية",
      category: "secrets",
      content: "احتفظي بالخضروات طازجة لأطول فترة بطريقة بسيطة.",
      steps: [
        "اختاري خضروات طازجة",
        "اغسليها وجففيها",
        "لفيها بقماش قطني",
        "ضعيها في كيس مثقوب",
        "احفظيها في الثلاجة",
      ],
      tips: [
        "تأكدي من جفاف الخضروات تمامًا قبل التخزين",
        "غيري القماش كل بضعة أيام للحفاظ على النضارة"
      ],
      imageUrl:
        "https://elmarada.org/wp-content/uploads/2020/04/200419110528361_%D9%83%D9%8A%D9%81-%D8%A7%D8%AD%D8%A7%D9%81%D8%B8-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%AE%D8%B6%D8%B1%D8%A7%D9%88%D8%A7%D8%AA-%D9%81%D9%8A-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AC%D8%A9.jpg",
      region: "مصر",
      createdAt: "2023-06-05",
      viewCount: 1345,
      featured: false,
    },
    {
      id: "secrets-2",
      title: "إزالة رائحة الثوم من اليدين",
      summary: "طريقة للتخلص من رائحة الثوم",
      category: "secrets",
      content: "التخلص من رائحة الثوم بسهولة باستخدام أدوات منزلية.",
      steps: [
        "افركي يديكِ بملعقة معدنية تحت الماء",
        "اغسلي بالصابون",
        "أضيفي عصير ليمون",
      ],
      tips: [
        "استخدمي ملعقة من الفولاذ المقاوم للصدأ لأفضل نتيجة",
        "افركي يديكِ بقليل من القهوة المطحونة لتعزيز الإزالة"
      ],
      imageUrl: "https://snd.ps/thumb/730x400/uploads/images/2020/07/B9lXL.jpeg",
      region: "مصر",
      createdAt: "2023-11-12",
      viewCount: 543,
      featured: false,
    },
    {
      id: "secrets-3",
      title: "إطالة عمر الزهور المقطوفة",
      summary: "حفظ الزهور طازجة لفترة أطول",
      category: "secrets",
      content: "كانت الجدات يحتفظن بالزهور طازجة باستخدام خلطات بسيطة.",
      ingredients: ["ملعقة سكر", "قطرتين خل", "ماء"],
      steps: [
        "امزجي السكر والخل في الماء",
        "ضعي الزهور في المزيج",
        "قصي أطراف السيقان يومياً",
        "غيري الماء كل يومين",
      ],
      tips: [
        "قصي السيقان بزاوية لزيادة امتصاص الماء",
        "أبعدي الزهور عن أشعة الشمس المباشرة"
      ],
      imageUrl:
        "https://img.youm7.com/ArticleImgs/2023/7/24/109258-%D8%A7%D9%84%D8%AD%D9%81%D8%A7%D8%B8-%D8%B9%D9%84%D9%89-%D8%B9%D9%85%D8%B1-%D8%A7%D9%84%D8%B2%D9%87%D9%88%D8%B1.jpg",
      region: "بلاد الشام",
      createdAt: "2023-12-05",
      viewCount: 321,
      featured: false,
    },
    {
      id: "memories-1",
      title: "السهرة على السطوح",
      summary: "ذكريات الليالي الصيفية على السطوح",
      category: "memories",
      content: "السهرات الصيفية على السطوح كانت مليئة بالمودة.",
      steps: [
        "إعداد الفرش بعد العصر",
        "تحضير الشاي والفواكه",
        "تجمع العائلة بعد العشاء",
        "تبادل الأحاديث",
        "النوم تحت النجوم",
      ],
      tips: [
        "استخدمي ناموسية للحماية من الحشرات",
        "أحضري بطانية خفيفة للأمسيات الباردة"
      ],
      imageUrl:elsaharfoaelsotoh,
      region: "مصر وبلاد الشام",
      createdAt: "2023-07-12",
      viewCount: 2011,
      featured: false,
    },
    {
      id: "memories-2",
      title: "حكايات الجدة قبل النوم",
      summary: "قصص شعبية كانت ترويها الجدات",
      category: "memories",
      content: "القصص الشعبية كانت تزرع الحكمة في قلوب الأطفال.",
      steps: [
        "تجمع الأطفال حول الجدة",
        "سرد قصة شعبية",
        "التفاعل مع الأطفال",
        "إنهاء القصة بحكمة",
      ],
      tips: [
        "اختاري قصصًا قصيرة للحفاظ على انتباه الأطفال",
        "استخدمي نبرات صوت مختلفة لجعل القصة ممتعة"
      ],
      imageUrl:kestElnom,
      region: "بلاد الشام",
      createdAt: "2023-12-01",
      viewCount: 1678,
      featured: true,
    },
    {
      id: "memories-3",
      title: "لعبة الحجلة في الحارة",
      summary: "ذكريات لعبة الحجلة التقليدية",
      category: "memories",
      content: "الحجلة كانت لعبة شعبية يلعبها الأطفال في الحارات.",
      steps: [
        "ارسمي مربعات الحجلة بالطباشير",
        "ارمي الحجر في المربع الأول",
        "اقفزي على قدم واحدة",
        "كرري حتى تنتهي الجولة",
      ],
      tips: [
        "اختاري حجرًا صغيرًا ومستديرًا لسهولة الرمي",
        "ارسمي المربعات على أرضية مستوية"
      ],
      imageUrl:leabtelhegla,
      region: "مصر",
      createdAt: "2024-01-10",
      viewCount: 987,
      featured: false,
    },
    {
      id: "beauty-1",
      title: "قناع الزبادي للبشرة",
      summary: "وصفة لترطيب البشرة وإضفاء النضارة",
      category: "beauty",
      content: "الزبادي يرطب البشرة ويمنحها نضارة طبيعية.",
      ingredients: ["2 ملعقة زبادي", "ملعقة عسل", "عصير ليمون"],
      steps: [
        "امزجي المكونات",
        "ضعي القناع على وجهكِ",
        "اتركيه 15 دقيقة",
        "اشطفيه بالماء الفاتر",
      ],
      warnings: ["اختبري على جزء صغير", "تجنبي الليمون لبشرة حساسة"],
      tips: [
        "استخدمي زبادي كامل الدسم لترطيب أعمق",
        "ضعي القناع بعد تنظيف البشرة جيدًا"
      ],
      imageUrl:qenaaelzabadyllbashra,
      region: "مصر",
      createdAt: "2024-01-15",
      viewCount: 432,
      featured: false,
    },
    {
      id: "beauty-2",
      title: "زيت الزيتون للشعر",
      summary: "وصفة لتغذية الشعر وتقويته",
      category: "beauty",
      content: "زيت الزيتون يغذي الشعر ويمنحه لمعاناً.",
      ingredients: ["2 ملعقة زيت زيتون", "ملعقة عسل"],
      steps: [
        "امزجي الزيت والعسل",
        "وزعيه على الشعر",
        "اتركيه ساعة",
        "اغسليه بشامبو خفيف",
      ],
      tips: [
        "سخني الزيت قليلاً لتغلغل أفضل",
        "غطي الشعر بغطاء بلاستيكي أثناء التطبيق"
      ],
      imageUrl:zetzaytonllsaar,
      region: "بلاد الشام",
      createdAt: "2024-02-01",
      viewCount: 321,
      featured: false,
    },
    {
      id: "beauty-3",
      title: "ماسك الموز لتفتيح البشرة",
      summary: "وصفة طبيعية لترطيب البشرة وتفتيحها",
      category: "beauty",
      content: "الموز غني بالفيتامينات التي ترطب البشرة وتعزز إشراقتها.",
      ingredients: ["موزة ناضجة", "ملعقة صغيرة عصير ليمون", "ملعقة صغيرة زبادي"],
      steps: [
        "اهرسي الموزة جيدًا حتى تصبح ناعمة",
        "أضيفي عصير الليمون والزبادي وامزجي جيدًا",
        "ضعي الماسك على وجهك لمدة 15 دقيقة",
        "اشطفيه بالماء الفاتر",
        "كرري الوصفة مرتين أسبوعيًا لنتائج أفضل"
      ],
      tips: [
        "استخدمي موزة ناضجة جدًا لسهولة الهرس",
        "ضعي منشفة تحت الرقبة لتجنب الفوضى"
      ],
      imageUrl: "https://cdn.sotor.com/thumbs/fit630x300/25585/1578051130/%D9%81%D9%88%D8%A7%D8%A6%D8%AF_%D9%82%D8%B4%D8%B1_%D8%A7%D9%84%D9%85%D9%88%D8%B2_%D9%84%D9%84%D8%A8%D8%B4%D8%B1%D8%A9_%D8%A7%D9%84%D8%AF%D9%87%D9%86%D9%8A%D8%A9.jpg",
      region: "الشرق الأوسط",
      createdAt: "2025-05-07",
      viewCount: 150,
      featured: true
    },
    {
      id: "gardening-1",
      title: "زراعة النعناع في المنزل",
      summary: "طريقة زراعة النعناع في أصيص",
      category: "gardening",
      content: "النعناع نبات عطري يسهل زراعته في المنزل.",
      steps: [
        "اختاري أصيص بفتحات تصريف",
        "املئيه بتربة خصبة",
        "ازرعي غصن نعناع",
        "اسقيه بانتظام",
        "ضعيه في مكان مشمس",
      ],
      tips: [
        "قصي الأوراق بانتظام لتشجيع النمو",
        "تجنبي الإفراط في الري لمنع تعفن الجذور"
      ],
      imageUrl:
        "https://www.nbatat.com/wp-content/uploads/2025/02/unnamed-file.webp",
      region: "الخليج",
      createdAt: "2024-02-10",
      viewCount: 321,
      featured: false,
    },
    {
      id: "gardening-2",
      title: "زراعة الريحان",
      summary: "نصائح لزراعة الريحان في المنزل",
      category: "gardening",
      content: "الريحان نبات عطري يضيف نكهة للأطباق.",
      steps: [
        "ازرعي بذور الريحان في تربة رطبة",
        "غطي البذور بطبقة خفيفة من التربة",
        "اسقيها يومياً برذاذ",
        "ضعي الأصيص في مكان مشمس",
      ],
      tips: [
        "حافظي على رطوبة التربة دون تشبع",
        "قصي الأزهار لتحفيز نمو الأوراق"
      ],
      imageUrl:
        "https://cdn.alweb.com/thumbs/daleelalnabatat/article/fit710x532/%D9%85%D8%A7-%D9%87%D9%88-%D9%88%D9%82%D8%AA-%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%AD%D8%A7%D9%86.jpg",
      region: "مصر",
      createdAt: "2024-03-01",
      viewCount: 234,
      featured: false,
    },
    {
      id: "gardening-3",
      title: "زراعة نبتة البوتس",
      summary: "نصائح لزراعة البوتس والعناية به في المنزل",
      category: "gardening",
      content: "نبتة البوتس من النباتات المنزلية السهلة العناية التي تضيف لمسة خضراء للمكان.",
      steps: [
        "اختر أصيصاً بفتحات تصريف واملأه بتربة خفيفة غنية",
        "ازرعي النبتة أو غصن البوتس في التربة",
        "اسقيها عندما تجف التربة السطحية",
        "ضعي الأصيص في مكان به إضاءة غير مباشرة",
        "قصي الأوراق الصفراء للحفاظ على النمو"
      ],
      tips: [
        "رذاذ الماء على الأوراق يحافظ على رطوبتها",
        "أعدي تقليم النبتة للحفاظ على شكلها"
      ],
      imageUrl: "https://www.picturethisai.com/wiki-image/1080/153861190466928663.jpeg",
      region: "الشرق الأوسط",
      createdAt: "2025-05-07",
      viewCount: 180,
      featured: true
    },
    {
      id: "herbal-1",
      title: "شاي البابونج للنوم",
      summary: "وصفة لتحسين النوم باستخدام البابونج",
      category: "herbal",
      content: "البابونج يساعد على الاسترخاء وتحسين النوم.",
      ingredients: ["ملعقة بابونج مجفف", "كوب ماء مغلي"],
      steps: [
        "أضيفي البابونج للماء المغلي",
        "اتركيه 5 دقائق",
        "صفيه واشربيه دافئاً",
      ],
      tips: [
        "اشربيه قبل النوم بنصف ساعة لأفضل تأثير",
        "أضيفي قطرة عسل لتحسين المذاق"
      ],
      imageUrl:
        "https://static.webteb.net/images/content/tbl_articles_article_29070_3139ef8386a-e62e-444b-8564-17bd21e0fbfc.jpg",
      region: "بلاد الشام",
      createdAt: "2024-03-15",
      viewCount: 198,
      featured: false,
    },
    {
      id: "herbal-3",
      title: "زيت الزنجبيل لآلام المفاصل",
      summary: "وصفة لتخفيف آلام المفاصل باستخدام الزنجبيل",
      category: "herbal",
      content: "الزنجبيل يحتوي على خصائص مضادة للالتهاب تساعد في تخفيف آلام المفاصل.",
      ingredients: ["ملعقة زنجبيل مبشور", "نصف كوب زيت زيتون"],
      steps: [
        "امزجي الزنجبيل المبشور مع زيت الزيتون",
        "سخني المزيج على نار هادئة لمدة 10 دقائق",
        "اتركيه يبرد ثم صفيه",
        "دلكي المنطقة المصابة بالزيت مرتين يوميًا"
      ],
      tips: [
        "سخني الزيت قليلاً قبل التدليك لتأثير أفضل",
        "خزني الزيت في زجاجة داكنة للحفاظ على فعاليته"
      ],
      imageUrl: "https://static.webteb.net/images/content/tbl_articles_article_33046_897d71fa769-d03d-4fb3-8e67-a435cd8248f5.jpg",
      region: "الخليج العربي",
      createdAt: "2025-05-07",
      viewCount: 175,
      featured: false
    },
    {
      id: "herbal-4",
      title: "شاي الكركم لتعزيز المناعة",
      summary: "وصفة لتقوية جهاز المناعة باستخدام الكركم",
      category: "herbal",
      content: "الكركم يحتوي على مضادات أكسدة تساعد في تعزيز المناعة ومحاربة الالتهابات.",
      ingredients: ["نصف ملعقة صغيرة كركم مطحون", "كوب ماء مغلي", "رشة فلفل أسود"],
      steps: [
        "أضيفي الكركم ورشة الفلفل الأسود إلى الماء المغلي",
        "اتركي الخليط ينقع لمدة 5 دقائق",
        "صفي الشاي واشربيه دافئًا",
        "يمكن إضافة ملعقة عسل للتحلية إذا رغبت"
      ],
      tips: [
        "استخدمي كركم طازج مبشور إن أمكن لفائدة أكبر",
        "اشربيه صباحًا لتنشيط الجسم"
      ],
      imageUrl: "https://vid.alarabiya.net/images/2016/07/08/58e9c76c-e278-40fd-8a38-beb586c6991e/58e9c76c-e278-40fd-8a38-beb586c6991e_16x9_1200x676.jpg",
      region: "المغرب",
      createdAt: "2025-05-07",
      viewCount: 190,
      featured: true
    },
    {
      id: "herbal-5",
      title: "مغلي إكليل الجبل لتقوية الشعر",
      summary: "وصفة لتحسين صحة الشعر باستخدام إكليل الجبل",
      category: "herbal",
      content: "إكليل الجبل يعزز الدورة الدموية في فروة الرأس ويقوي بصيلات الشعر.",
      ingredients: ["ملعقتان إكليل جبل مجفف", "كوبان ماء"],
      steps: [
        "اغلي الماء وأضيفي إكليل الجبل",
        "اتركيه على نار هادئة لمدة 10 دقائق",
        "صفي السائل واتركيه يبرد",
        "استخدميه كغسول للشعر بعد الشامبو ولا تشطفيه"
      ],
      tips: [
        "دلكي فروة الرأس أثناء تطبيق الغسول لتحسين الدورة الدموية",
        "كرري الوصفة مرتين أسبوعيًا لنتائج ملحوظة"
      ],
      imageUrl: "https://modo3.com/thumbs/fit630x300/97098/1593317030/%D9%81%D9%88%D8%A7%D8%A6%D8%AF_%D8%A5%D9%83%D9%84%D9%8A%D9%84_%D8%A7%D9%84%D8%AC%D8%A8%D9%84_%D9%84%D9%84%D9%83%D8%B1%D8%B4.jpg",
      region: "بلاد الشام",
      createdAt: "2025-05-07",
      viewCount: 165,
      featured: false
    },
    {
      id: "crafts-1",
      title: "صناعة سجادة من القماش",
      summary: "طريقة لصنع سجادة يدوية",
      category: "crafts",
      content: "السجاد اليدوي كان جزءاً من تراث الجدات.",
      ingredients: ["قطع قماش قديمة", "إبرة وخيط", "مقص"],
      steps: [
        "قطعي القماش لشرائط طويلة",
        "جدلي الشرائط معاً",
        "لفي الجدائل بشكل دائري",
        "خيطيها لتثبيتها",
      ],
      tips: [
        "استخدمي أقمشة بألوان متناسقة لمظهر جميل",
        "ضعي طبقة مانعة للانزلاق تحت السجادة"
      ],
      imageUrl:
        "https://weftrug.com/cdn/shop/articles/04744b784f78e956c4481c1ee0240d52_df43831e-bdb5-4622-b9cd-84bdaedb32d5.jpg?v=1733625054&width=3000",
      region: "مصر",
      createdAt: "2024-04-01",
      viewCount: 176,
      featured: false,
    },
    {
      id: "crafts-3",
      title: "تطريز غطاء وسادة بالخيوط",
      summary: "طريقة لتطريز غطاء وسادة يدويًا",
      category: "crafts",
      content: "التطريز426 اليدوي يضيف لمسة تراثية لديكور المنزل.",
      ingredients: ["قماش قطني", "خيوط تطريز ملونة", "إبرة تطريز", "طوق تطريز"],
      steps: [
        "ارسمي تصميمًا بسيطًا (مثل زهور أو أنماط هندسية) على القماش",
        "ثبتي القماش في طوق التطريز",
        "استخدمي غرزة الصليب أو الغرزة الخلفية لملء التصميم بالخيوط",
        "أكملي التطريز ثم خيطي القماش لتصبح غطاء وسادة",
        "أضيفي زرًا أو سحابًا للغلق"
      ],
      tips: [
        "ابدئي بتصميم صغير إذا كنتِ مبتدئة",
        "استخدمي خيوط قطنية لسهولة التطريز"
      ],
      imageUrl: "https://m.media-amazon.com/images/I/41QPpaOCjjL._BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
      region: "بلاد الشام",
      createdAt: "2025-05-07",
      viewCount: 132,
      featured: false
    },
    {
      id: "crafts-5",
      title: "صناعة حصيرة من القش",
      summary: "طريقة لصنع حصيرة يدوية من القش",
      category: "crafts",
      content: "الحصير القشي كان يُستخدم للجلوس أو كديكور أرضي في البيوت التراثية.",
      ingredients: ["قش جاف", "حبل رفيع", "إبرة كبيرة"],
      steps: [
        "اجمعي القش ونظفيه من الشوائب",
        "قسمي القش إلى حزم متساوية",
        "لفي كل حزمة بحبل لتثبيتها وشكلي دوائر أو مستطيلات",
        "ربطي الحزم معًا باستخدام الإبرة والحبل لتشكيل الحصيرة",
        "اضغطي الحصيرة لتكون مستوية وأضيفي حبلًا نهائيًا للحواف"
      ],
      tips: [
        "بللي القش قليلاً لتسهيل التجليد",
        "اختاري قشًا متينًا لتحمل الاستخدام"
      ],
      imageUrl: "https://img.pikbest.com/wp/202344/mat-texture-background-of-natural-sisal-matting-surface_9898576.jpg!w700wp",
      region: "السودان",
      createdAt: "2025-05-07",
      viewCount: 120,
      featured: false
    },
    {
      id: "hospitality-1",
      title: "تحضير قهوة الضيافة",
      summary: "طريقة تحضير القهوة العربية",
      category: "hospitality",
      content: "القهوة العربية رمز الكرم في الضيافة.",
      ingredients: ["2 ملعقة قهوة مطحونة", "كوب ماء", "هيل مطحون"],
      steps: [
        "اغلي الماء",
        "أضيفي القهوة والهيل",
        "اتركيها تغلي قليلاً",
        "قدميها في فناجين صغيرة",
      ],
      tips: [
        "استخدمي قهوة محمصة حديثًا لنكهة أقوى",
        "قدميها مع تمر لتجربة تقليدية"
      ],
      imageUrl:
        "https://cdn.altibbi.com/cdn/cache/1000x500/image/2020/08/30/c1fea5f699c1649e6e2d965cb76cf46e.png.webp",
      region: "الخليج",
      createdAt: "2024-04-10",
      viewCount: 154,
      featured: true,
    },
    {
      id: "hospitality-2",
      title: "تحضير طبق التمر بالمكسرات",
      summary: "طريقة تقديم التمر كجزء من الضيافة العربية",
      category: "hospitality",
      content: "التمر مع المكسرات يُقدم كرمز للترحيب بالضيوف في التقاليد العربية.",
      ingredients: ["10 تمرات منزوعة النوى", "لوز مقشر", "زبدة مذابة"],
      steps: [
        "افتحي التمرات بحذر من الجانب",
        "ضعي حبة لوز داخل كل تمرة",
        "اغمسي التمرات في الزبدة المذابة برفق",
        "رتبيها في طبق مزخرف وقدميها مع القهوة"
      ],
      tips: [
        "استخدمي تمرًا طريًا لسهولة الحشو",
        "جربي مكسرات متنوعة مثل الجوز أو الفستق"
      ],
      imageUrl: "https://i.ytimg.com/vi/PPAYND8XRj4/maxresdefault.jpg",
      region: "الخليج العربي",
      createdAt: "2025-05-07",
      viewCount: 168,
      featured: true
    },
    {
      id: "hospitality-3",
      title: "إعداد بخور الضيافة",
      summary: "طريقة تحضير البخور لتعطير استقبال الضيوف",
      category: "hospitality",
      content: "البخور جزء أساسي من الضيافة العربية لخلق أجواء ترحيبية.",
      ingredients: ["عود خشبي", "لبان ذكر", "فحم طبيعي"],
      steps: [
        "أشعلي الفحم حتى يصبح جمرًا",
        "ضعي قطعة صغيرة من العود على الفحم",
        "أضيفي القليل من اللبان لتعزيز الرائحة",
        "مرري المبخرة حول الضيوف أو في المجلس برفق"
      ],
      tips: [
        "استخدمي مبخرة بغطاء لتجنب تناثر الجمر",
        "ضعي البخور قبل وصول الضيوف بقليل"
      ],
      imageUrl: "https://articlesarticle.com/wp-content/uploads/2022/10/%D8%A8%D8%AE%D9%88%D8%B1-%D8%A7%D9%84%D8%B9%D9%88%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D9%85.jpg",
      region: "اليمن",
      createdAt: "2025-05-07",
      viewCount: 135,
      featured: false
    },
    {
      id: "baking-1",
      title: "خبز التنور التقليدي",
      summary: "وصفة خبز التنور المصري",
      category: "baking",
      content: "خبز التنور كان يُحضر في الأفران المنزلية.",
      ingredients: ["3 أكواب دقيق", "ملعقة خميرة", "ملح", "ماء"],
      steps: [
        "امزجي الدقيق والخميرة والملح",
        "أضيفي الماء تدريجياً",
        "اعجني حتى تتكون عجينة",
        "اتركيها تختمر ساعة",
        "اخبزيها في فرن ساخن",
      ],
      tips: [
        "استخدمي دقيق القمح الكامل لنكهة تقليدية",
        "سخني الفرن جيدًا قبل الخبز"
      ],
      imageUrl:
        "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,c_scale,q_auto/cnnarabic/2019/12/11/images/141853.jpg",
      region: "مصر",
      createdAt: "2024-04-15",
      viewCount: 132,
      featured: false,
    },
    {
      id: "baking-2",
      title: "الكنافة بالجبن",
      summary: "وصفة كنافة تقليدية بالجبن من المطبخ الشامي",
      category: "baking",
      content: "الكنافة بالجبن هي حلوى عربية تقليدية تُقدم في المناسبات، تتميز بطبقاتها المقرمشة ومذاقها الحلو الغني.",
      ingredients: [
        "500 غرام شعيرية كنافة",
        "200 غرام جبن عكاوي (منقوع لإزالة الملح)",
        "كوب زبدة مذابة",
        "2 كوب شراب سكر (قطر)",
        "فستق مطحون للتزيين"
      ],
      steps: [
        "افركي شعيرية الكنافة بالزبدة المذابة جيدًا",
        "وزعي نصف الكمية في صينية مدهونة واضغطيها",
        "أضيفي طبقة من الجبن المبشور بالتساوي",
        "غطي الجبن بباقي الكنافة واضغطي برفق",
        "اخبزيها في فرن محمى على 180 درجة لمدة 25-30 دقيقة حتى تصبح ذهبية",
        "اسكبي القطر البارد على الكنافة الساخنة مباشرة",
        "زينيها بالفستق وقدميها دافئة"
      ],
      tips: [
        "استخدمي زبدة ممتازة الجودة لنكهة غنية",
        "تأكدي من نقع الجبن لتقليل الملوحة"
      ],
      imageUrl: "https://cdn.al-ain.com/lg/images/2018/5/18/121-141313-how-make-kanava-cheese-2.jpeg",
      region: "بلاد الشام",
      createdAt: "2025-05-07",
      viewCount: 245,
      featured: true
    },
    {
      id: "baking-3",
      title: "خبز الصاج اللبناني",
      summary: "وصفة خبز الصاج التقليدي من المطبخ اللبناني",
      category: "baking",
      content: "خبز الصاج هو خبز رقيق يُحضر تقليديًا على صاج معدني، مثالي مع المقبلات مثل الحمص واللبنة.",
      ingredients: [
        "2 كوب دقيق أبيض",
        "1 ملعقة صغيرة ملح",
        "1 ملعقة صغيرة سكر",
        "1 ملعقة صغيرة خميرة فورية",
        "3/4 كوب ماء دافئ"
      ],
      steps: [
        "اخلطي الدقيق، الملح، السكر، والخميرة في وعاء",
        "أضيفي الماء الدافئ تدريجيًا واعجني لمدة 5 دقائق حتى تصبح العجينة ناعمة",
        "غطي العجينة واتركيها ترتاح لمدة 30 دقيقة",
        "قسمي العجينة إلى 6 كرات متساوية",
        "افردي كل كرة على سطح مرشوش بالدقيق لتصبح دائرة رقيقة",
        "اخبزي كل دائرة على صاج ساخن أو مقلاة لمدة 1-2 دقيقة لكل جهة",
        "قدميه دافئًا مع الزعتر أو المقبلات"
      ],
      tips: [
        "سخني الصاج جيدًا لخبز متساوٍ",
        "لفي الخبز بقماش للحفاظ على طراوته"
      ],
      imageUrl: "https://kitchen.sayidaty.net/uploads/small/4e/4ed5e2b5cecb0a5b604d046bbc1ae272_w750_h500.jpg",
      region: "لبنان",
      createdAt: "2025-05-07",
      viewCount: 180,
      featured: false
    },
    {
      id: "preservation-1",
      title: "تخليل الزيتون",
      summary: "طريقة تخليل الزيتون في المنزل",
      category: "preservation",
      content: "تخليل الزيتون كان من أسرار الجدات لتخزين الطعام.",
      ingredients: ["كيلو زيتون", "ملح", "ماء", "ليمون"],
      steps: [
        "اغسلي الزيتون",
        "اخلطي الملح مع الماء",
        "ضعي الزيتون في برطمان",
        "أضيفي المحلول والليمون",
        "اتركيه 3 أسابيع",
      ],
      tips: [
        "غيري الماء كل أسبوع لتقليل المرارة",
        "استخدمي زيتون أخضر لنكهة أقوى"
      ],
      imageUrl:
        "https://img.youm7.com/ArticleImgs/2017/8/25/62136-%D9%85%D8%AE%D9%84%D9%84-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%A3%D8%AE%D8%B6%D8%B1.jpg",
      region: "بلاد الشام",
      createdAt: "2024-04-20",
      viewCount: 123,
      featured: false,
    },
    {
      id: "preservation-4",
      title: "تخزين الجبن الأبيض في المحلول الملحي",
      summary: "طريقة تقليدية لحفظ الجبن الأبيض لأشهر",
      category: "preservation",
      content: "حفظ الجبن الأبيض في محلول ملحي هو أسلوب تقليدي شائع في المطبخ العربي للحفاظ على الجبن طازجًا لفترات طويلة دون الحاجة للتبريد.",
      ingredients: [
        "1 كيلو جبن أبيض (مثل الجبنة النابلسية أو الفيتا)",
        "4 أكواب ماء مغلي (مبرد)",
        "4 ملاعق كبيرة ملح خشن"
      ],
      steps: [
        "قطعي الجبن إلى مكعبات متوسطة الحجم",
        "في وعاء نظيف، ذوبي الملح في الماء المغلي المبرد لتحضير المحلول الملحي",
        "ضعي مكعبات الجبن في برطمان زجاجي معقم",
        "اسكبي المحلول الملحي فوق الجبن حتى يغطيه بالكامل",
        "أغلقي البرطمان بإحكام وخزنيه في مكان بارد ومظلم",
        "اتركي الجبن لمدة أسبوع قبل الاستخدام، ويمكن أن يستمر لعدة أشهر"
      ],
      tips: [
        "تأكدي من تعقيم البرطمان جيدًا قبل الاستخدام",
        "اغسلي الجبن بالماء قبل تناوله لتقليل الملوحة"
      ],
      imageUrl: "https://www.atyabtabkha.com/tachyon/sites/2/2025/02/%D8%AA%D9%82%D8%AF%D9%8A%D9%85-%D8%A7%D9%84%D8%AC%D8%A8%D9%86-%D8%A7%D9%84%D8%A3%D8%A8%D9%8A%D8%B6.jpg",
      region: "بلاد الشام",
      createdAt: "2025-05-07",
      viewCount: 95,
      featured: true
    },
    {
      id: "preservation-7",
      title: "تخزين الفول المدمس المجفف",
      summary: "طريقة تقليدية لحفظ الفول المدمس لفترات طويلة",
      category: "preservation",
      content: "تجفيف الفول المدمس هو أسلوب قديم يُستخدم في المطبخ المصري للحفاظ على الفول كمصدر غذائي مغذٍ يمكن إعادة تحضيره بسهولة.",
      ingredients: [
        "2 كيلو فول مدمس (طازج أو مطبوخ مسبقًا)",
        "ملح خشن"
      ],
      steps: [
        "إذا كان الفول طازجًا، اسلقيه في ماء مملح حتى يصبح طريًا ثم صفيه",
        "رشي القليل من الملح على الفول المطبوخ",
        "افردي الفول على صواني نظيفة أو شبكة في طبقة واحدة",
        "ضعيه في مكان مشمس وجيد التهوية ليجف تمامًا (حوالي 4-6 أيام)",
        "قلّبي الفول يوميًا لضمان التجفيف المتساوي",
        "خزني الفول المجفف في أكياس قماشية أو برطمانات محكمة في مكان جاف"
      ],
      tips: [
        "تأكدي من جفاف الفول تمامًا لتجنب التعفن",
        "انقعي الفول المجفف ليلة كاملة قبل الطهي"
      ],
      imageUrl: "https://alfallahalyoum.news/wp-content/uploads/2019/01/1-121.jpg",
      region: "مصر",
      createdAt: "2025-05-07",
      viewCount: 92,
      featured: false
    },
  
  {
    id: "sewing-1",
    title: "إصلاح الملابس الممزقة",
    summary: "طريقة خياطة التمزقات يدوياً",
    category: "sewing",
    content: "إصلاح الملابس كان مهارة أساسية عند الجدات.",
    ingredients: ["إبرة", "خيط", "مقص"],
    steps: [
      "نظفي التمزق",
      "خيطي الإبرة",
      "استخدمي غرزة بسيطة",
      "اربطي الخيط في النهاية"
    ],
    tips: [
      "استخدمي خيطًا مزدوجًا للتمزقات الكبيرة لضمان متانة الإصلاح",
      "جربي غرزة السلم الخفية إذا أردتِ إصلاحًا غير ملحوظ على الملابس الرقيقة"
    ],
    imageUrl: "https://static.hellooha.com/uploads/thumbs/articles/original/mbzprvxzrwz45_article.jpg",
    region: "مصر",
    createdAt: "2024-04-25",
    viewCount: 111,
    featured: false
  },
  {
    id: "sewing-3",
    title: "إصلاح زر مفكوك",
    summary: "طريقة إعادة خياطة زر ملابس يدويًا",
    category: "sewing",
    content: "إصلاح الأزرار المفكوكة كان من المهارات الأساسية في البيوت العربية، مما يطيل عمر الملابس ويوفر الوقت والمال.",
    ingredients: [
      "إبرة خياطة",
      "خيط قوي (يفضل مطابق للون القماش)",
      "زر بديل (إذا كان الزر مفقودًا)",
      "مقص"
    ],
    steps: [
      "حددي مكان الزر على القماش وعلميه بقلم أو دبوس",
      "مرري الخيط عبر الإبرة واربطي طرفيه لتكوين عقدة",
      "ابدئي الخياطة من الجهة الخلفية للقماش، ومرري الإبرة عبر ثقوب الزر 4-5 مرات",
      "لفي الخيط حول قاعدة الزر عدة مرات لتكوين ساق صغيرة تثبته",
      "مرري الإبرة إلى الجهة الخلفية واربطي الخيط بعقدة محكمة، ثم قصي الزائد"
    ],
    tips: [
      "ضعي قطعة قماش صغيرة تحت الزر أثناء الخياطة لتجنب تمزق القماش الرقيق",
      "اختاري زرًا مطابقًا لحجم وشكل الأزرار الأخرى للحفاظ على تناسق الملابس"
    ],
    imageUrl: "https://m.media-amazon.com/images/I/91PGSytPMTL.jpg",
    region: "لبنان",
    createdAt: "2025-05-07",
    viewCount: 85,
    featured: false
  },
  {
    id: "sewing-5",
    title: "تقصير الأكمام الطويلة",
    summary: "طريقة تقصير أكمام القميص يدويًا لتناسب المقاس",
    category: "sewing",
    content: "تقصير الأكمام كان من المهارات الشائعة لتعديل الملابس في البيوت العربية، مما يجعل القطعة أكثر راحة وأناقة.",
    ingredients: [
      "إبرة خياطة",
      "خيط مطابق للون القميص",
      "مقص",
      "دبابيس",
      "شريط قياس"
    ],
    steps: [
      "قيسي الطول المطلوب للأكمام وحدديه بدبوس أو قلم قماش",
      "اقلبي الكم من الداخل وقصي الزائد مع ترك 2 سم إضافية للكي",
      "اطوي الحافة مرتين للداخل (حوالي 1 سم في كل طية) وثبتيها بالدبابيس",
      "خيطي الحافة بغرزة خفية يدوية للحصول على مظهر نظيف",
      "كوِ الخيط في النهاية وكرري العملية للكم الآخر"
    ],
    tips: [
      "جربي القميص بعد تحديد الطول للتأكد من الراحة قبل القص",
      "استخدمي مكواة لكي الطيات قبل الخياطة للحصول على حواف أنيقة ومستقيمة"
    ],
    imageUrl: "https://i.ytimg.com/vi/9EAQHI5WefA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQ63KYVZN9x6UzjmLGnwSyOzgWZQ",
    region: "مصر",
    createdAt: "2025-05-07",
    viewCount: 78,
    featured: false
  },
  {
    id: "childcare-1",
    title: "تهدئة بكاء الطفل",
    summary: "طريقة تقليدية لتهدئة الأطفال مستوحاة من خبرات الجدات",
    category: "childcare",
    content:
      "الجدات في الخليج كن يهدئن الأطفال بحركات بسيطة وأساليب طبيعية تعتمد على الحنان والصبر. هذه الطريقة تعزز الراحة النفسية للطفل وتساعد على تقوية الرابطة بين الأم والطفل.",
    steps: [
      "احملي الطفل برفق مع دعم رأسه وظهره لتوفير شعور بالأمان",
      "هزيه بحركة خفيفة ومنتظمة، مثل التأرجح، لتقليل التوتر",
      "غني أغنية هادئة بصوت منخفض، مثل أناشيد الأطفال التقليدية",
      "تأكدي من راحته بفحص الحفاض، درجة الحرارة، أو إذا كان جائعاً",
    ],
    tips: [
      "استخدمي قماطاً قطنياً لتغليف الطفل برفق، مما يشعره بالدفء",
      "حافظي على بيئة هادئة خالية من الضوضاء",
    ],
    imageUrl: tahdeatbokaaelatfal,
    region: "الخليج",
    createdAt: "2024-04-30",
    viewCount: 99,
    featured: false,
  },
  {
    id: "childcare-2",
    title: "تحميم الطفل بالطريقة التقليدية",
    summary: "طريقة تقليدية لتحميم الأطفال مستوحاة من خبرات الجدات لضمان راحة الطفل",
    category: "childcare",
    content: "في المناطق العربية، كانت الجدات يحرصن على تحميم الأطفال بطريقة لطيفة باستخدام مكونات طبيعية وبسيطة، مما يساعد على تنظيف بشرة الطفل الحساسة وتهدئته قبل النوم.",
    steps: [
      "املئي حوضًا صغيرًا بماء دافئ (حوالي 37 درجة مئوية) وتأكدي من درجة الحرارة بمرفقك",
      "أضيفي بضع قطرات من زيت زيتون أو صابون طبيعي خفيف إلى الماء",
      "احملي الطفل برفق واغسلي جسمه بقطعة قماش ناعمة بحركات دائرية لطيفة",
      "اشطفي الطفل بالماء الدافئ وجففيه بمنشفة قطنية ناعمة",
      "دلكي بشرته بقليل من زيت اللوز لترطيبها"
    ],
    tips: [
      "اختاري وقتًا هادئًا للتحميم، مثل قبل النوم، لتعزيز الاسترخاء",
      "احتفظي بجميع الأدوات (منشفة، ملابس، زيت) بالقرب منك لتجنب ترك الطفل بمفرده"
    ],
    imageUrl:tahmemeltefl,
    region: "مصر",
    createdAt: "2025-05-07",
    viewCount: 105,
    featured: true
  },
  {
    id: "childcare-4",
    title: "تحضير زيت تدليك للأطفال",
    summary: "طريقة تقليدية لتحضير زيت تدليك طبيعي للأطفال لتعزيز الاسترخاء",
    category: "childcare",
    content: "كانت الجدات في المناطق العربية يستخدمن زيوتًا طبيعية لتدليك الأطفال، مما يساعد على تهدئتهم، تحسين الدورة الدموية، وتقوية عضلاتهم.",
    steps: [
      "اخلطي 3 ملاعق كبيرة من زيت الزيتون البكر مع ملعقة صغيرة من زيت اللوز في وعاء نظيف",
      "سخني الخليط برفق في حمام مائي ليصبح دافئًا (تأكدي أنه ليس ساخنًا)",
      "ضعي الطفل على سطح مريح مغطى بمنشفة ناعمة",
      "دلكي جسم الطفل بحركات دائرية لطيفة، مع التركيز على الذراعين والساقين والظهر",
      "امسحي أي زيت زائد بقماش قطني والبسي الطفل ملابس مريحة"
    ],
    tips: [
      "اختاري وقت التدليك بعد الاستحمام أو قبل النوم لتعزيز الراحة",
      "اختبري الزيت على جزء صغير من جلد الطفل أولًا للتأكد من عدم وجود حساسية"
    ],
    imageUrl:zettadlekelatfal,
    region: "المغرب",
    createdAt: "2025-05-07",
    viewCount: 92,
    featured: true
  },
  {
    id: "festivals-1",
    title: "تحضير الحناء للعيد",
    summary: "طريقة تحضير الحناء لتزيين الأيدي في المناسبات والأعياد",
    category: "festivals",
    content:
      "الحناء كانت تُحضر في الخليج لتزيين الأيدي في الأعياد والمناسبات الخاصة، حيث تُعتبر رمزاً للجمال والفرح. هذه الوصفة تعتمد على مكونات طبيعية للحصول على لون غامق وثابت.",
    ingredients: [
      "100 غرام مسحوق حناء نقي",
      "1/4 كوب ماء دافئ",
      "1 ملعقة صغيرة سكر",
      "1 ملعقة كبيرة عصير ليمون",
    ],
    steps: [
      "امزجي مسحوق الحناء مع الماء الدافئ والسكر في وعاء زجاجي حتى تحصلي على قوام ناعم",
      "أضيفي عصير الليمون تدريجياً واستمري في الخلط لتعزيز اللون",
      "غطي الخليط واتركيه في مكان دافئ لمدة 6-8 ساعات ليتفاعل",
      "ضعي الخليط في مخروط بلاستيكي أو أنبوب للرسم الدقيق على اليدين",
    ],
    tips: [
      "اختبري الحناء على جزء صغير من الجلد للتأكد من عدم وجود حساسية",
      "اتركي الحناء على اليد لمدة 4 ساعات على الأقل للحصول على لون قوي",
    ],
    imageUrl:
      "https://www.arabiaweddings.com/sites/default/files/styles/max980/public/listing/2019/11/30/henna_heritage.jpg?itok=2LIKd6tP",
    region: "الخليج",
    createdAt: "2024-05-01",
    viewCount: 88,
    featured: false,
  },
  {
    id: "festivals-4",
    title: "احتفال عيد الأضحى في السعودية",
    summary: "عادات وتقاليد الاحتفال بعيد الأضحى في السعودية، بما في ذلك ذبح الأضاحي وتوزيع اللحوم.",
    category: "festivals",
    content:
      "عيد الأضحى هو مناسبة دينية يحتفل بها المسلمون في جميع أنحاء العالم، وفي السعودية يتم التركيز على أداء شعائر الحج وذبح الأضاحي.",
    ingredients: [
      "خروف أو بقرة للأضحية",
      "سكين حاد للذبح",
      "ملح وتوابل للحفظ",
    ],
    steps: [
      "اختيار الأضحية وفقًا للشروط الشرعية.",
      "ذبح الأضحية وتوزيع اللحوم على الأهل والفقراء.",
      "إعداد وجبات لحم الأضحية التقليدية.",
    ],
    tips: [
      "التأكد من نظافة الأدوات المستخدمة في الذبح.",
      "توزيع اللحوم بشكل متساوٍ بين الأهل والمحتاجين.",
    ],
    imageUrl:
      "https://portalcdn.spa.gov.sa/backend/original/202205/6d7898a6ce3b92895e19c5456b08b412.jpeg",
    region: "السعودية",
    createdAt: "2024-05-01",
    viewCount: 75,
    featured: false
  },
  {
    id: "festivals-3",
    title: "احتفال القرقيعان في الخليج",
    summary: "عادات وتقاليد احتفال القرقيعان في دول الخليج وتوزيع الحلوى على الأطفال.",
    category: "festivals",
    content:
      "القرقيعان هو احتفال تقليدي خليجي يُقام في منتصف رمضان، حيث يتجول الأطفال بين المنازل لجمع الحلوى والمكسرات مرتدين أزياء تقليدية.",
    ingredients: [
      "مكسرات مشكلة",
      "حلوى متنوعة",
      "أكياس ملونة لتوزيع الحلوى",
    ],
    steps: [
      "تحضير أكياس الحلوى لتوزيعها على الأطفال.",
      "ارتداء الأطفال للأزياء التقليدية وتجولهم بين المنازل.",
      "تقديم الحلوى والتهاني للأطفال الزائرين.",
    ],
    tips: [
      "توزيع الحلوى المغلفة لضمان النظافة.",
      "تنظيم المسارات للأطفال لضمان سلامتهم.",
    ],
    imageUrl:
      "https://img.youm7.com/ArticleImgs/2019/5/8/210115-%D8%A7%D8%B3%D8%AA%D8%B9%D8%AF%D8%A7%D8%AF-%D8%AE%D8%A7%D8%B5-%D9%84%D9%84%D8%A7%D8%AD%D8%AA%D9%81%D8%A7%D9%84-%D8%A8%D8%A7%D9%84%D9%82%D8%B1%D9%82%D9%8A%D8%B9%D8%A7%D9%86.jpg",
    region: "الخليج",
    createdAt: "2024-05-01",
    viewCount: 45,
    featured: false
  },
  {
    id: "natural_dyes-1",
    title: "صبغ القماش بالكركم",
    summary: "طريقة صبغ الأقمشة بالكركم للحصول على لون أصفر طبيعي",
    category: "natural_dyes",
    content:
      "الكركم يُستخدم في مصر كصبغة طبيعية تمنح الأقمشة لوناً أصفر مشرقاً. هذه الطريقة صديقة للبيئة وسهلة التطبيق في المنزل، وتعتمد على مكونات بسيطة متوفرة.",
    ingredients: [
      "2 ملعقة كبيرة كركم مطحون",
      "1 لتر ماء",
      "قماش قطني أبيض أو فاتح اللون",
    ],
    steps: [
      "اغلي الكركم في الماء في قدر كبير لمدة 10 دقائق لاستخلاص اللون",
      "اغمري القماش القطني في المزيج بعد نقعه بالماء البارد مسبقاً",
      "اتركي القماش في القدر لمدة ساعة مع التحريك من حين لآخر",
      "اشطفي القماش بالماء البارد لتثبيت اللون واتركيه يجف في الظل",
    ],
    tips: [
      "أضيفي ملعقة خل للماء لتثبيت اللون بشكل أفضل",
      "اغسلي القماش المصبوغ بشكل منفصل في المرات الأولى",
    ],
    imageUrl: sebagatelqomashbelkorkom,
    region: "مصر",
    createdAt: "2024-05-02",
    viewCount: 77,
    featured: false,
  },
  {
    id: "natural_dyes-2",
    title: "صبغ القماش بالرمان",
    summary: "طريقة صبغ الأقمشة بقشور الرمان للحصول على لون بني طبيعي.",
    category: "natural_dyes",
    content:
      "قشور الرمان تستخدم في مصر كصبغة طبيعية تمنح الأقمشة لوناً بنياً دافئاً. هذه الطريقة تعتمد على مكونات بسيطة وسهلة التطبيق في المنزل.",
    ingredients: [
      "قشور رمان مجففة",
      "1 لتر ماء",
      "قماش قطني أبيض أو فاتح اللون",
    ],
    steps: [
      "اغلي قشور الرمان في الماء لمدة 20 دقيقة لاستخلاص اللون.",
      "اغمري القماش في المزيج بعد نقعه بالماء البارد مسبقاً.",
      "اتركي القماش في القدر لمدة ساعتين مع التحريك من حين لآخر.",
      "اشطفي القماش بالماء البارد واتركيه يجف في الظل.",
    ],
    tips: [
      "أضيفي ملعقة خل لتثبيت اللون بشكل أفضل.",
      "استخدمي قشور طازجة للحصول على لون غني.",
    ],
    imageUrl:sabghelqomashbelroman,
    region: "مصر",
    createdAt: "2024-05-02",
    viewCount: 55,
    featured: false
  },
  {
    id: "natural_dyes-3",
    title: "صبغ القماش بالنعناع",
    summary: "طريقة صبغ الأقمشة بأوراق النعناع للحصول على لون أخضر طبيعي.",
    category: "natural_dyes",
    content:
      "أوراق النعناع تستخدم كصبغة طبيعية تمنح الأقمشة لوناً أخضر منعش. هذه الطريقة تعتمد على مكونات طبيعية وتطبيق سهل في المنزل.",
    ingredients: [
      "حفنة من أوراق النعناع الطازج",
      "1 لتر ماء",
      "قماش قطني أبيض أو فاتح اللون",
    ],
    steps: [
      "اغلي أوراق النعناع في الماء لمدة 15 دقيقة لاستخلاص اللون.",
      "اغمري القماش في المزيج بعد نقعه بالماء البارد مسبقاً.",
      "اتركي القماش في القدر لمدة ساعة مع التحريك من حين لآخر.",
      "اشطفي القماش بالماء البارد واتركيه يجف في الظل.",
    ],
    tips: [
      "للون أقوى، استخدمي كمية أكبر من أوراق النعناع.",
      "استخدمي خل لتثبيت اللون.",
    ],
    imageUrl:sabghelqomashbelneana,
    region: "مصر",
    createdAt: "2024-05-02",
    viewCount: 50,
    featured: false
  },
  {
    id: "storytelling-1",
    title: "رواية قصة السندباد",
    summary: "فن رواية قصص السندباد البحري لتعليم الأطفال الشجاعة والمغامرة",
    category: "storytelling",
    content:
      "قصص السندباد البحري كانت تُروى في الخليج للأطفال لتعليمهم الشجاعة وأهمية المثابرة. هذه الطريقة تعتمد على إشراك الأطفال عاطفياً من خلال سرد مشوق وتفاعلي.",
    steps: [
      "اجمعي الأطفال في مكان مريح، مثل حول مدفأة أو تحت شجرة",
      "ابدئي بسرد مغامرة السندباد بوصف الرحلات البحرية والتحديات",
      "استخدمي نبرة مشوقة مع تغيير الصوت للشخصيات لجذب الانتباه",
      "أنهي القصة بدروس مستفادة، مثل أهمية الذكاء في مواجهة الصعاب",
    ],
    tips: [
      "استخدمي إيماءات اليدين لتصوير الأحداث مثل الأمواج أو القتال",
      "شجعي الأطفال على طرح الأسئلة أو تخيل نهاية مختلفة",
    ],
    imageUrl:
      "https://bilarabiya.net/wp-content/uploads/2023/12/%D8%AD%D9%82%D9%8A%D9%82%D8%A9-%D8%A7%D8%B3%D8%B7%D9%88%D8%B1%D8%A9-%D8%B3%D9%86%D8%AF%D8%A8%D8%A7%D8%AF-2-780x400.webp",
    region: "الخليج",
    createdAt: "2024-05-03",
    viewCount: 66,
    featured: false,
  },
  {
    id: "storytelling-2",
    title: "رواية قصة علاء الدين",
    summary: "فن رواية قصة علاء الدين والمصباح السحري لتعزيز خيال الأطفال وتعليمهم الحكمة.",
    category: "storytelling",
    content:
      "قصة علاء الدين والمصباح السحري تُروى للأطفال لتعليمهم الحكمة والشجاعة. يمكن استخدام أسلوب مشوق لجذب الأطفال إلى عالم السحر والمغامرات.",
    steps: [
      "ابدئي بسرد قصة علاء الدين الذي يعيش في مدينة بغداد.",
      "احكي عن اكتشافه للمصباح السحري ولقائه بالجني.",
      "أضيفي لمسات درامية أثناء الحديث عن المغامرات.",
      "اختتمي القصة بتوضيح درس أهمية الذكاء والأمانة.",
    ],
    tips: [
      "استخدمي إضاءة خافتة لإضفاء جو من الغموض.",
      "اشركي الأطفال في تقمص أدوار الشخصيات إن أمكن.",
    ],
    imageUrl: "https://www.noor-book.com/publice/covers_cache_webp/13/1/c/b/1234191b5a1cb551cc29f61d58a62661.png.webp",
    region: "الشام",
    createdAt: "2024-05-03",
    viewCount: 60,
    featured: false
  },
  {
    id: "storytelling-3",
    title: "رواية قصة أبو زيد الهلالي",
    summary: "فن رواية قصة أبو زيد الهلالي لتعريف الأطفال بالشجاعة والمروءة في التراث العربي.",
    category: "storytelling",
    content:
      "قصة أبو زيد الهلالي تُعد من أشهر القصص الشعبية في التراث العربي، وتُروى للأطفال لتعزيز قيم الشجاعة والمروءة.",
    steps: [
      "ابدئي بتعريف الأطفال بأبو زيد الهلالي وشخصيته.",
      "احكي عن مغامراته في الصحراء ومعاركه البطولية.",
      "استخدمي صوت قوي وواضح لتصوير المشاهد الحماسية.",
      "اختتمي القصة بتوضيح أهمية الشجاعة والمروءة.",
    ],
    tips: [
      "استخدمي أدوات بسيطة لتوضيح مشاهد القتال مثل السيوف الورقية.",
      "شجعي الأطفال على تقليد شخصية أبو زيد لإضفاء المرح.",
    ],
    imageUrl: "https://www.independentarabia.com/sites/default/files/styles/1368x911/public/article/mainimage/2021/05/05/359826-604680515.jpg",
    region: "الجزيرة العربية",
    createdAt: "2024-05-03",
    viewCount: 58,
    featured: false
  },  
  {
    id: "home_decor-1",
    title: "تزيين الجدران بالمكرمية",
    summary: "صناعة ديكور مكرمية يدوي لتزيين الجدران بأسلوب تقليدي",
    category: "home_decor",
    content:
      "المكرمية تضيف لمسة تقليدية دافئة للمنزل في مصر، وهي حرفة تعتمد على عقد الحبال لتشكيل تصاميم فنية. هذه الطريقة مثالية لإضافة لمسة تراثية للديكور الداخلي.",
    ingredients: ["10 أمتار حبال قطنية (4-6 مم)", "عصا خشبية أو حلقة معدنية"],
    steps: [
      "اربطي الحبال على العصا الخشبية باستخدام عقدة رأس الطائر",
      "استخدمي عقد المكرمية الأساسية مثل العقدة المربعة أو الحلزونية",
      "شكلي تصميماً مزخرفاً بتكرار العقد بنمط متناسق",
      "علقي القطعة على الجدار باستخدام خيط قوي أو مسمار",
    ],
    tips: [
      "جربي استخدام حبال ملونة لإضافة لمسة عصرية",
      "ابدئي بتصميم صغير إذا كنتِ مبتدئة",
    ],
    imageUrl: "https://static.sayidaty.net/2024-01/318882.jpg",
    region: "مصر",
    createdAt: "2024-05-04",
    viewCount: 55,
    featured: false,
  },
  {
    id: "home_decor-3",
    title: "تزيين المنزل بالزخارف الخشبية",
    summary: "استخدام الزخارف الخشبية لإضفاء طابع تقليدي على الديكور الداخلي.",
    category: "home_decor",
    content:
      "الزخارف الخشبية تعكس لمسة فنية وجمالية للمنزل، وتعد من أبرز العناصر في الديكور التقليدي. يمكن استخدامها في الأبواب، النوافذ، أو كقطع ديكور مستقلة.",
    ingredients: ["خشب مضغوط أو خشب طبيعي", "أدوات حفر أو نقش", "طلاء خشب"],
    steps: [
      "اختاري تصميم الزخرفة التي ترغب في إضافتها، مثل الزخارف الإسلامية أو النباتية.",
      "استخدمي أدوات الحفر لعمل نقوش دقيقة على سطح الخشب.",
      "أضيفي طلاء خشب لزيادة الجمال وحماية الزخارف.",
      "ثبتي القطع الزخرفية في المكان المطلوب باستخدام مسامير أو لاصق قوي.",
    ],
    tips: [
      "جربي دمج الخشب مع ألوان دافئة لتظهر الزخارف بشكل أكثر وضوحًا.",
      "استخدمي الزخارف في الأماكن البارزة مثل الحوائط أو الأثاث لزيادة التأثير.",
    ],
    imageUrl: "https://i.ytimg.com/vi/25Ig3DlaWWw/maxresdefault.jpg",
    region: "مصر",
    createdAt: "2024-05-04",
    viewCount: 60,
    featured: false
  },
  {
    id: "home_decor-4",
    title: "تزيين المنزل بالأواني الفخارية",
    summary: "استخدام الأواني الفخارية كقطع ديكور تقليدية لجعل المنزل أكثر دفئًا.",
    category: "home_decor",
    content:
      "الأواني الفخارية تعتبر من العناصر الأساسية في الديكور التقليدي، حيث تضيف لمسة من الأناقة والدفء للمنزل. يمكن استخدام الأواني الفخارية في الزراعة أو كأوعية للزينة.",
    ingredients: ["أواني فخارية متنوعة الأشكال", "أزهار طبيعية أو صناعية"],
    steps: [
      "اختاري أواني فخارية بأشكال وتصاميم تقليدية.",
      "املئي الأواني بالأزهار الطبيعية أو الصناعية لتنسيقها بشكل جميل.",
      "ضعي الأواني في أماكن ظاهرة مثل الطاولات أو النوافذ.",
      "يمكنك إضافة لمسة إضافية من الألوان عبر طلاء الأواني أو استخدام الألوان الطبيعية.",
    ],
    tips: [
      "استخدمي الأواني الفخارية ذات الألوان الترابية لتكمل جو المنزل التقليدي.",
      "قومي بتنسيق الأواني مع أقمشة منزلية مزخرفة لتعزيز النمط التقليدي.",
    ],
    imageUrl: "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1100,h_619,c_fill,q_auto,g_center/cnnarabic/2015/09/10/images/104523.jpg",
    region: "الخليج",
    createdAt: "2024-05-04",
    viewCount: 58,
    featured: false
  },
  
  
  {
    id: "spices-1",
    title: "استخدام الزعفران في الطبخ",
    summary: "طريقة إضافة الزعفران للأطباق الخليجية لنكهة مميزة",
    category: "spices",
    content:
      "الزعفران يُستخدم في الخليج لإضافة نكهة غنية ولون ذهبي للأطباق مثل الرز والمرق. هذه الطريقة تعتمد على نقع الزعفران لاستخلاص أفضل نكهة.",
    ingredients: ["0.1 غرام خيوط زعفران", "1/4 كوب ماء دافئ"],
    steps: [
      "انقعي خيوط الزعفران في الماء الدافئ في وعاء صغير",
      "اتركيه لمدة 10-15 دقيقة حتى يتحول الماء إلى لون برتقالي غامق",
      "أضيفي المزيج (الماء والزعفران) إلى الطبق أثناء الطهي في المرحلة الأخيرة",
    ],
    tips: [
      "استخدمي زعفران عالي الجودة للحصول على نكهة أقوى",
      "لا تفرطي في الكمية لأن الزعفران قوي النكهة",
    ],
    imageUrl:
      "https://media.gemini.media/img/large/2021/7/16/2021_7_16_20_9_46_648.jpg",
    region: "الخليج",
    createdAt: "2024-05-05",
    viewCount: 44,
    featured: false,
  },
  {
    id: "spices-10",
    title: "استخدام الشمر في الطبخ",
    summary: "طريقة استخدام الشمر لإضافة نكهة فريدة ولذيذة للأطباق.",
    category: "spices",
    content:
      "الشمر هو توابل مميزة تُستخدم في المطبخ العربي والخليجي لإضفاء نكهة حلوة وعطرية على الأطعمة.",
    ingredients: ["1 ملعقة صغيرة شمر مطحون", "1/4 كوب ماء"],
    steps: [
      "استخدمي الشمر في الحلويات مثل الكعك أو البسكويت.",
      "أضيفي الشمر إلى الأطباق الحارة مثل اليخنات أو الطواجن.",
      "يمكنك إضافة الشمر إلى المشروبات للحصول على طعم فريد.",
    ],
    tips: [
      "استخدمي الشمر الطازج للحصول على نكهة أقوى.",
      "يمكنك مزج الشمر مع الينسون لزيادة نكهته العطرية.",
    ],
    imageUrl: "https://media.gemini.media/img/large/2025/2/27/2025_2_27_16_50_22_551.webp",
    region: "المشرق العربي",
    createdAt: "2024-05-07",
    viewCount: 50,
    featured: false
  },
  {
    id: "spices-3",
    title: "استخدام الهيل في الحلويات",
    summary: "طريقة إضافة الهيل إلى الحلويات التقليدية للحصول على نكهة مميزة وعطرة.",
    category: "spices",
    content:
      "الهيل هو أحد التوابل العطرية التي تُستخدم بكثرة في الحلويات الشرقية مثل البقلاوة والكنافة. يضيف الهيل لمسة عطرية خاصة ويُكمل النكهات الأخرى في الحلويات.",
    ingredients: ["3 حبات هيل", "1/2 كوب سكر"],
    steps: [
      "افتحي حبات الهيل وأضيفي الحبوب إلى الحلوى أثناء تحضيرها.",
      "يمكنك طحن الهيل واستخدامه في إضافات كالشربات أو في خليط العجينة.",
      "استخدمي الهيل بشكل معتدل ليمنح الحلوى نكهة عطرية دون أن يطغى عليها.",
    ],
    tips: [
      "الهيل يمكن أن يُستخدم أيضًا في القهوة لتعزيز نكهتها.",
      "يمكنك تجنب طحن الهيل تمامًا إذا كنت تفضل نكهته الخفيفة.",
    ],
    imageUrl: "https://kitchen.sayidaty.net/uploads/small/78/78124e16e378e2466ef07ea2716b7e29_w750_h500.jpg",
    region: "الخليج",
    createdAt: "2024-05-06",
    viewCount: 48,
    featured: false
  },
  {
    id: "weaving-1",
    title: "نسج سجادة صغيرة",
    summary: "طريقة نسج سجادة يدوية باستخدام النول التقليدي",
    category: "weaving",
    content:
      "النسج التقليدي كان جزءاً أساسياً من تراث البدو في الخليج، حيث كانت النساء يصنعن السجاد للاستخدام المنزلي أو للبيع. هذه الطريقة تعتمد على أدوات بسيطة لصنع سجادة صغيرة.",
    ingredients: ["1 كيلو خيوط صوف ملونة", "نول صغير أو إطار خشبي"],
    steps: [
      "جهزي النول بتمرير خيوط الطول (السدى) بإحكام",
      "ابدئي النسج بتمرير خيوط العرض (اللحمة) بأنماط بسيطة",
      "شدي الخيوط جيداً بعد كل صف للحفاظ على الكثافة",
      "أنهي السجادة بربط الأطراف بعقد متينة وتقليم الفائض",
    ],
    tips: [
      "استخدمي ألوان متناسقة لإضفاء طابع تراثي",
      "مارسي على نول صغير قبل الانتقال لتصاميم معقدة",
    ],
    imageUrl: "https://hoveida.co/blog/storage/carpet/73625435.webp",
    region: "الخليج",
    createdAt: "2024-05-06",
    viewCount: 33,
    featured: false,
  },
  {
    id: "weaving-3",
    title: "نسج بطانية صغيرة",
    summary: "طريقة نسج بطانية يدوية باستخدام الخيوط القطنية.",
    category: "weaving",
    content:
      "النسج اليدوي للبطانيات هو فن قديم يعتمد على الخيوط القطنية أو الصوفية لصنع قطع منزلية دافئة. يمكن تحضير البطانية باستخدام نول تقليدي.",
    ingredients: ["خيوط قطنية أو صوفية", "نول تقليدي"],
    steps: [
      "ابدئي بتثبيت الخيوط على النول بشكل محكم.",
      "استخدمي خيوط العرض لنسج البقع في كل صف.",
      "يمكنك اختيار نمط مميز مثل الزخارف أو الأشكال الهندسية.",
      "عندما تكتمل البطانية، تأكدي من تثبيت الأطراف بشكل جيد.",
    ],
    tips: [
      "يمكنك استخدام الألوان المختلفة لتصميم بطانية متعددة الألوان.",
      "تأكد من شد الخيوط أثناء النسج لتحصل على نتائج متساوية.",
    ],
    imageUrl: "https://aradbranding.com/ar/wp-content/uploads/2022/09/battaniye-birlestirme-teknikleri-9-1200x800-1.jpg",
    region: "المغرب العربي",
    createdAt: "2024-05-06",
    viewCount: 35,
    featured: false
  },
  {
    id: "weaving-5",
    title: "نسج غطاء سرير",
    summary: "طريقة نسج غطاء سرير يدوي باستخدام نول تقليدي.",
    category: "weaving",
    content:
      "يعتبر نسج الأغطية من الأنشطة التقليدية التي تمارس في العديد من الثقافات. يمكن للغطاء المنسوج يدوياً أن يكون إضافة رائعة للديكور الداخلي.",
    ingredients: ["خيوط قطنية أو صوفية", "نول تقليدي"],
    steps: [
      "ابدئي بتمرير الخيوط الطولية على النول.",
      "استخدمي خيوط العرض لتشكيل التصميم الذي تريدينه.",
      "يمكنك إضافة ألوان متعددة للحصول على تصميم جذاب.",
      "عند الانتهاء، تأكدي من تشديد الأطراف للحفاظ على الشكل المتناسق.",
    ],
    tips: [
      "يمكنك إضافة تطريز يدوي على الغطاء لزيادة جماله.",
      "استخدمي خيوط صوفية لإعطاء الغطاء نعومة إضافية.",
    ],
    imageUrl: "https://m.media-amazon.com/images/I/51S8ifhl6gS.jpg",
    region: "الشرق الأوسط",
    createdAt: "2024-05-06",
    viewCount: 30,
    featured: false
  },
  
  
  {
    id: "heritage-1",
    title: "عادات القهوة في المجالس",
    summary: "تقاليد تقديم القهوة في المجالس العربية الخليجية",
    category: "heritage",
    content:
      "تقديم القهوة في المجالس العربية في الخليج كان عادة أساسية تعكس الكرم والضيافة. القهوة تُقدم مع التمر لإضافة لمسة من التوازن بين المر والحلو.",
    ingredients: [
      "100 غرام قهوة عربية محمصة",
      "1 ملعقة صغيرة هيل مطحون",
      "1 لتر ماء",
      "تمر",
    ],
    steps: [
      "حضري القهوة بغلي الماء مع القهوة المطحونة والهيل لمدة 10 دقائق",
      "قدميها في دلة تقليدية للحفاظ على الحرارة والنكهة",
      "اسكبيها في فناجين صغيرة بكميات قليلة لكل ضيف",
      "قدمي التمر على طبق جانبي كمرافق تقليدي",
    ],
    tips: [
      "قدمي القهوة بيدك اليمنى كعلامة احترام",
      "أضيفي القليل من الزعفران لنكهة إضافية إذا رغبتِ",
    ],
    imageUrl:
      "https://www.emaratalyoum.com/polopoly_fs/1.1284767.1576441651!/image/image.jpg",
    region: "الخليج",
    createdAt: "2024-05-07",
    viewCount: 22,
    featured: false,
  },
  {
    id: "heritage-9",
    title: "تقاليد حلاقة الأطفال لأول مرة في المغرب",
    summary: "الاحتفالات والتقاليد المتعلقة بحلاقة الطفل لأول مرة.",
    category: "heritage",
    content:
      "في المغرب، حلاقة شعر الطفل لأول مرة تُعرف بـ\"العقيقة\"، وهي مناسبة يحتفل بها الأهل مع الأقارب بتوزيع الحلوى وذبح الأضحية.",
    ingredients: [
      "مقص حلاقة",
      "صينية حلوى تقليدية (كعب الغزال، الشباكية)",
      "ذبيحة (خروف أو ماعز)"
    ],
    steps: [
      "يتم قص شعر الطفل في جو احتفالي أمام الأهل والأقارب.",
      "توزع الحلوى على الضيوف احتفالًا بالمناسبة.",
      "تُقدم الأضحية كرمز للتقرب إلى الله وشكرًا على نعمة الطفل.",
    ],
    tips: [
      "اختاري حلواني معروف لتقديم حلوى لذيذة.",
      "تأكدي من أن الحلاق يستخدم أدوات نظيفة وآمنة للطفل.",
    ],
    imageUrl:tqaledhelakteltefl,
    region: "المغرب",
    createdAt: "2024-05-07",
    viewCount: 38,
    featured: false
  },
  
  {
    id: "heritage-5",
    title: "حكايات الجدات في الليالي الشتوية",
    summary: "جلسات الحكايات الشعبية التي ترويها الجدات للأطفال.",
    category: "heritage",
    content:
      "في الليالي الشتوية، تجتمع العائلات حول المدفأة للاستماع إلى حكايات الجدات التي تحمل قيمًا وحكمًا أخلاقية.",
    ingredients: [
      "مكان دافئ للجلوس",
      "مدفأة أو موقد نار",
      "مشروبات ساخنة"
    ],
    steps: [
      "اجمعي الأطفال حول الجدّة.",
      "ابدئي برواية حكاية شيقة تحمل مغزى أو حكمة.",
      "اختتمي الحكاية بتوضيح الفكرة للأطفال.",
    ],
    tips: [
      "استخدمي أصوات مختلفة للشخصيات لإضفاء جو من التشويق.",
      "شجعي الأطفال على طرح أسئلة بعد الحكاية.",
    ],
    imageUrl:hekayatelshetallgeda,
    region: "مصر",
    createdAt: "2024-05-07",
    viewCount: 35,
    featured: false
  },

  
  {
    id: "music-1",
    title: "العزف على العود",
    summary: "نصائح لتعلم العزف على العود كجزء من التراث العربي",
    category: "music",
    content:
      "العود آلة موسيقية تقليدية في التراث العربي، تُستخدم في بلاد الشام لعزف الألحان الكلاسيكية. تعلم العود يتطلب الصبر والممارسة لاكتساب مهارة العزف.",
    steps: [
      "اضبطي أوتار العود للحصول على النغمات الصحيحة (دو، ري، مي، إلخ)",
      "تعلمي النغمات الأساسية باستخدام أصابعك على الأوتار",
      "مارسي ألحاناً بسيطة مثل الأغاني الشعبية لتطوير المهارة",
      "استمعي لموسيقى تقليدية لفهم الإيقاعات والمقامات العربية",
    ],
    tips: [
      "استخدمي ريشة خفيفة للعزف للحصول على صوت نقي",
      "خصصي وقتاً يومياً للممارسة لتحسين الأداء",
    ],
    imageUrl:
      "https://cdn1-m.alittihad.ae/store/archive/image/2020/11/26/14a7b06b-635a-407f-9b8f-480918f4ebac.jpg",
    region: "بلاد الشام",
    createdAt: "2024-05-08",
    viewCount: 11,
    featured: false,
  },
  {
    id: "music-6",
    title: "تعلم العزف على الكمانجة",
    summary: "إتقان فن العزف على الكمانجة كجزء من التراث الموسيقي العربي.",
    category: "music",
    content:
      "الكمانجة آلة وترية قديمة تُستخدم في الموسيقى العربية الكلاسيكية، وتتميز بصوتها العاطفي والعميق. تعلم الكمانجة يتطلب الصبر والممارسة لضبط الأصوات الصحيحة.",
    steps: [
      "اضبطي أوتار الكمانجة للحصول على النغمات الصحيحة (دو، ري، مي، فا).",
      "تعلمي وضعية اليد الصحيحة للعزف على الأوتار باستخدام القوس.",
      "ابدئي بالتدرب على النغمات الأساسية والمقامات الشرقية مثل الرست والنهوند.",
      "استمعي لعازفين محترفين لفهم أساليب العزف والتقنيات.",
    ],
    tips: [
      "استخدمي قوس خفيف ومتين للحصول على صوت نقي.",
      "خصصي وقتاً يومياً للممارسة لتحسين مهاراتك.",
    ],
    imageUrl: "https://i0.wp.com/arabaffairsonline.com/wp-content/uploads/2021/09/%D8%A7%D9%84%D9%83%D9%85%D8%A7%D9%86-4.jpg?fit=600%2C312&ssl=1",
    region: "بلاد الشام ومصر",
    createdAt: "2024-05-08",
    viewCount: 13,
    featured: false
  },
  
  {
    id: "music-2",
    title: "إتقان العزف على الربابة",
    summary: "تعلم العزف على الربابة كجزء من التراث البدوي.",
    category: "music",
    content:
      "الربابة آلة موسيقية قديمة كانت تُستخدم في الصحراء العربية لرواية القصص والمواويل. تتكون من وتر واحد يتم العزف عليه باستخدام قوس خشبي.",
    steps: [
      "ضبط وتر الربابة للحصول على الصوت المطلوب.",
      "تعلم طريقة إمساك القوس والتحكم به لتحريك الوتر.",
      "ابدأ بالعزف على أنغام بسيطة وتدرج في الصعوبة.",
      "استمع لمواويل قديمة لفهم الإيقاعات.",
    ],
    tips: [
      "استخدم قوس مرن لتسهيل العزف.",
      "حافظ على الربابة في مكان جاف للحفاظ على جودة الصوت.",
    ],
    imageUrl: "https://pub-a0fe29ed512a454eb858af73b205c8eb.r2.dev/storage/thumbs/59/thumb20.jpg",
    region: "الجزيرة العربية",
    createdAt: "2024-05-08",
    viewCount: 10,
    featured: false
  },
  {
    id: "music-5",
    title: "تعلم العزف على الدف",
    summary: "استخدام الدف في الموسيقى الشعبية كإيقاع تقليدي.",
    category: "music",
    content:
      "الدف آلة إيقاعية قديمة تُستخدم في الموسيقى الشعبية لإضافة إيقاع مميز، وهو جزء من التراث الموسيقي في العديد من الدول العربية.",
    steps: [
      "تعلم مسك الدف باليد بشكل صحيح.",
      "ابدأ بالتدرب على إيقاعات بسيطة مثل \"دوم تك\".",
      "تدرج في تعلم الإيقاعات المعقدة مثل المقسوم والبلدي.",
      "استخدم حركات اليد للتحكم في شدة الصوت.",
    ],
    tips: [
      "اختر دفًا بجودة عالية للحصول على صوت نقي.",
      "حافظ على إيقاع ثابت عند العزف.",
    ],
    imageUrl: "https://kasnazan.com/wp-content/uploads/2022/11/hqdefault.jpg",
    region: "المغرب العربي ومصر",
    createdAt: "2024-05-08",
    viewCount: 14,
    featured: false
  },
  {
    id: "music-4",
    title: "عزف القانون في المجالس العربية",
    summary: "تعلّم فن العزف على آلة القانون التقليدية.",
    category: "music",
    content:
      "القانون آلة وترية تقليدية في التراث العربي، تتميز بأوتارها المتعددة وإمكانية عزف المقامات الشرقية بدقة. تُستخدم في المجالس والمناسبات الثقافية.",
    steps: [
      "اضبط أوتار القانون باستخدام مفتاح ضبط الأوتار.",
      "تعلم وضعية اليد الصحيحة للعزف بالأصابع أو باستخدام الريشة.",
      "ابدأ بالتدرب على مقامات بسيطة مثل الرست والبيات.",
      "استمع لعازفين محترفين لتطوير مهارتك.",
    ],
    tips: [
      "استخدم ريشة خفيفة للحصول على صوت نقي.",
      "احرص على تنظيف الأوتار بانتظام للحفاظ على جودتها.",
    ],
    imageUrl: "https://cdn1-m.alittihad.ae/store/archive/image/2020/11/5/bc8c0c18-f0a5-46ed-a913-7910b36386e3.jpg",
    region: "بلاد الشام",
    createdAt: "2024-05-08",
    viewCount: 15,
    featured: false
  },
  
  
  {
    id: "travel-1",
    title: "تحضير حقيبة السفر التقليدية",
    summary: "نصائح لتجهيز حقيبة السفر بأسلوب الجدات المصريات",
    category: "travel",
    content:
      "الجدات في مصر كن يحضرن حقائب السفر بعناية، مع التركيز على الأغراض الضرورية والحفاظ على رائحة منعشة. هذه الطريقة تجمع بين العملية والتراث.",
    ingredients: [
      "ملابس خفيفة وقطنية",
      "أعشاب عطرية (مثل النعناع أو اللافندر)",
      "حقيبة قماشية",
    ],
    steps: [
      "اختاري ملابس خفيفة تناسب الطقس وسهلة الطي",
      "ضعي الأغراض الضرورية فقط مثل الملابس الداخلية والإكسسوارات",
      "أضيفي كيساً صغيراً من الأعشاب العطرية للحفاظ على رائحة منعشة",
      "لفي الأغراض بإحكام لتوفير المساحة ووضعها في الحقيبة",
    ],
    tips: [
      "استخدمي أكياس قماش صغيرة لتنظيم الأغراض داخل الحقيبة",
      "ضعي الملابس الثقيلة في الأسفل لتسهيل الحمل",
    ],
    imageUrl:
      "https://static.sayidaty.net/2022-10/180560.jpeg",
    region: "مصر",
    createdAt: "2024-05-09",
    viewCount: 10,
    featured: false,
  },
  {
    id: "travel-2",
    title: "اختيار الملابس المناسبة للسفر",
    summary: "نصائح لاختيار الملابس الملائمة للسفر بناءً على تقاليد الجدات المصريات.",
    category: "travel",
    content:
      "الجدات في مصر كن يختارن الملابس العملية والمريحة للسفر، مع مراعاة الطقس وتنوع الأنشطة. تعتمد هذه الطريقة على التنظيم وتجنب الحشو الزائد.",
    ingredients: [
      "ملابس قطنية خفيفة للصيف",
      "ملابس صوفية أو قطنية ثقيلة للشتاء",
      "إكسسوارات بسيطة وسهلة التخزين"
    ],
    steps: [
      "حددي الملابس بناءً على الطقس المتوقع ومدة الرحلة.",
      "تجنبي حمل ملابس غير ضرورية لتوفير المساحة.",
      "احرصي على اختيار ملابس متعددة الاستخدامات يمكن تنسيقها معاً."
    ],
    tips: [
      "لفي الملابس بدلاً من طيها لتوفير مساحة في الحقيبة.",
      "ضعي الملابس الثقيلة في الأسفل والخفيفة في الأعلى."
    ],
    imageUrl: "https://static.sayidaty.net/styles/900_scale/public/2021-10/13517.jpeg.webp",
    region: "مصر",
    createdAt: "2024-05-09",
    viewCount: 12,
    featured: false
  },
  {
    id: "travel-5",
    title: "استخدام الأعشاب العطرية في الحقيبة",
    summary: "إضافة رائحة منعشة لحقيبة السفر باستخدام الأعشاب العطرية.",
    category: "travel",
    content:
      "الجدات كن يضعن أكياساً صغيرة من الأعشاب العطرية مثل اللافندر والنعناع في الحقيبة، للحفاظ على رائحة منعشة للأغراض.",
    ingredients: [
      "أعشاب عطرية مجففة (لافندر، نعناع)",
      "أكياس قماش صغيرة"
    ],
    steps: [
      "ضعي الأعشاب العطرية في الأكياس القماشية.",
      "وزعي الأكياس في أماكن مختلفة داخل الحقيبة.",
      "استبدلي الأعشاب بانتظام للحفاظ على الرائحة."
    ],
    tips: [
      "يمكنك استخدام زيوت عطرية مع الأعشاب لتعزيز الرائحة.",
      "احرصي على تجنب الأعشاب التي قد تسبب حساسية."
    ],
    imageUrl: "https://orchidfulifestyle.com/wp-content/uploads/2019/01/%D8%A7%D9%84%D8%B4%D8%A8%D8%AA.jpg",
    region: "مصر",
    createdAt: "2024-05-09",
    viewCount: 10,
    featured: false
  },
  {
    id: "travel-7",
    title: "تجهيز أدوات النظافة للسفر",
    summary: "نصائح لتحضير أدوات النظافة بشكل منظم للسفر.",
    category: "travel",
    content:
      "الجدات كن يحضرن أدوات النظافة في حقيبة صغيرة منفصلة للحفاظ على النظافة أثناء السفر.",
    ingredients: [
      "فرشاة أسنان ومعجون",
      "مناديل معطرة",
      "صابون صغير",
      "مشط"
    ],
    steps: [
      "ضعي أدوات النظافة في حقيبة صغيرة منفصلة.",
      "تأكدي من أن الأدوات مغلقة بشكل جيد لتجنب التسرب.",
      "احتفظي بها في مكان يسهل الوصول إليه في الحقيبة."
    ],
    tips: [
      "استخدمي علب صغيرة للسائل لتوفير المساحة.",
      "احرصي على اختيار منتجات خالية من العطور إذا كنتِ تعانين من حساسية."
    ],
    imageUrl: "https://static1.michael84.co.uk/wp-content/uploads/diy-mens-grooming-kit-michael84.jpg",
    region: "مصر",
    createdAt: "2024-05-09",
    viewCount: 11,
    featured: false
  },
  {
    id: "travel-6",
    title: "اختيار الحذاء المناسب للسفر",
    summary: "نصائح لاختيار الأحذية المريحة للسفر وفقاً لتجارب الجدات.",
    category: "travel",
    content:
      "الجدات كن ينصحن بارتداء أحذية مريحة وخفيفة للسفر، لتجنب التعب وآلام القدمين أثناء التنقل.",
    ingredients: [
      "حذاء مريح (رياضي أو خفيف)",
      "جوارب قطنية"
    ],
    steps: [
      "اختاري حذاءً مريحاً يمكن ارتداؤه طوال اليوم.",
      "تأكدي من أن الحذاء مناسب للطقس (مغلق للشتاء ومفتوح للصيف).",
      "احملي زوجاً إضافياً من الجوارب النظيفة."
    ],
    tips: [
      "جربي الحذاء قبل السفر لتتأكدي من راحته.",
      "ضعي الحذاء في كيس منفصل داخل الحقيبة."
    ],
    imageUrl: "https://www.traveldiv.com/wp-content/uploads/2016/06/stm519f7063197c920130524.jpg",
    region: "مصر",
    createdAt: "2024-05-09",
    viewCount: 14,
    featured: false
  },
  
  
  
  
  {
    id: "pottery-1",
    title: "صناعة إناء فخاري",
    summary: "طريقة تشكيل إناء فخاري يدوي باستخدام تقنيات تقليدية",
    category: "pottery",
    content:
      "صناعة الفخار كانت مهارة شائعة في القرى المصرية، حيث كانت تُستخدم لصنع الأواني المنزلية. هذه الطريقة تعتمد على أدوات بسيطة لتشكيل إناء عملي وجميل.",
    ingredients: ["2 كيلو طين فخاري", "ماء", "عجلة فخار أو سطح مستوٍ"],
    steps: [
      "اعجني الطين بالماء حتى يصبح مرناً وخالياً من الفقاعات",
      "شكلي الإناء على العجلة باستخدام يديك لتشكيل القاعدة والجوانب",
      "اتركي الإناء يجف في مكان جاف لمدة يومين",
      "احرقي الإناء في فرن الفخار عند درجة حرارة 900 مئوية لتثبيته",
    ],
    tips: [
      "حافظي على رطوبة يديك أثناء العمل لتسهيل التشكيل",
      "ابدئي بأشكال بسيطة مثل الأوعية الصغيرة",
    ],
    imageUrl:
      "https://elhiwar.dz/wp-content/uploads/2019/12/%D8%AA%D9%81%D8%B3%D9%8A%D8%B1-%D8%B1%D8%A4%D9%8A%D8%A9-%D8%A7%D9%84%D8%B7%D8%A7%D8%AC%D9%8A%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D9%86%D8%A7.jpg",
    region: "مصر",
    createdAt: "2024-05-10",
    viewCount: 9,
    featured: false,
  },
  {
    id: "pottery-2",
    title: "تشكيل أكواب فخارية يدويًا",
    summary: "طريقة صنع أكواب فخارية تقليدية باستخدام العجلة اليدوية.",
    category: "pottery",
    content:
      "صناعة الأكواب الفخارية كانت شائعة في القرى المصرية القديمة، حيث كانت تُستخدم للشرب اليومي. هذه الطريقة تعتمد على تشكيل الطين بالعجلة بشكل دائري للحصول على كوب متناسق.",
    ingredients: [
      "1 كيلو طين فخاري",
      "ماء نظيف",
      "عجلة فخار يدوية",
      "أداة حفر زخرفية"
    ],
    steps: [
      "ابدئي بتحضير الطين بإضافة الماء تدريجياً حتى يصبح مرناً.",
      "ضعي قطعة الطين على العجلة اليدوية وثبتيها جيدًا.",
      "استخدمي يديك لتشكيل الطين إلى شكل أسطواني مفرغ ليكون جسم الكوب.",
      "اشكلي الحافة العلوية لتكون ناعمة ومتساوية.",
      "احفري نقوشاً زخرفية باستخدام الأداة للحصول على تصميم تراثي.",
      "اتركي الكوب يجف في الهواء لمدة يومين.",
      "احرقي الكوب في فرن الفخار على درجة حرارة 900-1000 مئوية لتثبيته."
    ],
    tips: [
      "استخدمي إسفنجة رطبة لتنعيم السطح الخارجي.",
      "يمكنك إضافة مقبض جانبي للكوب قبل التجفيف."
    ],
    imageUrl: "https://i.ytimg.com/vi/_-ifOuE3BM4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBuZCfaRdTNuSF_eMf8uSupRTUxrw",
    region: "مصر",
    createdAt: "2024-05-10",
    viewCount: 12,
    featured: false
  },
  {
    id: "pottery-3",
    title: "تصميم مزهرية فخارية مزخرفة",
    summary: "طريقة صنع مزهرية فخارية بزخارف يدوية مستوحاة من التراث المصري.",
    category: "pottery",
    content:
      "المزهريات الفخارية المزخرفة كانت رمزًا للجمال في البيوت المصرية القديمة. تُزين بنقوش يدوية تمثل الطبيعة والحياة اليومية.",
    ingredients: [
      "2 كيلو طين فخاري",
      "ماء",
      "عجلة فخار",
      "أداة نقش دقيقة",
      "ألوان فخار طبيعية"
    ],
    steps: [
      "ابدئي بتشكيل الطين على العجلة للحصول على شكل أسطواني طويل.",
      "استخدمي أداة النقش لرسم زخارف نباتية على السطح الخارجي.",
      "أضيفي قاعدة واسعة لتثبيت المزهرية.",
      "اتركي المزهرية تجف لمدة 3 أيام في مكان جاف.",
      "احرقيها في فرن الفخار بدرجة حرارة 950 مئوية.",
      "لوّني الزخارف باستخدام ألوان الفخار التقليدية."
    ],
    tips: [
      "استخدمي فرشاة ناعمة لتلوين الزخارف بدقة.",
      "تأكدي من أن الطين خالٍ من الفقاعات قبل التشكيل."
    ],
    imageUrl: "https://png.pngtree.com/png-vector/20230903/ourlarge/pngtree-bowls-or-vases-ancient-earthenware-illustration-png-image_9947475.png",
    region: "مصر",
    createdAt: "2024-05-10",
    viewCount: 15,
    featured: false
  },
  {
    id: "pottery-4",
    title: "صناعة أطباق فخارية للتقديم",
    summary: "خطوات صنع أطباق فخارية يدوية مناسبة لتقديم الطعام.",
    category: "pottery",
    content:
      "الأطباق الفخارية كانت تُستخدم لتقديم الطعام في المنازل المصرية التقليدية، وتُصنع باستخدام عجلة الفخار أو السطح المستوي.",
    ingredients: [
      "1.5 كيلو طين فخاري",
      "ماء",
      "عجلة فخار أو سطح مستوٍ",
      "أداة نقش للزخرفة"
    ],
    steps: [
      "افردي الطين باستخدام يديك للحصول على شكل دائري مسطح.",
      "شكلي حواف مرتفعة قليلاً لتكون جوانب الطبق.",
      "زيني السطح بنقوش يدوية باستخدام الأداة.",
      "اتركي الطبق يجف لمدة يومين.",
      "احرقي الطبق في فرن الفخار على درجة حرارة 900 مئوية."
    ],
    tips: [
      "استخدمي قالب دائري لضمان شكل متساوٍ.",
      "ضعي الأطباق فوق بعضها عند التجفيف لتجنب التشوه."
    ],
    imageUrl: "https://m.media-amazon.com/images/I/41K74un671L._AC_UF894,1000_QL80_.jpg",
    region: "مصر",
    createdAt: "2024-05-10",
    viewCount: 18,
    featured: false
  },
  {
    id: "pottery-5",
    title: "تشكيل قوارير فخارية لحفظ السوائل",
    summary: "طريقة صنع قوارير فخارية تقليدية لحفظ الماء أو الزيت.",
    category: "pottery",
    content:
      "القوارير الفخارية كانت تُستخدم في مصر القديمة لحفظ السوائل مثل الماء والزيوت، بفضل خاصية الطين في الحفاظ على درجة الحرارة.",
    ingredients: [
      "2.5 كيلو طين فخاري",
      "ماء",
      "عجلة فخار",
      "غطاء فخاري"
    ],
    steps: [
      "شكلي الطين على العجلة ليكون أسطوانيًا طويلًا.",
      "أضيفي عنق ضيق لسهولة السكب.",
      "اصنعي غطاءً مناسبًا لحجم القارورة.",
      "اتركي القارورة تجف لمدة يومين.",
      "احرقيها في فرن الفخار بدرجة حرارة 900 مئوية."
    ],
    tips: [
      "احرصي على أن يكون الغطاء محكمًا لمنع تسرب السوائل.",
      "يمكنك تزيين السطح بنقوش بسيطة."
    ],
    imageUrl: "https://cdn.salla.sa/bNlyW/wgOUv9KeB4LpsBBeOihqDF9Iz7uGnpKniOSLHitW.jpg",
    region: "مصر",
    createdAt: "2024-05-10",
    viewCount: 14,
    featured: false
  },
  {
    id: "pottery-7",
    title: "تشكيل فوانيس فخارية للزينة",
    summary: "طريقة صنع فوانيس فخارية تقليدية للزينة والإنارة.",
    category: "pottery",
    content:
      "الفوانيس الفخارية كانت تُستخدم كزينة تقليدية في مصر، وتضيف لمسة جمالية للأماكن المفتوحة.",
    ingredients: ["1.5 كيلو طين فخاري", "ماء", "أداة حفر زخرفية"],
    steps: [
      "شكلي الطين إلى شكل فانوس مفتوح.",
      "احفري نقوشًا مفرغة للسماح بمرور الضوء.",
      "اتركي الفانوس يجف لمدة يومين.",
      "احرقيه في فرن الفخار على درجة حرارة 900 مئوية."
    ],
    tips: [
      "يمكنك تلوين الفانوس بألوان فخارية بعد الحرق.",
      "استخدمي شمعة صغيرة للإضاءة."
    ],
    imageUrl:fuanesfokhar,
    region: "مصر",
    createdAt: "2024-05-10",
    viewCount: 10,
    featured: false
  },
  
  
  
  
  {
    id: "embroidery-1",
    title: "تطريز وشاح تقليدي",
    summary: "طريقة تطريز وشاح بالغرز التقليدية المستخدمة في بلاد الشام",
    category: "embroidery",
    content:
      "التطريز في بلاد الشام كان يُستخدم لتزيين الملابس والأوشحة، وهو فن يعكس الدقة والإبداع. هذه الطريقة تركز على غرزة الصليب لتصميم وشاح أنيق.",
    ingredients: ["قماش قطني أو كتاني", "خيوط تطريز ملونة", "إبرة تطريز"],
    steps: [
      "ارسمي النمط المطلوب على القماش بقلم قابل للإزالة",
      "ابدئي التطريز بغرزة الصليب لتشكيل الزخارف",
      "استخدمي ألواناً متناسقة لإبراز التصميم",
      "أنهي الوشاح بغرزة الحواف لتثبيت الأطراف ومنع التفكك",
    ],
    tips: [
      "استخدمي طوق تطريز للحفاظ على شد القماش",
      "جربي أنماطاً هندسية تقليدية للحصول على مظهر تراثي",
    ],
    imageUrl:
      "https://ardalkhair.ch/935-thickbox_default/-13.jpg",
    region: "بلاد الشام",
    createdAt: "2024-05-11",
    viewCount: 8,
    featured: false,
  },
  {
    id: "embroidery-2",
    title: "تطريز مفرش طاولة تقليدي",
    summary: "طريقة تطريز مفرش طاولة بألوان تقليدية مستوحاة من بلاد الشام.",
    category: "embroidery",
    content:
      "تطريز مفارش الطاولات كان جزءًا من التراث الشامي، حيث يُزين بألوان زاهية ونقوش هندسية تمثل الثقافة المحلية.",
    ingredients: [
      "قماش قطني أو كتاني",
      "خيوط تطريز ملونة (أحمر، أخضر، ذهبي)",
      "إبرة تطريز",
      "طوق تطريز"
    ],
    steps: [
      "ارسمي تصميمًا هندسيًا على القماش باستخدام قلم قابل للإزالة.",
      "ابدئي بالتطريز بغرزة السلسلة لتشكيل الخطوط الأساسية.",
      "املئي الأشكال الداخلية بغرزة الصليب أو غرزة الساتان.",
      "أنهي الحواف بغرزة الزجزاج لتجنب تفكك الأطراف."
    ],
    tips: [
      "استخدمي الألوان المتباينة لإبراز النقوش.",
      "ضعي الطوق لتسهيل التحكم في شد القماش."
    ],
    imageUrl: "https://i.ytimg.com/vi/Hnuezop0p9E/maxresdefault.jpg",
    region: "بلاد الشام",
    createdAt: "2024-05-11",
    viewCount: 10,
    featured: false
  },
  {
    id: "embroidery-7",
    title: "تطريز شال للصلاة",
    summary: "طريقة تطريز شال للصلاة بزخارف إسلامية بسيطة.",
    category: "embroidery",
    content:
      "شالات الصلاة المطرزة كانت جزءًا من التراث الشامي، وتُزين بنقوش بسيطة لتضفي لمسة جمالية.",
    ingredients: ["قماش شفاف", "خيوط تطريز بيضاء", "إبرة تطريز"],
    steps: [
      "ارسمي تصميمًا بسيطًا على حواف الشال.",
      "ابدئي بغرزة السلسلة لتحديد الشكل.",
      "املئي الأشكال بغرزة الساتان.",
      "أنهي الحواف بغرزة متينة لمنع التمزق."
    ],
    tips: [
      "استخدمي لونًا أبيض ليتناسب مع جو الصلاة.",
      "احرصي على أن تكون الغرز متساوية للحصول على شكل جميل."
    ],
    imageUrl: "https://cdn.salla.sa/VEwQZ/r5frvBJy8umB0iKGJz0krpOotdZ0oYUsmwlA0F0N.jpg",
    region: "بلاد الشام",
    createdAt: "2024-05-11",
    viewCount: 16,
    featured: false
  },
  
  {
    id: "embroidery-4",
    title: "تطريز ثوب تراثي بنقوش زهرية",
    summary: "طريقة تطريز ثوب تقليدي باستخدام أزهار ملونة ونقوش عربية.",
    category: "embroidery",
    content:
      "الثياب المطرزة كانت رمزًا للأناقة في بلاد الشام، وتُزين عادة بنقوش زهرية وزخارف هندسية تعكس الأصالة.",
    ingredients: [
      "قماش كتاني أو قطني",
      "خيوط تطريز متعددة الألوان",
      "إبرة تطريز",
      "طوق تطريز"
    ],
    steps: [
      "ارسمي التصميم الزهري على الصدر والأكمام.",
      "ابدئي بغرزة الصليب لملء الزهور والأوراق.",
      "استخدمي غرزة الساتان لإضفاء ملمس ثلاثي الأبعاد.",
      "أنهي الحواف بخياطة متينة لتجنب التمزق."
    ],
    tips: [
      "اختاري ألوانًا متناسقة لتعكس روح التراث.",
      "جربي أنماطًا هندسية كإطار للتصميم."
    ],
    imageUrl:toptorathy,
    region: "بلاد الشام",
    createdAt: "2024-05-11",
    viewCount: 15,
    featured: false
  },
  {
  id: "embroidery-3",
  title: "تطريز غطاء وسادة تراثي",
  summary: "طريقة تطريز غطاء وسادة بأنماط مستوحاة من الزخارف الشامية التقليدية.",
  category: "embroidery",
  content:
    "تطريز الوسائد يضيف لمسة تراثية للمنازل الشامية، حيث تُستخدم الزخارف النباتية والهندسية لتزيينها.",
  ingredients: [
    "قماش قطني لغطاء الوسادة",
    "خيوط تطريز بألوان زاهية",
    "إبرة تطريز",
    "طوق تطريز"
  ],
  steps: [
    "ارسمي التصميم المطلوب على القماش.",
    "ابدئي بغرزة الصليب لتشكيل الزخارف الأساسية.",
    "استخدمي غرزة الساتان لملء الأشكال.",
    "ثبتي الخيوط بإحكام من الخلف لمنع التمزق."
  ],
  tips: [
    "استخدمي ألوان ذهبية وفضية لإضفاء لمسة فخامة.",
    "اختاري نقوشًا نباتية لتصميم تقليدي."
  ],
  imageUrl: "https://m.media-amazon.com/images/I/61f1m17w9oL._AC_UF894,1000_QL80_.jpg",
  region: "بلاد الشام",
  createdAt: "2024-05-11",
  viewCount: 12,
  featured: false
},
{
  id: "embroidery-5",
  title: "تطريز شرشف سرير بألوان زاهية",
  summary: "طريقة تطريز شرشف سرير تقليدي بزخارف هندسية مستوحاة من التراث الشامي.",
  category: "embroidery",
  content:
    "تطريز أغطية الأسرة كان فنًا شائعًا في بلاد الشام، حيث تُستخدم الزخارف الملونة لإضفاء حيوية على الغرفة.",
  ingredients: [
    "قماش قطني كبير",
    "خيوط تطريز زاهية",
    "إبرة تطريز",
    "طوق تطريز"
  ],
  steps: [
    "ارسمي تصميمًا هندسيًا كبيرًا في وسط الشرشف.",
    "ابدئي بالتطريز بغرزة الصليب لملء الأشكال.",
    "استخدمي ألوانًا متناسقة لجعل التصميم بارزًا.",
    "ثبتي الأطراف بغرزة متينة لمنع التفكك."
  ],
  tips: [
    "اختاري تصميمًا مركزيًا ليكون محور الشرشف.",
    "استخدمي طوقًا كبيرًا للحفاظ على شد القماش."
  ],
  imageUrl: "https://sc04.alicdn.com/kf/Hbb95b0825bb14ceabcfd8c0cfda16808Y.jpg",
  region: "بلاد الشام",
  createdAt: "2024-05-11",
  viewCount: 20,
  featured: false
},
{
  id: "embroidery-6",
  title: "تطريز حقيبة يد تقليدية",
  summary: "طريقة تطريز حقيبة يد قماشية بنقوش تراثية.",
  category: "embroidery",
  content:
    "الحقائب المطرزة كانت رمزًا للأناقة في بلاد الشام، حيث تُزين بالنقوش الهندسية أو الزهرية.",
  ingredients: [
    "قماش قطني قوي",
    "خيوط تطريز ملونة",
    "إبرة تطريز",
    "طوق تطريز"
  ],
  steps: [
    "ارسمي التصميم على وجه الحقيبة.",
    "ابدئي بغرزة السلسلة لتشكيل النقوش.",
    "املئي الأشكال بغرزة الساتان.",
    "ثبتي الحواف بخياطة متينة."
  ],
  tips: [
    "استخدمي ألوانًا تراثية مثل الأحمر والذهبي.",
    "أضيفي بطانة داخلية لمتانة أكبر."
  ],
  imageUrl:hakebtyd,
  region: "بلاد الشام",
  createdAt: "2024-05-11",
  viewCount: 18,
  featured: false
},

  {
    id: "fishing-1",
    title: "صيد السمك بالشبكة",
    summary:
      "طريقة الصيد التقليدية بالشبكة المستخدمة في المناطق الساحلية الخليجية",
    category: "fishing",
    content:
      "الصيد بالشبكة كان شائعاً في المناطق الساحلية في الخليج، حيث كان مصدر رزق أساسي. هذه الطريقة تعتمد على مهارة رمي الشبكة وتتطلب الصبر.",
    steps: [
      "اختاري شبكة قوية مصنوعة من النايلون أو القطن",
      "ارمي الشبكة في الماء بحركة دائرية لتغطي مساحة واسعة",
      "انتظري قليلاً (5-10 دقائق) للسماح للأسماك بالدخول",
      "اسحبي الشبكة ببطء مع الحفاظ على توازنها لتجنب فقدان الأسماك",
    ],
    tips: [
      "اختاري وقت الصباح الباكر أو الغروب لزيادة فرص الصيد",
      "تأكدي من تنظيف الشبكة بعد كل استخدام",
    ],
    imageUrl:
      "https://img.youm7.com/ArticleImgs/2019/6/29/120873-%D8%B5%D9%8A%D8%AF-%D8%A7%D9%84%D8%B3%D9%85%D9%83-(2).jpg",
    region: "الخليج",
    createdAt: "2024-05-12",
    viewCount: 7,
    featured: false,
  },
  {
    id: "fishing-2",
    title: "الصيد بالقراقير",
    summary: "استخدام القرقور لصيد الأسماك القاعية في الخليج",
    category: "fishing",
    content:
      "القراقير هي أقفاص سلكية تُستخدم لصيد الأسماك القاعية مثل الشعري والهامور. يتم وضع طُعم بداخلها وجذب الأسماك للدخول.",
    steps: [
      "ضعي طُعم مناسب داخل القرقور مثل السردين أو الحبار",
      "ضعي القرقور في قاع البحر باستخدام حبل وعوامة لتمييز الموقع",
      "اتركيه لمدة يوم أو أكثر قبل سحبه",
      "اسحبي القرقور برفق لتجنب إخراج الأسماك",
    ],
    tips: [
      "اختاري مواقع صخرية أو قريبة من الشعاب المرجانية",
      "احرصي على تثبيت العوامة جيداً لتسهيل العثور عليه",
    ],
    imageUrl: "https://resizer.wafyapp.com/?source=https://prod-wafy-api.s3.eu-central-1.amazonaws.com/images/articles/296-20200329093432-9053490.jpg&width=900",
    region: "الخليج",
    createdAt: "2024-05-12",
    viewCount: 15,
    featured: false,
  },
  {
    id: "fishing-3",
    title: "الصيد بالحظرة",
    summary: "طريقة تقليدية تعتمد على نصب مصائد ثابتة في المياه الضحلة",
    category: "fishing",
    content:
      "الحظرة هي طريقة صيد تعتمد على بناء مصائد باستخدام سعف النخيل أو الأسياخ المعدنية بشكل متقن، حيث تدخل الأسماك ولا تستطيع الخروج.",
    steps: [
      "قومي بتركيب الحظرة بشكل نصف دائري أو حرف V في المياه الضحلة",
      "احرصي على أن يكون مدخلها باتجاه التيار البحري",
      "اتركيها حتى امتلاءها بالأسماك",
      "اجمعي الأسماك من الداخل عند انخفاض المد",
    ],
    tips: [
      "افحصي الحظرة بانتظام لتفادي تكدّس الأسماك أو تلفها",
      "استخدمي مواد طبيعية لمنع الإضرار بالبيئة البحرية",
    ],
    imageUrl: "https://www.al-jazirahonline.com/wp-content/uploads/2020/02/22/DST_7149451_Sat25___1117____129432-e1582372055729-1170x534.jpg",
    region: "الخليج",
    createdAt: "2024-05-12",
    viewCount: 10,
    featured: false,
  },
  
  
  {
    id: "games-1",
    title: "لعبة السيجة",
    summary: "لعبة شعبية تقليدية للأطفال في مصر تعتمد على المهارة والتركيز",
    category: "games",
    content:
      "السيجة كانت تُلعب في الحارات المصرية بأدوات بسيطة مثل الحصوات، وهي لعبة تعزز التناسق بين اليد والعين والتركيز لدى الأطفال.",
    ingredients: ["5 حصوات صغيرة مستديرة"],
    steps: [
      "اجمعي 5 حصوات صغيرة ونظيفة بحجم متساوٍ تقريباً",
      "ارمي حصاة واحدة للأعلى واجمعي حصاة أخرى من الأرض قبل التقاط الأولى",
      "كرري الخطوة مع زيادة عدد الحصوات المجمعة في كل مرة",
      "حافظي على التركيز وسرعة الحركة لتجنب إسقاط الحصوات",
    ],
    tips: [
      "ابدئي بحصوات أكبر إذا كنتِ مبتدئة",
      "العبي على سطح ناعم مثل السجاد لتسهيل التقاط الحصوات",
    ],
    imageUrl:leabatsega,
    region: "مصر",
    createdAt: "2024-05-13",
    viewCount: 6,
    featured: false,
  },
  {
    id: "games-2",
    title: "لعبة الاستغماية",
    summary: "لعبة جماعية تقليدية تعتمد على الاختباء والبحث",
    category: "games",
    content:
      "الاستغماية تُعد من أشهر الألعاب الشعبية في مصر والوطن العربي، حيث يختبئ اللاعبون ويبحث عنهم لاعب واحد بعد العدّ بصوت مرتفع وهو مغمض العينين.",
    ingredients: ["عدد من الأطفال", "مكان يحتوي على أماكن للاختباء"],
    steps: [
      "اختاري لاعباً ليكون الباحث ويغمض عينيه ويعدّ حتى رقم معين",
      "في الوقت نفسه، يختبئ باقي اللاعبين",
      "بعد انتهاء العد، يبدأ الباحث في البحث عن الآخرين",
      "أول من يُكتشف يصبح الباحث في الجولة التالية",
    ],
    tips: [
      "اختاري أماكن آمنة للاختباء دون مخاطر",
      "احرصي على اللعب في بيئة مفتوحة أو ساحة منزلية",
    ],
    imageUrl: "https://www.alyaum.com/uploads/images/2019/08/08/640000.jpg",
    region: "مصر",
    createdAt: "2024-05-13",
    viewCount: 12,
    featured: false,
  },
  {
    id: "games-3",
    title: "لعبة الحجلة",
    summary: "لعبة تعتمد على القفز على مربعات مرسومة بالأرض باستخدام حصاة",
    category: "games",
    content:
      "الحجلة من الألعاب التي كانت شائعة بين الفتيات، وتُلعب برسم مربعات متصلة على الأرض والقفز داخلها بحصاة وبقدم واحدة.",
    ingredients: ["حصاة صغيرة", "طباشير أو غصن لرسم المربعات"],
    steps: [
      "ارسمي 8 مربعات متصلة على الأرض",
      "ارمي الحصاة في أول مربع دون أن تلمس الخطوط",
      "اقفزي بقدم واحدة عبر المربعات حتى النهاية، متجنبة المربع الذي فيه الحصاة",
      "التقطي الحصاة وارجعي بنفس الطريقة",
    ],
    tips: [
      "ابدئي بمربعات كبيرة للمبتدئين",
      "اللعب على أرض مستوية لتجنب السقوط",
    ],
    imageUrl: "https://alghad.com/content/upload/editor/Image1_1220239213428720044825.jpg",
    region: "مصر",
    createdAt: "2024-05-13",
    viewCount: 9,
    featured: false,
  },
  {
    id: "games-4",
    title: "لعبة عسكر وحرامية",
    summary: "لعبة تقمص الأدوار بين فريقين: الشرطة واللصوص",
    category: "games",
    content:
      "عسكر وحرامية هي لعبة حركية مشوقة، تنقسم فيها المجموعة إلى فريقين: العسكر (الشرطة) والحرامية، ويبدأ العسكر بمطاردة الفريق الآخر حتى القبض عليهم.",
    ingredients: ["عدد من الأطفال", "مساحة واسعة للركض"],
    steps: [
      "قسّمي الأطفال إلى فريقين متساويين: عسكر وحرامية",
      "يبدأ الحرامية بالجري والاختباء",
      "يحاول العسكر القبض عليهم ولمسهم لإخراجهم من اللعبة",
      "الذي يُقبض عليه يجلس جانباً حتى نهاية الجولة",
    ],
    tips: [
      "اللعب في أماكن مفتوحة وآمنة مثل الحدائق",
      "الاتفاق على حدود واضحة للعبة قبل البدء",
    ],
    imageUrl:askarweharamia,
    region: "مصر",
    createdAt: "2024-05-13",
    viewCount: 14,
    featured: false,
  },
  {
    id: "weddings-1",
    title: "تحضير زفة العروس",
    summary: "عادات الزفة في الأعراس التقليدية المصرية للاحتفال بالعروس",
    category: "weddings",
    content:
      "الزفة كانت جزءاً أساسياً من الأعراس المصرية القديمة، حيث تُصاحب العروس بموكب من الأغاني والرقصات الشعبية للاحتفال بها.",
    steps: [
      "جهزي قائمة بالأغاني الشعبية المصرية مثل 'يا عروسة' أو 'زفة العروسة'",
      "ارتدي ملابس تقليدية مثل الجلابيات الملونة أو الأزياء الفرعونية",
      "اصطحبي العروس في موكب مزين بالزهور والأضواء إلى مكان الاحتفال",
      "غني وارقصي مع الحضور باستخدام إيقاعات الطبل والمزمار",
    ],
    tips: [
      "أضيفي الشموع أو المشاعل لإضفاء طابع تراثي",
      "شجعي الحضور على المشاركة في الغناء والرقص",
    ],
    imageUrl:
      "https://i1.sndcdn.com/artworks-KUNk7SjRLArrzFnI-aKECyQ-t500x500.jpg",
    region: "مصر",
    createdAt: "2024-05-14",
    viewCount: 5,
    featured: false,
  },
  {
    id: "weddings-3",
    title: "تزيين منزل العروس",
    summary: "عادة تقليدية تشمل تزيين بيت العروس بالورود والزينة",
    category: "weddings",
    content:
      "كان من الطقوس الأساسية في الأعراس الشعبية تزيين منزل العروس بالأقمشة الملوّنة، والزهور الطبيعية، والمصابيح التقليدية قبل الزفاف.",
    steps: [
      "علقي أقمشة مزخرفة على الجدران والنوافذ",
      "زيني المدخل بالورد البلدي والياسمين",
      "استخدمي فوانيس أو مشاعل لإضاءة فنية تقليدية",
      "رتبي مكاناً خاصاً لاستقبال الزوار والضيوف",
    ],
    tips: [
      "احرصي على استخدام زينة من البيئة المحلية",
      "شاركي الجيران في التزيين لتعزيز الروابط الاجتماعية",
    ],
    imageUrl: "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/wedding-home-decorating-ideas-4-AR16112022-1024x640.jpg",
    region: "مصر",
    createdAt: "2024-05-14",
    viewCount: 8,
    featured: false,
  },
  {
    id: "weddings-4",
    title: "طبخ الوليمة",
    summary: "تحضير الأكلات الشعبية في الأعراس الجماعية",
    category: "weddings",
    content:
      "في القرى والمناطق الشعبية، كان أهل العروس والعريس يتعاونون لتحضير وجبات ضخمة مثل الفتة، الملوخية، أو المحشي، لإطعام الضيوف.",
    steps: [
      "جهزي كميات كبيرة من اللحم والدجاج والخضار",
      "استخدمي أواني نحاسية أو فخارية تقليدية للطبخ",
      "وزعي المهام على النساء لطهي الأطباق المتنوعة",
      "قدمي الطعام في صوانٍ كبيرة وتحت ظلال الخيام",
    ],
    tips: [
      "ابدئي التحضير من الصباح الباكر",
      "استخدمي توابل محلية لإبراز النكهة التقليدية",
    ],
    imageUrl: "https://blog.ajsrp.com/wp-content/uploads/2025/02/%D8%AA%D9%81%D8%B3%D9%8A%D8%B1-%D8%A7%D9%84%D9%88%D9%84%D9%8A%D9%85%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D9%85.jpg",
    region: "مصر",
    createdAt: "2024-05-14",
    viewCount: 14,
    featured: false,
  },
  {
    id: "calligraphy-6",
    title: "الخط الرقعة للمبتدئين",
    summary: "أسهل الخطوط لتعلم الكتابة اليومية بخط عربي واضح وجميل",
    category: "calligraphy",
    content:
      "الخط الرقعة هو الأكثر استخداماً في الحياة اليومية، يتميز بالوضوح وسرعة الكتابة. مناسب جداً للمبتدئين في تعلم الخط العربي.",
    ingredients: ["قلم عادي", "دفتر", "نموذج حروف"],
    steps: [
      "ابدأ بكتابة الحروف القصيرة مثل النون والباء",
      "تدرّب على الحروف المتصلة بمقاييس متساوية",
      "اكتب جُملاً قصيرة مع الحفاظ على انتظام السطر",
      "كرر التمارين يومياً لتطوير السرعة والجودة",
    ],
    tips: [
      "استعن بنماذج من كتب الخط القديمة أو المدرسية",
      "يفضَّل الكتابة ببطء أولاً، ثم تدريجياً زد السرعة",
    ],
    imageUrl: "https://makhtota0.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/02/18091349/C252-1.jpg",
    region: "مصر والعالم العربي",
    createdAt: "2024-05-15",
    viewCount: 12,
    featured: false
  },
  
  {
    id: "calligraphy-1",
    title: "كتابة الخط الديواني",
    summary:
      "نصائح لتعلم الخط الديواني المستخدم في الوثائق الرسمية ببلاد الشام",
    category: "calligraphy",
    content:
      "الخط الديواني كان يُستخدم في بلاد الشام لكتابة الوثائق الرسمية، وهو يتميز بأناقته وسلاسته. تعلم هذا الخط يتطلب دقة وممارسة مستمرة.",
    ingredients: ["قلم بوص تقليدي", "حبر أسود", "ورق لامع"],
    steps: [
      "استخدمي قلم البوص مع زاوية ميلان 45 درجة للكتابة",
      "تدربي على الحروف الأساسية (مثل الألف، الباء، والجيم) بشكل منفرد",
      "ارسمي كلمات بسيطة مع الحفاظ على التناسق في الحجم والزاوية",
      "حافظي على تناسق الخط بممارسة الكتابة على خطوط موجهة",
    ],
    tips: [
      "شاهدي فيديوهات تعليمية للخط الديواني لفهم الحركات",
      "استخدمي ورقاً شفافاً لتتبع الخطوط في البداية",
    ],
    imageUrl:
      "https://3shba.wordpress.com/wp-content/uploads/2019/11/bizar-kareem-340897244.jpg",
    region: "بلاد الشام",
    createdAt: "2024-05-15",
    viewCount: 4,
    featured: false,
  },
  {
    id: "calligraphy-2",
    title: "كتابة الخط الكوفي",
    summary: "تعلم الخط الكوفي الزخرفي المستخدم في المصاحف والعمارة الإسلامية",
    category: "calligraphy",
    content:
      "الخط الكوفي هو أقدم الخطوط العربية، يتميز بزواياه الحادة وتنسيقه الهندسي، وكان يستخدم في زخرفة المساجد ونسخ المصاحف القديمة.",
    ingredients: ["قلم مسطح", "مسطرة", "ورق سميك"],
    steps: [
      "ارسم شبكة مربعات لتوجيه الحروف",
      "ابدأ بالحروف المستقيمة مثل الألف واللام",
      "أضف الزخارف على أطراف الحروف حسب الطراز الكوفي المختار",
      "حافظ على التماثل في التصميم باستخدام المسطرة والمقياس",
    ],
    tips: [
      "ابدأ بالكوفي البسيط قبل الانتقال للكوفي المزخرف",
      "ادرس نماذج تاريخية من المصاحف الكوفية كمصدر إلهام",
    ],
    imageUrl: "https://modo3.com/thumbs/fit630x300/264360/1646685041/%D9%85%D8%A7_%D9%87%D9%88_%D8%A7%D9%84%D8%AE%D8%B7_%D8%A7%D9%84%D9%83%D9%88%D9%81%D9%8A_%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%9F.jpg",
    region: "العراق",
    createdAt: "2024-05-15",
    viewCount: 5,
    featured: false
  },
  {
    id: "calligraphy-3",
    title: "الخط المغربي الأندلسي",
    summary: "أنماط الخط المغربي المستخدمة في الوثائق والقرآن في شمال إفريقيا",
    category: "calligraphy",
    content:
      "الخط المغربي يتميز بليونة كبيرة ودوائر واسعة، ويستخدم بشكل خاص في المغرب والجزائر وتونس، وقد تطور من التأثيرات الأندلسية.",
    ingredients: ["قلم بوص مغربي", "حبر داكن", "ورق تقليدي"],
    steps: [
      "ابدأ بتعلم الحروف الدائرية مثل الفاء والقاف",
      "تدرّب على الاتصالات بين الحروف بانسيابية",
      "استخدم الزوايا المنحنية مع الحفاظ على جمالية الحركة",
      "قم بمحاكاة مخطوطات مغربية قديمة للتعود على النمط",
    ],
    tips: [
      "يفضَّل استخدام ورق مصنوع يدوياً للحصول على تجربة واقعية",
      "اقرأ نماذج من مصاحف مغربية لفهم الخصائص الأسلوبية",
    ],
    imageUrl: "https://hibastudio.com/wp-content/uploads/2021/05/andalus05-1536x852.jpg",
    region: "المغرب",
    createdAt: "2024-05-15",
    viewCount: 6,
    featured: false
  },
  {
    id: "calligraphy-4",
    title: "أساسيات الخط الثلث",
    summary: "الخط الثلث من أجمل الخطوط ويُستخدم في اللوحات والمآذن",
    category: "calligraphy",
    content:
      "الخط الثلث يُعرف بتعقيده وجماليته، ويُستخدم في تزيين المساجد والقصور. يتطلب ضبطاً دقيقاً لوزن الحروف وتوازن الكلمات.",
    ingredients: ["قلم عريض", "محبرة", "دفتر تدريبات"],
    steps: [
      "ابدأ بكتابة الحروف الطويلة مثل الطاء والصاد",
      "درّب يدك على الانحناءات والتقوّس في نهايات الحروف",
      "ركز على النسبة بين الطول والعرض في الكلمات",
      "مارس كتابة جمل كاملة بعد إتقان الحروف",
    ],
    tips: [
      "استخدم فيديوهات بطيئة لملاحظة التفاصيل الدقيقة",
      "ابدأ بالحروف المنفصلة قبل الانتقال للتكوينات المعقدة",
    ],
    imageUrl: "https://i.ytimg.com/vi/D-Zdk7BYFkQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYxLbHC8gFmvtO4qv170ZM4na28Q",
    region: "تركيا والعالم الإسلامي",
    createdAt: "2024-05-15",
    viewCount: 7,
    featured: false
  },
  {
    id: "calligraphy-5",
    title: "الخط الفارسي (نستعليق)",
    summary: "الخط الفارسي يتميز بالنعومة والانسيابية ويُستخدم في الشعر والديباجات",
    category: "calligraphy",
    content:
      "الخط الفارسي أو 'النستعليق' يشتهر بجماليته الخاصة، ويُستخدم في كتابة الشعر الفارسي والعربي على حد سواء، خصوصاً في إيران والهند.",
    ingredients: ["قلم دقيق", "حبر بني أو أسود", "ورق ناعم"],
    steps: [
      "ابدأ بالحروف المنحنية مثل الياء والراء",
      "تدرّب على كتابة البيت الشعري كاملاً باتصال سلس",
      "أضف انحناءات دقيقة ونهايات متموجة",
      "استخدم ورقاً ناعماً ليساعد على انسياب الحبر",
    ],
    tips: [
      "خط النستعليق يحتاج إلى صبر، ابدأ بالتقليد البصري للنماذج",
      "الاستماع للموسيقى الكلاسيكية أثناء الكتابة قد يساعد على الانسياب",
    ],
    imageUrl: "https://i.ytimg.com/vi/WuA0X67aG3o/maxresdefault.jpg",
    region: "إيران والهند",
    createdAt: "2024-05-15",
    viewCount: 5,
    featured: false
  },

  {
    id: "perfumes-1",
    title: "صناعة عطر الورد",
    summary: "طريقة تحضير عطر طبيعي من الورد في بلاد الشام",
    category: "perfumes",
    content:
      "عطر الورد كان يُستخدم في بلاد الشام للمناسبات الخاصة، وهو يتميز برائحته المنعشة والطبيعية. هذه الوصفة تعتمد على استخلاص زيت الورد بطريقة بسيطة.",
    ingredients: [
      "2 كوب بتلات ورد طازجة",
      "1 لتر ماء مقطر",
      "زجاجة زجاجية داكنة",
    ],
    steps: [
      "اغلي بتلات الورد في الماء المقطر لمدة 20 دقيقة لاستخلاص الزيوت",
      "صفي السائل باستخدام قماش ناعم للحصول على محلول نقي",
      "عبئي السائل في زجاجة زجاجية داكنة لحمايته من الضوء",
      "اتركيه في مكان بارد لمدة أسبوع قبل الاستخدام",
    ],
    tips: [
      "استخدمي وروداً عطرية مثل الورد الدمشقي للحصول على رائحة قوية",
      "رجي الزجاجة قبل الاستخدام لتوزيع الزيوت",
    ],
    imageUrl:
      "https://modo3.com/thumbs/fit630x300/196828/1537272154/%D9%83%D9%8A%D9%81%D9%8A%D8%A9_%D8%B5%D9%86%D8%B9_%D8%B9%D8%B7%D8%B1_%D9%85%D9%86_%D8%A7%D9%84%D9%88%D8%B1%D8%AF.jpg",
    region: "بلاد الشام",
    createdAt: "2024-05-16",
    viewCount: 3,
    featured: false,
  },
  {
    id: "perfumes-2",
    title: "صناعة عطر العنبر التقليدي",
    summary: "طريقة تحضير عطر العنبر الدافئ في الخليج",
    category: "perfumes",
    content:
      "عطر العنبر يُستخدم بكثرة في الخليج العربي، ويتميز برائحته العميقة والدافئة. يُحضَّر تقليدياً من مادة العنبر الممزوجة بزيوت طبيعية.",
    ingredients: ["5 جم عنبر خام", "50 مل زيت الجوجوبا", "زجاجة عطر"],
    steps: [
      "اسحقي العنبر حتى يصبح مسحوقاً ناعماً",
      "اخلطيه مع زيت الجوجوبا جيداً",
      "اتركي المزيج في زجاجة مغلقة لمدة أسبوعين ليتخمر",
      "رجي الزجاجة قبل كل استخدام لتوزيع الرائحة",
    ],
    tips: [
      "كلما طالت فترة التخمير، ازدادت قوة الرائحة",
      "احفظي الزجاجة في مكان مظلم لتحسين الثبات",
    ],
    imageUrl: "https://cdn.salla.sa/vBypv/UQWsUzWB8J37ZYTBOoO28LDsE4O1iazHPFVIKT3U.jpg",
    region: "الخليج",
    createdAt: "2024-05-16",
    viewCount: 4,
    featured: false
  },
  {
    id: "perfumes-6",
    title: "عطر المسك الأبيض التقليدي",
    summary: "طريقة تحضير عطر المسك الطبيعي المستخدم في الطقوس الدينية",
    category: "perfumes",
    content:
      "المسك الأبيض يُعتبر من أنقى أنواع العطور، ويُستخدم في الطقوس والملابس التقليدية. يُحضَّر بطريقة بسيطة من بودرة المسك وزيوت خفيفة.",
    ingredients: ["10 جم بودرة مسك أبيض", "30 مل زيت جوز الهند", "وعاء صغير"],
    steps: [
      "اخلطي بودرة المسك مع زيت جوز الهند جيداً",
      "احتفظي بالخليط في وعاء زجاجي مغلق ليومين",
      "استخدمي كمية قليلة على الرقبة أو خلف الأذن",
      "يمكنك استخدامه أيضاً لتطييب الملابس",
    ],
    tips: [
      "احفظيه في الثلاجة لزيادة ثبات الرائحة",
      "يفضل استخدام ملعقة خشبية لتحريك المسك",
    ],
    imageUrl: "https://cdn.salla.sa/aZRyO/5dbd4859-4a70-468e-a84b-2caeba940cfc-1000x525-QQCxXfVVetoGlflB6yLSgNuDiNIIeWZ3daIXim1d.png",
    region: "الحجاز",
    createdAt: "2024-05-16",
    viewCount: 8,
    featured: false
  },
  
  {
    id: "perfumes-3",
    title: "صناعة عطر الفل الطبيعي",
    summary: "تحضير عطر الفل الشهير في اليمن بطريقة منزلية",
    category: "perfumes",
    content:
      "عطر الفل شائع في الأعراس والمناسبات في اليمن، ويتميز برائحة خفيفة ومنعشة تُستخلص من زهور الفل البيضاء.",
    ingredients: ["2 كوب زهور فل طازجة", "1 لتر ماء ورد", "زجاجة رش"],
    steps: [
      "انقعي زهور الفل في ماء الورد لمدة ليلة كاملة",
      "صفي المزيج جيداً واحتفظي بالسائل في زجاجة رش",
      "ضعي العطر في الثلاجة للحفاظ على رائحته",
      "استخدميه خلال أسبوعين لضمان الانتعاش",
    ],
    tips: [
      "يمكنك إضافة نقطة من زيت الياسمين لتعزيز الرائحة",
      "يفضل استخدام الزهور مباشرة بعد قطفها",
    ],
    imageUrl: "https://www.omel3oreef.com/sites/default/files/styles/news-detail/public/field/image/%D9%85%D8%B9%D8%B7%D8%B1%20%D9%85%D9%86%D8%B2%D9%84%D9%8A.jpg?itok=gYRxg9Tg",
    region: "اليمن",
    createdAt: "2024-05-16",
    viewCount: 6,
    featured: false
  },
  {
    id: "perfumes-4",
    title: "تحضير زيت الياسمين المعطر",
    summary: "وصفة طبيعية لصناعة زيت معطر من زهور الياسمين في مصر",
    category: "perfumes",
    content:
      "زيت الياسمين كان يُستخدم قديماً في مصر لتطييب الشعر والجسم. يتم تحضيره بنقع الزهور في زيت ناقل لعدة أيام.",
    ingredients: ["كوب زهور ياسمين", "نصف كوب زيت لوز", "وعاء زجاجي"],
    steps: [
      "املئي الوعاء بالياسمين وأضيفي زيت اللوز فوقها",
      "أغلقي الوعاء واتركيه في الشمس لمدة أسبوع مع رجّه يومياً",
      "صفي الزيت واحتفظي به في زجاجة داكنة",
      "استخدميه كعطر أو زيت للجسم بعد الاستحمام",
    ],
    tips: [
      "استخدمي زهوراً طازجة غير مرشوشة بمبيدات",
      "ضعي قطعة قماش نظيفة على فوهة الوعاء قبل غلقه للمساعدة في التنفس",
    ],
    imageUrl: "https://backend.donyayadonya.com/storage/images/news/1624173747%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%B9%D9%85%D9%84%20%D8%B9%D9%8F%D8%B7%D8%B1%20%D8%A7%D9%84%D9%81%D9%8F%D9%84%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A.jpg",
    region: "مصر",
    createdAt: "2024-05-16",
    viewCount: 5,
    featured: false
  },
  {
    id: "perfumes-5",
    title: "عطر اللافندر الجبلي",
    summary: "تحضير عطر من زهور اللافندر البرية في مناطق المغرب الجبلية",
    category: "perfumes",
    content:
      "يُستخدم اللافندر في المغرب لإنتاج عطور طبيعية مهدئة، تُحضَّر من الزهور البرية المنتشرة في جبال الأطلس.",
    ingredients: ["كوب زهور لافندر مجففة", "1 كوب كحول عطري", "زجاجة بخاخ"],
    steps: [
      "انقعي زهور اللافندر في الكحول لمدة 10 أيام",
      "صفي السائل واحتفظي به في زجاجة بخاخ",
      "رجي الزجاجة جيداً قبل كل استخدام",
      "رشيه على المعصمين والرقبة بعد الاستحمام",
    ],
    tips: [
      "ضعي الزجاجة في مكان مظلم خلال فترة النقع",
      "يمكنك إضافة بضع قطرات من زيت اللافندر المركز",
    ],
    imageUrl: "https://cdn.alweb.com/thumbs/planting/article/fit710x532/%D8%A5%D9%84%D9%8A%D9%83-%D9%82%D8%A7%D8%A6%D9%85%D8%A9-%D8%A8%D8%AC%D9%85%D9%8A%D8%B9-%D8%A3%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D9%84%D8%A7%D9%81%D9%86%D8%AF%D8%B1-%D9%88%D9%85%D9%85%D9%8A%D8%B2%D8%A7%D8%AA%D9%87%D8%A7.jpg",
    region: "المغرب",
    createdAt: "2024-05-16",
    viewCount: 4,
    featured: false
  },

  
  {
    id: "jewelry-1",
    title: "صناعة قلادة تقليدية",
    summary: "طريقة صنع قلادة بالخرز مستوحاة من التراث الخليجي",
    category: "jewelry",
    content:
      "القلادات التقليدية في الخليج كانت تُصنع يدوياً باستخدام الخرز الملون، وكانت تُستخدم للزينة في المناسبات. هذه الطريقة بسيطة وتناسب المبتدئين.",
    ingredients: [
      "50 خرزة ملونة (زجاجية أو خشبية)",
      "1 متر خيط قوي (نايلون أو قطن)",
      "مشبك معدني",
    ],
    steps: [
      "رتبي الخرز بنمط معين (مثل التناوب بين الألوان أو الأحجام)",
      "مرري الخيط عبر الخرز باستخدام إبرة إذا لزم الأمر",
      "اربطي المشبك في نهايتي الخيط لتثبيت القلادة",
      "تأكدي من متانة القلادة بسحب الخيط برفق",
    ],
    tips: [
      "أضيفي خرزات معدنية صغيرة لإضفاء لمسة تراثية",
      "قيسي طول القلادة على رقبتك قبل تثبيت المشبك",
    ],
    imageUrl:
      "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/909364/1.jpg?5728",
    region: "الخليج",
    createdAt: "2024-05-17",
    viewCount: 2,
    featured: false,
  },
  {
    id: "jewelry-2",
    title: "صنع أساور مطرزة بالخيط",
    summary: "طريقة تقليدية لصنع أساور بالخيوط الملونة في شمال إفريقيا",
    category: "jewelry",
    content:
      "الأساور المطرزة بالخيط كانت تُصنع يدوياً في القرى المغربية والجزائرية، وتُرتدى في المناسبات وتُهدى بين الفتيات.",
    ingredients: [
      "3 خيوط قطنية بألوان مختلفة",
      "مقص",
      "شريط لاصق أو مشبك للتثبيت",
    ],
    steps: [
      "ثبتي الخيوط من أحد الطرفين باستخدام الشريط",
      "ابدئي بتضفير الخيوط بنمط متكرر (ضفيرة بسيطة أو متعرجة)",
      "استمري حتى تصلي للطول المناسب",
      "اربطي الأطراف بعقدة مزدوجة",
    ],
    tips: [
      "استخدمي ألواناً ترمز لمناسبات معينة كالأخضر للربيع",
      "زيني النهاية بخرزة صغيرة لمظهر أنيق",
    ],
    imageUrl: "https://i.ytimg.com/vi/47HJKMZ-JS0/sddefault.jpg",
    region: "شمال إفريقيا",
    createdAt: "2024-05-17",
    viewCount: 3,
    featured: false
  },
  {
    id: "jewelry-3",
    title: "إعداد حلق فضي بدوي",
    summary: "حلق مستوحى من الحلي البدوية التقليدية في صحراء سيناء",
    category: "jewelry",
    content:
      "الحلي البدوية تتميز باستخدام الفضة والنقوش اليدوية، وكانت رمزاً للهوية. الحلق السيناوي يُصنع من أسلاك الفضة الملتفة.",
    ingredients: [
      "سلك فضي بسمك 0.8 مم",
      "كماشة لف الأسلاك",
      "مشبك أذن معدني",
    ],
    steps: [
      "قصي السلك بطول 10 سم للحلق الواحد",
      "لفي السلك على شكل دائري ثم زينيه بلفات حلزونية",
      "ثبتي المشبك في نهاية السلك بإحكام",
      "نظفي القطعة بقطعة قماش ناعمة",
    ],
    tips: [
      "أضيفي قطعة مرجان صغيرة لتعزيز الطابع البدوي",
      "ضعي القليل من الزيت الطبيعي لحفظ بريق الفضة",
    ],
    imageUrl: "https://i.ytimg.com/vi/y3I5F-5Wx5M/maxresdefault.jpg",
    region: "سيناء",
    createdAt: "2024-05-17",
    viewCount: 4,
    featured: false
  },
  {
    id: "jewelry-4",
    title: "سوار من نوى التمر",
    summary: "حرفة مبتكرة من نوى التمر المشهورة في الحجاز",
    category: "jewelry",
    content:
      "في بعض مناطق الحجاز، كانت النساء يصنعن الحُلي من نوى التمر بعد تنظيفه وتشكيله، في تقليد يعكس روح الاستدامة.",
    ingredients: [
      "20 نواة تمر نظيفة ومجففة",
      "إبرة وخيط نايلون",
      "خرز معدني (اختياري)",
    ],
    steps: [
      "ثقب كل نواة باستخدام إبرة ساخنة بحذر",
      "مرري الخيط من خلال النوى واحدة تلو الأخرى",
      "أضيفي خرزاً معدنياً كل 3 نوى لمظهر زخرفي",
      "اربطي الطرفين بعقدة قوية",
    ],
    tips: [
      "نقعي النوى بالماء والليمون لتقليل الرائحة",
      "استخدمي خيط مطاطي لسهولة اللبس",
    ],
    imageUrl: "https://i.ytimg.com/vi/RllkacIhGnE/sddefault.jpg",
    region: "الحجاز",
    createdAt: "2024-05-17",
    viewCount: 6,
    featured: false
  },
  {
    id: "jewelry-5",
    title: "خاتم نحاسي محفور يدوياً",
    summary: "خاتم مصنوع يدوياً من النحاس المحفور بتصاميم أمازيغية",
    category: "jewelry",
    content:
      "في القرى الأمازيغية، كان الحرفيون يصنعون الخواتم من النحاس، ويزينونها بنقوش يدوية ترمز للبركة أو الشجاعة.",
    ingredients: [
      "شريحة نحاسية رقيقة",
      "مطرقة ومسنن نقش",
      "مبرد لتنعيم الحواف",
    ],
    steps: [
      "اقطعي شريحة نحاسية بحجم الخاتم المطلوب",
      "استخدمي المسنن لنقش الزخارف الأمازيغية",
      "لفي الشريحة لتشكيل دائرة وألحمي الطرفين",
      "ابردي الخاتم حتى يصبح ناعماً على الأطراف",
    ],
    tips: [
      "يمكن طلاء النحاس بطبقة من الشمع للحماية من الأكسدة",
      "استخدمي نماذج نقش مطبوعة لمساعدتك في البداية",
    ],
    imageUrl: "https://m.media-amazon.com/images/I/41ARP47EgPL._BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
    region: "المغرب",
    createdAt: "2024-05-17",
    viewCount: 5,
    featured: false
  },
  {
    id: "jewelry-6",
    title: "تعليقة من الصدف",
    summary: "حلي من الصدف البحري كانت تُجمع وتُشكل يدوياً في الخليج",
    category: "jewelry",
    content:
      "الصدف كان يُجمع من الشواطئ ويُستخدم لصناعة الحلي البسيطة. تعليقة الصدف ترمز للطبيعة البحرية وروح الصيادين.",
    ingredients: [
      "صدفة بحرية كبيرة ومفرغة",
      "سلك معدني ناعم",
      "خيط جلد أو قطني",
    ],
    steps: [
      "انظفي الصدفة جيداً واتركيها تجف",
      "لفي السلك المعدني حول حوافها لتثبيت الخيط",
      "اربطي الخيط من الأعلى لتكوين قلادة أو تعليقة",
      "زينيها بخرز صغير أو قطعة مرجان",
    ],
    tips: [
      "يمكن استخدام مثقاب صغير لعمل فتحة في الصدفة",
      "طلاء شفاف لحماية الصدفة من التشقق مع الوقت",
    ],
    imageUrl: "https://cdn.salla.sa/aobdW/737qFsdMBH8XxABZv9F4OAWOiliqCoLe8EkQEKaA.png",
    region: "الخليج",
    createdAt: "2024-05-17",
    viewCount: 3,
    featured: false
  },
  
  {
    id: "candles-1",
    title: "صناعة شمعة منزلية",
    summary: "طريقة صنع شمعة بالزيوت العطرية للإضاءة والزينة في مصر",
    category: "candles",
    content:
      "الشموع كانت تُستخدم في مصر للإضاءة والزينة، وهذه الطريقة تعتمد على إضافة زيوت عطرية للحصول على رائحة مميزة.",
    ingredients: [
      "500 غرام شمع بارافين",
      "فتيل قطني",
      "10 قطرات زيت عطري (مثل اللافندر أو الياسمين)",
    ],
    steps: [
      "أذيبي الشمع في وعاء على نار هادئة باستخدام حمام مائي",
      "أضيفي الزيت العطري إلى الشمع المذاب وامزجيه جيداً",
      "ضعي الفتيل في منتصف قالب الشمع مع تثبيته بشريط لاصق",
      "اسكبي الشمع المذاب في القالب واتركيه يبرد لمدة 4 ساعات",
    ],
    tips: [
      "استخدمي قالباً زجاجياً أو معدنياً لسهولة الإزالة",
      "تأكدي من تثبيت الفتيل بشكل مستقيم",
    ],
    imageUrl:
      "https://m.media-amazon.com/images/I/71eYpAWzJUL._AC_UF1000,1000_QL80_.jpg",
    region: "مصر",
    createdAt: "2024-05-18",
    viewCount: 1,
    featured: false,
  },
  {
    id: "candles-2",
    title: "شمعة الشمع الطبيعي بالعسل",
    summary: "طريقة تحضير شمعة طبيعية باستخدام الشمع والعسل في الحرف التقليدية",
    category: "candles",
    content:
      "الشمع الطبيعي الممزوج بالعسل كان يُستخدم لصنع شموع دافئة وعطرية في المنازل التقليدية. العسل يضيف لمسة من الرائحة الحلوة والفوائد الطبيعية.",
    ingredients: [
      "300 غرام شمع عسل طبيعي",
      "100 غرام شمع نباتي",
      "10 قطرات زيت عطري مثل اللافندر",
      "فتيل قطن",
    ],
    steps: [
      "ذوبي الشمع العسل والشمع النباتي معاً في حمام مائي",
      "أضيفي الزيت العطري بعد ذوبان الشمع واخلطي جيداً",
      "ضعي الفتيل في قاع القالب وثبتيه باستخدام مشبك صغير",
      "اسكبي الخليط في القالب واتركيه ليبرد لمدة 4 ساعات",
    ],
    tips: [
      "استخدمي زيوت عطرية طبيعية لتعزيز الرائحة",
      "تأكدي من أن الفتيل في المنتصف ليشعل الشمعة بشكل متساوٍ",
    ],
    imageUrl: "https://www.agrinewz.com/content/upload/editor/Image4_92024510255219751756.jpg",
    region: "مصر",
    createdAt: "2024-05-18",
    viewCount: 2,
    featured: false
  },
  {
    id: "candles-3",
    title: "شمعة الفواكه المجففة",
    summary: "طريقة صناعة شمعة منزلية باستخدام الفواكه المجففة للزينة والعطر",
    category: "candles",
    content:
      "الفواكه المجففة تُستخدم في صناعة الشموع لإضافة جمالية ورائحة طبيعية. يمكن استخدام التوت أو البرتقال المجفف لإضفاء لمسة مميزة.",
    ingredients: [
      "500 غرام شمع نباتي",
      "فتيل قطن",
      "فواكه مجففة مثل التوت أو البرتقال",
    ],
    steps: [
      "ذوبي الشمع في حمام مائي",
      "أضيفي الفواكه المجففة إلى القالب بشكل مرتب",
      "ثبتي الفتيل في منتصف القالب",
      "اسكبي الشمع المذاب فوق الفواكه المجففة واتركيه ليبرد تماماً",
    ],
    tips: [
      "استخدمي قوالب صغيرة لشموع جميلة من الفواكه",
      "ضعي الفواكه المجففة بالتوازي مع الفتيل لتحقيق تأثير جمالي",
    ],
    imageUrl: "https://ae01.alicdn.com/kf/Hea96ed572aa846a0845373ae3554802dC.jpg",
    region: "مصر",
    createdAt: "2024-05-18",
    viewCount: 3,
    featured: false
  },
  {
    id: "candles-5",
    title: "شمعة اللافندر والفانيليا",
    summary: "صناعة شمعة منزلية برائحة اللافندر والفانيليا للاسترخاء في المنزل",
    category: "candles",
    content:
      "شمعة اللافندر والفانيليا من العطور الهادئة التي تستخدم بشكل شائع في تحضير أجواء مريحة، وتعد من أشهر أنواع الشموع المنزلية.",
    ingredients: [
      "500 غرام شمع نباتي",
      "10 قطرات زيت اللافندر",
      "10 قطرات زيت الفانيليا",
      "فتيل قطن",
    ],
    steps: [
      "ذوبي الشمع النباتي في حمام مائي على نار هادئة",
      "أضيفي الزيوت العطرية واخلطي المكونات جيداً",
      "ثبتي الفتيل في قالب الشمعة",
      "اسكبي المزيج في القالب واتركيه ليبرد لمدة 5 ساعات",
    ],
    tips: [
      "استخدمي زيوت عطرية عالية الجودة للحصول على رائحة مثالية",
      "ضعي الشمعة في مكان بارد أثناء التبريد لتجنب تشقق الشمع",
    ],
    imageUrl: "https://soulmatecare.com/wp-content/uploads/2024/03/ffddf1.webp",
    region: "مصر",
    createdAt: "2024-05-18",
    viewCount: 5,
    featured: false
  },
  
  {
    id: "soap_making-1",
    title: "صناعة صابون زيت الزيتون",
    summary: "طريقة صنع صابون طبيعي بزيت الزيتون لبشرة ناعمة",
    category: "soap_making",
    content:
      "صابون زيت الزيتون كان يُستخدم في بلاد الشام للبشرة الحساسة، وهو يتميز بخصائصه المرطبة. هذه الوصفة تعتمد على طريقة الصابون البارد.",
    ingredients: [
      "500 مل زيت زيتون",
      "70 غرام هيدروكسيد الصوديوم",
      "150 مل ماء مقطر",
    ],
    steps: [
      "امزجي الماء مع الهيدروكسيد بحذر في وعاء مقاوم للحرارة (سيسخن الخليط)",
      "أضيفي زيت الزيتون تدريجياً إلى الخليط بعد أن يبرد قليلاً",
      "صبي الخليط في قالب سيليكون وغطيه لمدة 24 ساعة",
      "اتركي الصابون يجف في مكان جاف لمدة 6 أسابيع ليكتمل تصبنه",
    ],
    warnings: [
      "ارتدي قفازات ونظارات واقية أثناء التعامل مع الهيدروكسيد",
      "اعملي في مكان جيد التهوية",
    ],
    tips: [
      "أضيفي زيت عطري مثل زيت اللافندر في المرحلة الأخيرة لإضافة رائحة",
      "استخدمي ميزاناً دقيقاً لقياس الهيدروكسيد والماء",
    ],
    imageUrl:
      "https://www.smartpack-eg.com/rec/upload/698bf726c5c66924943d49a89431d313.jpg",
    region: "بلاد الشام",
    createdAt: "2024-05-19",
    viewCount: 1,
    featured: false,
  },
  {
    id: "soap_making-2",
    title: "صناعة صابون اللبن والعسل",
    summary: "طريقة صنع صابون طبيعي باستخدام اللبن والعسل لترطيب البشرة",
    category: "soap_making",
    content:
      "صابون اللبن والعسل من أفضل الصوابين التي ترطب البشرة بفضل خصائصهما المغذية. يستخدم هذا الصابون للبشرة الجافة أو الحساسة.",
    ingredients: [
      "250 مل حليب كامل الدسم",
      "50 غرام عسل نحل طبيعي",
      "70 غرام هيدروكسيد الصوديوم",
      "150 مل ماء مقطر",
    ],
    steps: [
      "امزجي الماء مع الهيدروكسيد بحذر في وعاء مقاوم للحرارة",
      "أضيفي الحليب والعسل تدريجياً بعد أن يبرد الخليط قليلاً",
      "صبي الخليط في قالب سيليكون وغطّيه لمدة 24 ساعة",
      "اتركي الصابون يجف لمدة 4-6 أسابيع في مكان جاف",
    ],
    warnings: [
      "يجب ارتداء قفازات ونظارات واقية أثناء التعامل مع الهيدروكسيد",
      "تأكدي من أن المكان جيد التهوية",
    ],
    tips: [
      "يمكنك إضافة بعض الزيوت العطرية مثل زيت الورد لتقوية الرائحة",
      "استخدمي ميزاناً دقيقاً لقياس المقادير بدقة",
    ],
    imageUrl: "https://akhbarelyom.com/images/images/large/20211222173530022.jpg",
    region: "مصر",
    createdAt: "2024-05-19",
    viewCount: 2,
    featured: false
  },
  {
    id: "soap_making-3",
    title: "صناعة صابون جوز الهند",
    summary: "طريقة صنع صابون طبيعي بزيت جوز الهند لبشرة ناعمة وصحية",
    category: "soap_making",
    content:
      "صابون جوز الهند يُستخدم للحفاظ على ترطيب البشرة بفضل خصائصه المرطبة والمغذية. هذا الصابون مثالي للبشرة الجافة والمتهيجة.",
    ingredients: [
      "300 مل زيت جوز الهند",
      "100 غرام هيدروكسيد الصوديوم",
      "150 مل ماء مقطر",
    ],
    steps: [
      "امزجي الماء مع الهيدروكسيد بحذر في وعاء مقاوم للحرارة",
      "أضيفي زيت جوز الهند تدريجياً بعد أن يبرد الخليط قليلاً",
      "صبي الخليط في قالب سيليكون واتركيه لمدة 24 ساعة ليجمد",
      "اتركي الصابون ليجف في مكان جاف لمدة 6 أسابيع",
    ],
    warnings: [
      "ارتدي قفازات ونظارات واقية أثناء التعامل مع الهيدروكسيد",
      "اعملي في مكان جيد التهوية",
    ],
    tips: [
      "يمكنك إضافة زيت اللافندر أو زيت الياسمين لزيادة الفوائد العطرية",
      "تأكدي من أن خليط الصابون بارد قبل إضافته إلى القالب",
    ],
    imageUrl: "https://www.smartpack-eg.com/rec/upload/e2232cf1e7bd952ebb55d2bcfc5ea1a0.png",
    region: "مصر",
    createdAt: "2024-05-19",
    viewCount: 3,
    featured: false
  },
  {
    id: "soap_making-4",
    title: "صناعة صابون الشاي الأخضر",
    summary: "طريقة صنع صابون طبيعي باستخدام الشاي الأخضر لتنقية البشرة",
    category: "soap_making",
    content:
      "صابون الشاي الأخضر يحتوي على مضادات الأكسدة التي تساعد في تنقية البشرة وتحسين مظهرها. مناسب للبشرة الدهنية والمعرضة للحبوب.",
    ingredients: [
      "200 مل زيت زيتون",
      "100 مل زيت جوز الهند",
      "50 غرام هيدروكسيد الصوديوم",
      "100 مل ماء مقطر",
      "2 مل ملح البحر",
      "2 مل من الشاي الأخضر المجفف",
    ],
    steps: [
      "قم بغلي الشاي الأخضر مع الماء المقطر لمدة 5 دقائق ثم صفه",
      "امزجي الماء مع الهيدروكسيد بحذر في وعاء مقاوم للحرارة",
      "أضيفي الزيت والشاي الأخضر تدريجياً إلى الخليط البارد",
      "صبي الخليط في قالب واتركيه حتى يبرد تماماً",
      "اتركي الصابون ليجف لمدة 4 أسابيع",
    ],
    warnings: [
      "يجب ارتداء قفازات ونظارات واقية عند التعامل مع الهيدروكسيد",
      "تأكدي من تهوية المكان جيداً أثناء التحضير",
    ],
    tips: [
      "يمكنك إضافة زيت الليمون لتحسين رائحة الصابون",
      "استخدمي ميزاناً دقيقاً لقياس المكونات",
    ],
    imageUrl: "https://news.elsob7.com/wp-content/uploads/2024/07/%D8%B5%D8%A7%D8%A8%D9%88%D9%86%D8%A9-%D8%A7%D9%84%D8%B4%D8%A7%D9%8A-%D9%84%D8%AA%D9%81%D8%AA%D9%8A%D8%AD-%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D8%A9.jpg",
    region: "مصر",
    createdAt: "2024-05-19",
    viewCount: 4,
    featured: false
  },
  {
    id: "leatherwork-1",
    title: "صناعة محفظة جلدية",
    summary: "طريقة صنع محفظة من الجلد بأسلوب تقليدي خليجي",
    category: "leatherwork",
    content:
      "صناعة الجلود كانت مهارة تقليدية شائعة في الخليج، حيث كانت تُستخدم لصنع الأدوات اليومية مثل المحافظ. هذه الطريقة تنتج محفظة بسيطة ومتينة.",
    ingredients: ["قطعة جلد (30x20 سم)", "خيط شمعي قوي", "إبرة خياطة جلد"],
    steps: [
      "قصي الجلد حسب الشكل المطلوب (مستطيل للمحفظة مع جيوب داخلية)",
      "ثقبي الحواف باستخدام أداة ثقب لتسهيل الخياطة",
      "خيطي الأطراف بغرزة متينة (مثل غرزة السرج) باستخدام الخيط الشمعي",
      "أضيفي زراً معدنياً أو مغناطيسياً للإغلاق",
    ],
    tips: [
      "استخدمي جلداً متوسط السماكة لسهولة الخياطة",
      "صنفري الحواف للحصول على مظهر أنيق",
    ],
    imageUrl:senaatmahfazageld,
    region: "الخليج",
    createdAt: "2024-05-20",
    viewCount: 1,
    featured: false,
  },
  {
    id: "leatherwork-3",
    title: "صناعة جراب مفاتيح جلدي",
    summary: "طريقة يدوية لصناعة جراب مفاتيح أنيق من الجلد الطبيعي",
    category: "leatherwork",
    content:
      "جرابات المفاتيح الجلدية كانت تُستخدم لحفظ المفاتيح بأمان، وتُعد من الإكسسوارات اليومية العملية.",
    ingredients: ["جلد طبيعي (10x5 سم)", "خيط شمعي", "حلقات معدنية للمفاتيح"],
    steps: [
      "قصي الجلد على شكل مستطيل أو شكل مخصص",
      "اثقبي الحواف لخياطة الأطراف",
      "خيطي باستخدام غرزة السرج وثبتي الحلقة المعدنية",
      "يمكن زخرفة الوجه الأمامي بنقش بسيط أو شعار",
    ],
    tips: [
      "استخدمي قطعة جلد سميكة قليلاً لحماية المفاتيح",
      "ضعي لمسة شخصية بالحرق أو النقش",
    ],
    imageUrl: "https://serajah.com/cdn/shop/products/SERAJAH_jpg-144.jpg?v=1669496443",
    region: "الخليج",
    createdAt: "2024-05-20",
    viewCount: 3,
    featured: false
  },
  {
    id: "leatherwork-4",
    title: "صناعة غلاف دفتر جلدي",
    summary: "تصميم غلاف دفتر أنيق من الجلد المستوحى من الحِرَف التقليدية",
    category: "leatherwork",
    content:
      "غلاف الدفتر الجلدي يعكس الطابع التقليدي والاحترافي، ويُستخدم لحفظ الدفاتر أو الكتب الصغيرة.",
    ingredients: ["جلد طبيعي (25x30 سم)", "مطاط للتثبيت", "خيط شمعي", "إبرة"],
    steps: [
      "قصي الجلد بحسب مقاس الدفتر",
      "خيطي الجيوب الجانبية أو زوايا التثبيت",
      "ركّبي شريطاً مطاطياً حول الغلاف لإغلاقه",
      "زيني الغلاف إن رغبتِ بالنقش أو الحرق",
    ],
    tips: [
      "اختاري جلداً ناعماً وقابل للطي لتجنب التشققات",
      "يمكنك إضافة جيب داخلي صغير للبطاقات",
    ],
    imageUrl: "https://m.media-amazon.com/images/I/61thLSzxvhL._AC_UF1000,1000_QL80_.jpg",
    region: "الخليج",
    createdAt: "2024-05-20",
    viewCount: 4,
    featured: false
  },
  {
    id: "leatherwork-5",
    title: "صناعة مشبك نقود جلدي",
    summary: "طريقة صنع مشبك بسيط وأنيق للنقود من الجلد الطبيعي",
    category: "leatherwork",
    content:
      "مشبك النقود الجلدية يُستخدم لحمل الأوراق النقدية بطريقة مدمجة، وقد كانت شائعة في المجتمعات البدوية بسبب بساطتها.",
    ingredients: ["جلد سميك (15x7 سم)", "مشبك معدني", "خيط شمعي"],
    steps: [
      "قصي الجلد إلى شكل مستطيل",
      "اثقبي منتصف الجلد لتثبيت المشبك المعدني",
      "ثبتي المشبك وقومي بطي الجلد حوله",
      "خيطي الأطراف إذا رغبتِ بتقسيمات إضافية",
    ],
    tips: [
      "اختاري لون جلد داكن لمظهر أكثر كلاسيكية",
      "اختبري المشبك عدة مرات للتأكد من متانته",
    ],
    imageUrl: "https://m.media-amazon.com/images/I/71lrhl3P56L.jpg",
    region: "الخليج",
    createdAt: "2024-05-20",
    viewCount: 2,
    featured: false
  },
  {
    id: "leatherwork-6",
    title: "صناعة جراب نظارات جلدي",
    summary: "صنع جراب جلدي للنظارات بأسلوب يدوي يحافظ عليها بأناقة",
    category: "leatherwork",
    content:
      "جراب النظارات الجلدي يحميها من الخدوش، وكان يُصنع يدوياً في بعض المجتمعات للحفاظ على الأدوات الشخصية.",
    ingredients: ["جلد ناعم (20x10 سم)", "زر مغناطيسي", "خيط شمعي", "إبرة"],
    steps: [
      "قصي الجلد على شكل غلاف مستطيل يُطوى للداخل",
      "خيطي الجانبين بغرزة السرج المتينة",
      "ثبتي الزر المغناطيسي في المنتصف",
      "اختبري الفتح والإغلاق للتأكد من ثباته",
    ],
    tips: [
      "استخدمي جلدًا ناعم الملمس من الداخل لحماية العدسات",
      "أضيفي لمسات زخرفية خارجية مثل الحفر أو الألوان",
    ],
    imageUrl: "https://sc04.alicdn.com/kf/H49e192e8ef104c6bacbe4ff7f5db5a55a/228265559/H49e192e8ef104c6bacbe4ff7f5db5a55a.jpg",
    region: "الخليج",
    createdAt: "2024-05-20",
    viewCount: 3,
    featured: false
  },
  {
    id: "basketry-1",
    title: "نسج سلة من القش",
    summary: "طريقة صنع سلة يدوية من القش لتخزين الأغراض في مصر",
    category: "basketry",
    content:
      "نسج السلال من القش كان يُستخدم في مصر لتخزين الأغراض المنزلية، وهو فن يعتمد على المواد الطبيعية. هذه الطريقة تنتج سلة صغيرة عملية.",
    ingredients: ["1 كيلو قش جاف", "ماء", "خيط قطني"],
    steps: [
      "انقعي القش في الماء لمدة ساعة ليصبح مرناً",
      "ابدئي بنسج القاعدة بشكل دائري باستخدام تقنية اللف",
      "شكلي الجوانب بتكرار نمط النسج مع إضافة خيوط جديدة",
      "اربطي الأطراف بخيط قطني لتثبيت السلة",
    ],
    tips: [
      "حافظي على شد القش أثناء النسج لضمان المتانة",
      "جربي إضافة ألوان طبيعية للقش للحصول على مظهر جذاب",
    ],
    imageUrl:
      "https://www.decoration-one.com/app/uploads/2023/10/623A6149-scaled-1.jpg",
    region: "مصر",
    createdAt: "2024-05-21",
    viewCount: 1,
    featured: false,
  },
  {
    id: "basketry-2",
    title: "صناعة طبق تقديم من القش",
    summary: "طريقة نسج طبق تقديم مسطح من القش لاستخدامه في المناسبات",
    category: "basketry",
    content:
      "الأطباق المصنوعة من القش كانت تُستخدم لتقديم الخبز أو الفاكهة في البيوت المصرية، وتُعد قطعة عملية وجميلة.",
    ingredients: ["500 غرام قش ناعم", "ماء", "إبرة خياطة سميكة", "خيط قطني"],
    steps: [
      "انقعي القش لمدة نصف ساعة لتليينه",
      "شكلي القاعدة بشكل مسطح وابدئي باللف من المركز",
      "ثبتي اللف بالخيط القطني باستخدام الإبرة",
      "استمري حتى تحصلي على شكل دائري مسطح",
    ],
    tips: [
      "يمكنك إدخال ألوان مختلفة من القش لصنع نقوش بسيطة",
      "استخدمي قاعدة خشبية أسفل القطعة أثناء النسج لتثبيت الشكل",
    ],
    imageUrl: "https://i.ytimg.com/vi/qCHPgYUk27M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCFIno1P2flsd70eHcy15_uqrpxjg",
    region: "مصر",
    createdAt: "2024-05-21",
    viewCount: 2,
    featured: false
  },
  {
    id: "basketry-4",
    title: "صناعة سلة خبز من الليف",
    summary: "طريقة صنع سلة خفيفة من الليف الطبيعي لحفظ الخبز",
    category: "basketry",
    content:
      "الليف الطبيعي كان يُستخدم في الريف المصري لصناعة سلال خفيفة لحفظ الخبز والطعام الجاف، لما يتميز به من تهوية ومرونة.",
    ingredients: ["ليف طبيعي", "خيط كتان", "ماء"],
    steps: [
      "اغسلي الليف جيداً وانقعيه قليلاً ليصبح أكثر مرونة",
      "شكلي قاعدة دائرية أو بيضاوية حسب الحاجة",
      "استمري بالنسج بشكل حلزوني مع ربط الخيوط بالكتان",
      "اتركيها تجف في الشمس لتحافظ على شكلها",
    ],
    tips: [
      "يمكن خلط الليف بالقش أو خيوط ملونة للتزيين",
      "استخدمي إطارًا دائريًا لتثبيت الشكل أثناء النسج",
    ],
    imageUrl: "https://i.ytimg.com/vi/O8auvuwfrBE/maxresdefault.jpg",
    region: "مصر",
    createdAt: "2024-05-21",
    viewCount: 2,
    featured: false
  },
  {
    id: "basketry-5",
    title: "صناعة غطاء قش للأواني",
    summary: "صنع غطاء من القش لتغطية أواني الطعام التقليدية",
    category: "basketry",
    content:
      "غطاء القش كان يُستخدم قديماً في مصر لحماية الطعام من الحشرات، ويُصنع بطريقة بسيطة وسريعة.",
    ingredients: ["قش جاف", "ماء", "خيط قنب"],
    steps: [
      "نقعي القش لمدة ساعة حتى يصبح طريًا",
      "ابدئي من نقطة مركزية ولفي القش بشكل مخروطي",
      "ثبتي القش بالخيط بعد كل دورة",
      "اتركي فتحة صغيرة للتهوية في الأعلى إذا لزم الأمر",
    ],
    tips: [
      "تأكدي من شد الخيط بشكل متناسق حتى لا يتفكك القش",
      "أضيفي حافة مزينة بالخيوط الملونة لمظهر جذاب",
    ],
    imageUrl: "https://ultrapal.ultrasawt.com/sites/ultrapal.ultrasawt.com/files/inline-images/WhatsApp%20Image%202022-05-22%20at%201.11.06%20PM.jpeg",
    region: "مصر",
    createdAt: "2024-05-21",
    viewCount: 1,
    featured: false
  },
  {
    id: "carpentry-1",
    title: "صناعة كرسي خشبي",
    summary: "طريقة صنع كرسي بسيط من الخشب باستخدام أدوات تقليدية في مصر",
    category: "carpentry",
    content:
      "النجارة التقليدية في مصر كانت تعتمد على أدوات يدوية لصنع الأثاث المنزلي. هذه الطريقة تنتج كرسياً بسيطاً ومتيناً باستخدام تقنيات أساسية.",
    ingredients: ["2 متر مربع خشب زان أو صنوبر", "مسامير خشبية", "غراء خشب"],
    steps: [
      "قصي الخشب حسب المقاسات: 4 أرجل، ظهر، وقاعدة جلوس",
      "ربطي القطع بالغراء الخشبي لتثبيت الهيكل الأساسي",
      "ثبتي القطع باستخدام المسامير لضمان المتانة",
      "صنفري السطح بورق زجاج للحصول على لمسة ناعمة",
    ],
    tips: [
      "استخدمي ميزان ماء للتأكد من استقامة الكرسي",
      "أضيفي طلاء خشبي للحماية من الرطوبة",
    ],
    imageUrl:
      "https://storage.googleapis.com/furniture-hub/Blogs/%D9%83%D8%B1%D8%B3%D9%8A%20%D8%B3%D9%81%D8%B1%D8%A9%20%D8%BA%D9%8A%D8%B1%20%D9%85%D9%86%D8%AC%D8%AF%20%D9%85%D9%86%20%D8%AC%D9%88%D8%A7/8.webp",
    region: "مصر",
    createdAt: "2024-05-22",
    viewCount: 1,
    featured: false,
  },
  {
    id: "carpentry-2",
    title: "صناعة طاولة قهوة صغيرة",
    summary: "طريقة صنع طاولة بسيطة من الخشب تُستخدم كقطعة أثاث في غرف المعيشة",
    category: "carpentry",
    content:
      "النجارون في مصر كانوا يصنعون طاولات صغيرة للاستخدام اليومي باستخدام الخشب المحلي وأدوات يدوية تقليدية.",
    ingredients: ["لوح خشب (60x60 سم)", "4 أرجل خشبية", "غراء", "مسامير"],
    steps: [
      "قصي اللوح ليكون سطح الطاولة",
      "ثبتي الأرجل الأربع في الزوايا باستخدام الغراء والمسامير",
      "تأكدي من توازن الأرجل بوضع الطاولة على سطح مستوٍ",
      "صنفري الأطراف جيداً ثم أضيفي طبقة ورنيش لحمايته",
    ],
    tips: [
      "استخدمي خشب الزان لمتانة أفضل",
      "يمكن زخرفة سطح الطاولة بالنقش اليدوي أو الحرق على الخشب",
    ],
    imageUrl: "https://elhelow.com/wp-content/uploads/2023/04/gtw-1.jpg",
    region: "مصر",
    createdAt: "2024-05-22",
    viewCount: 1,
    featured: false
  },
  {
    id: "carpentry-4",
    title: "صناعة صندوق تخزين خشبي",
    summary: "طريقة تقليدية لصنع صندوق يستخدم لتخزين الأدوات أو الألعاب",
    category: "carpentry",
    content:
      "الصناديق الخشبية كانت تُستخدم لتخزين الأدوات الزراعية أو أغراض المنزل، وتصنع بسهولة بتجميع الألواح.",
    ingredients: ["4 ألواح خشبية (مقاس 40x30 سم)", "مفصلات معدنية", "مسامير", "مقبض"],
    steps: [
      "ثبتي الجوانب باستخدام الغراء والمسامير",
      "ثبتي الغطاء بمفصلات معدنية",
      "صنفري الزوايا جيداً لتجنب الخدوش",
      "أضيفي مقبض لسهولة الفتح والإغلاق",
    ],
    tips: [
      "يمكنك تزيين الصندوق بالرسم أو النقش على الغطاء",
      "أضيفي طبقة حماية خارجية من الورنيش المقاوم للرطوبة",
    ],
    imageUrl: "https://i.ytimg.com/vi/3W1FInGiYwk/maxresdefault.jpg",
    region: "مصر",
    createdAt: "2024-05-22",
    viewCount: 1,
    featured: false
  },
  {
    id: "carpentry-6",
    title: "صناعة علاقة ملابس خشبية",
    summary: "تصميم علاقة حائطية من الخشب لتعليق الملابس أو المفاتيح",
    category: "carpentry",
    content:
      "العلاقات الخشبية كانت تُستخدم في البيوت المصرية القديمة، وغالباً ما توضع بجوار الباب لتعليق الأغراض اليومية.",
    ingredients: ["لوح خشب صغير (30x10 سم)", "علاقات معدنية", "براغي", "دهان"],
    steps: [
      "صنّفي اللوح جيداً وأضيفي طبقة طلاء مناسبة",
      "ثبتي العلاقات المعدنية على اللوح",
      "ثبتي اللوح بالحائط باستخدام مسامير طويلة",
      "جربي تعليق المفاتيح أو القبعات كديكور عملي",
    ],
    tips: [
      "اختاري ألوان الطلاء التي تناسب ديكور الغرفة",
      "استخدمي خشبًا معاد تدويره لإضافة طابع بيئي",
    ],
    imageUrl: "https://offershopjo.com/wp-content/uploads/2024/05/%D8%B3%D8%AA%D8%A7%D9%86%D8%AF-%D8%AA%D8%B9%D9%84%D9%8A%D9%82-%D9%85%D9%84%D8%A7%D8%A8%D8%B3-%D9%85%D8%B9-%D8%A7%D8%B1%D9%81%D9%81-%D8%AE%D9%84%D9%81%D9%8A%D8%A9-%D9%85%D8%B9%D8%AF%D9%84-1.jpg",
    region: "مصر",
    createdAt: "2024-05-22",
    viewCount: 1,
    featured: false
  },
  {
    id: "beekeeping-2",
    title: "بناء خلية نحل تقليدية",
    summary: "طريقة صنع خلية نحل خشبية مناسبة للمناخ الشامي",
    category: "beekeeping",
    content:
      "في بلاد الشام، تُبنى خلايا النحل من الخشب المتين مع تهوية مناسبة لحماية النحل من الحر والبرد. هذه الطريقة تضمن بيئة صحية للنحل.",
    steps: [
      "قصي ألواح خشبية لتكوين قاعدة، جوانب، وغطاء الخلية",
      "ثبتي القطع باستخدام مسامير وغراء خشب",
      "أضيفي إطارات داخلية لوضع الشمع",
      "اتركي فتحات صغيرة للتهوية من الأعلى والأسفل",
    ],
    warnings: [
      "تأكدي من أن الخشب غير معالج كيميائياً",
      "احرصي على أن تكون التهوية كافية دون تعريض النحل للبرد",
    ],
    tips: [
      "دهني الخشب بزيت بذر الكتان للحماية الطبيعية",
      "ضعي الخلية في مكان ظليل بعيد عن الرياح",
    ],
    imageUrl: "https://img4cdn.haraj.com.sa/userfiles30/2024-10-11/720x1280-1_-GO__MTcyODY2MTA5MDg0MDY0MDI4MzY0Nw.jpg",
    region: "بلاد الشام",
    createdAt: "2024-05-23",
    viewCount: 1,
    featured: false
  },
  {
    id: "beekeeping-3",
    title: "تغذية النحل في الشتاء",
    summary: "طريقة دعم النحل خلال الأشهر الباردة لحماية الخلية من الجوع",
    category: "beekeeping",
    content:
      "في الشتاء، يقل إنتاج الرحيق، ويحتاج النحل لمصدر بديل للطاقة. يتم تحضير محلول سكري طبيعي يُوضع داخل الخلية.",
    steps: [
      "امزجي كيلو سكر مع نصف لتر ماء دافئ",
      "ضعي المحلول في عبوة مخصصة داخل الخلية",
      "تأكدي من تغيير المحلول كل أسبوع لتفادي التخمر",
      "راقبي نشاط النحل بشكل دوري",
    ],
    warnings: [
      "لا تستخدمي العسل الصناعي أو المُعلب في التغذية",
      "احذري من الفتح الزائد للخلية في الطقس البارد",
    ],
    tips: [
      "يمكنك إضافة قليل من خل التفاح الطبيعي لتعزيز المناعة",
      "ضعي قطعة قماش فوق العبوة لمنع الغرق",
    ],
    imageUrl: "https://i.ytimg.com/vi/cjNG0HEZ7Js/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA7-HUfmxzEajs8pWYSfw24lBT5_A",
    region: "بلاد الشام",
    createdAt: "2024-05-23",
    viewCount: 1,
    featured: false
  },
  {
    id: "beekeeping-5",
    title: "كشف أمراض النحل",
    summary: "علامات شائعة تدل على إصابة الخلية بمرض مثل تعفن الحضنة",
    category: "beekeeping",
    content:
      "صحة النحل ضرورية لإنتاج العسل. مراقبة الخلية بانتظام يساعد في اكتشاف الأمراض مبكراً وعلاجها بطرق طبيعية أو بيطرية.",
    steps: [
      "افحصي الحضنة بحثاً عن اليرقات الميتة أو تغير لونها",
      "راقبي سلوك النحل إذا كان بطيئاً أو عدائياً بشكل غير معتاد",
      "تفقدي وجود رائحة كريهة أو مادة لزجة داخل الخلية",
      "استشيري مختصاً إن لاحظتِ علامات غير معتادة",
    ],
    warnings: [
      "بعض الأمراض معدية وتنتشر بين الخلايا",
      "احذري من استخدام أدوية دون استشارة خبير نحل",
    ],
    tips: [
      "نظّفي الأدوات جيداً بين كل خلية وأخرى",
      "استخدمي الزيوت العطرية مثل الزعتر للوقاية",
    ],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmO701kUwYojD7XGnI2sqiMhEmTpbj5o22Hp_MY1GS0enctXXv1VJFSsPdBgq8b38cLNg&usqp=CAU",
    region: "بلاد الشام",
    createdAt: "2024-05-23",
    viewCount: 1,
    featured: false
  },
  
  {
    id: "beekeeping-4",
    title: "تربية ملكة النحل",
    summary: "خطوات اختيار وتربية ملكة جديدة لتحسين إنتاج الخلية",
    category: "beekeeping",
    content:
      "ملكة النحل تتحكم في نشاط الخلية، وتربيتها بطريقة صحيحة تؤدي إلى زيادة الإنتاج. يمكن نقل بيضة من خلية قوية وتوفير ظروف مناسبة لها.",
    steps: [
      "اختاري خلية قوية ذات سلالة جيدة",
      "انقلي بيضة عمرها يوم واحد إلى خلية حضنة",
      "أزيلي الملكة القديمة لتشجيع العاملات على تغذية البيضة الملكية",
      "بعد 16 يوماً، افحصي ظهور الملكة الجديدة",
    ],
    warnings: [
      "لا تُدخل الملكة الجديدة في وجود ملكة أخرى",
      "تجنبي تحريك البيوض كثيراً أثناء النقل",
    ],
    tips: [
      "راقبي الخلية لمدة أسبوع بعد إدخال الملكة الجديدة",
      "يفضل استخدام قفص ملكة عند إدخالها أولاً لتأقلم النحل",
    ],
    imageUrl: "https://arabhoneybee.com/wp-content/uploads/2017/11/Queen-rearing2-566x330.jpg",
    region: "بلاد الشام",
    createdAt: "2024-05-23",
    viewCount: 1,
    featured: false
  },
  
  
  {
    id: "beekeeping-1",
    title: "جمع العسل من الخلية",
    summary: "نصائح لجمع العسل بأمان من خلايا النحل في بلاد الشام",
    category: "beekeeping",
    content:
      "تربية النحل في بلاد الشام كانت مصدراً للعسل الطبيعي، وتتطلب مهارة وحذراً لضمان سلامة النحل والمربي. هذه الطريقة تركز على جمع العسل بأمان.",
    steps: [
      "ارتدي ملابس واقية تشمل قفازات وقناعاً للوجه",
      "استخدمي مدخنة لإطلاق الدخان لتهدئة النحل قبل فتح الخلية",
      "أزل الأطراف المملوءة بالعسل بحذر باستخدام أداة رفع",
      "استخرجي العسل باستخدام جهاز الطرد المركزي اليدوي",
    ],
    warnings: [
      "تجنبي إزعاج النحل بحركات مفاجئة",
      "تأكدي من عدم وجود حساسية لديكِ من لسعات النحل",
    ],
    tips: [
      "اعملي في الصباح الباكر عندما يكون النحل أقل نشاطاً",
      "اتركي بعض العسل في الخلية لتغذية النحل",
    ],
    imageUrl:
      "https://images.skynewsarabia.com/images/v1/2022/06/10/1529910/800/450/1-1529910.jpg",
    region: "بلاد الشام",
    createdAt: "2024-05-23",
    viewCount: 1,
    featured: false,
  },

  {
    id: "astronomy-1",
    title: "مراقبة النجوم بالعين",
    summary: "طريقة تحديد النجوم في السماء باستخدام تقنيات تقليدية خليجية",
    category: "astronomy",
    content:
      "مراقبة النجوم كانت تُستخدم في الخليج للملاحة والتنبؤ بالطقس. هذه الطريقة تعتمد على العين المجردة ومعرفة أساسية بالكوكبات.",
    steps: [
      "اختاري مكاناً مظلماً بعيداً عن أضواء المدينة",
      "ابحثي عن كوكبات معروفة مثل الدب الأكبر أو الجبار",
      "استخدمي خريطة نجوم ورقية أو تطبيقاً لتحديد مواقع النجوم",
      "راقبي حركة النجوم على مدار الساعة لفهم دوران السماء",
    ],
    tips: [
      "استخدمي مناظير بسيطة لتحسين الرؤية إذا أمكن",
      "سجلي ملاحظاتك لتتبع التغيرات الموسمية",
    ],
    imageUrl:
      "https://mitzpe-ramon.co.il/wp-content/uploads/2023/05/%D7%AA%D7%A6%D7%A4%D7%99%D7%AA-%D7%9B%D7%95%D7%9B%D7%91%D7%99%D7%9D-%D7%91%D7%9E%D7%A6%D7%A4%D7%94-%D7%A8%D7%9E%D7%95%D7%9F.jpg",
    region: "الخليج",
    createdAt: "2024-05-24",
    viewCount: 1,
    featured: false,
  },
  {
    id: "astronomy-2",
    title: "معرفة الاتجاهات من النجوم",
    summary: "طريقة تحديد الشمال والجنوب باستخدام نجم الشمال في الخليج",
    category: "astronomy",
    content:
      "استخدم أهل الخليج نجم الشمال (قطب الشمال السماوي) لمعرفة الاتجاهات، خاصة في الصحراء أو في البحر. هذه المهارة كانت أساسية في التنقل الليلي.",
    steps: [
      "ابحثي عن كوكبة الدب الأكبر وحددي النجمتين الأخيرتين منها",
      "مددي خطاً وهمياً بين النجمتين للأعلى لتجدي نجم الشمال",
      "نجم الشمال يشير دائماً نحو الشمال الحقيقي",
      "منه يمكن تحديد باقي الاتجاهات: الجنوب خلفك، الشرق على يمينك، والغرب على يسارك",
    ],
    tips: [
      "نجم الشمال لا يتحرك كثيراً في السماء، مما يجعله مرجعاً ثابتاً",
      "مارسي هذه الطريقة في أماكن مظلمة لتكتسبي دقة أعلى",
    ],
    imageUrl: "https://cdn.alweb.com/thumbs/alkaoun/article/fit710x532/%D8%A7%D9%84%D8%AF%D8%A8-%D8%A7%D9%84%D8%A3%D9%83%D8%A8%D8%B1-%D8%A3%D9%87%D9%85-%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AD%D9%82%D8%A7%D8%A6%D9%82.jpg",
    region: "الخليج",
    createdAt: "2024-05-24",
    viewCount: 1,
    featured: false
  },
  {
    id: "astronomy-4",
    title: "رصد الهلال بالعين المجردة",
    summary: "طريقة تقليدية لتحديد بداية الأشهر القمرية في الخليج",
    category: "astronomy",
    content:
      "رؤية الهلال كانت جزءاً من التراث الفلكي في الخليج، خصوصاً لتحديد بدايات رمضان والأعياد، وتعتمد على مهارات دقيقة في التوقيت والمراقبة.",
    steps: [
      "اختاري مكاناً عالياً وخالياً من العوائق نحو الأفق الغربي",
      "ابدئي الرصد بعد غروب الشمس مباشرة",
      "استخدمي منظاراً بسيطاً إذا لم يكن الهلال واضحاً بالعين",
      "سجلي الوقت والشكل الظاهر للهلال لمقارنة الدورات",
    ],
    tips: [
      "السماء الصافية تزيد من فرصة الرؤية الواضحة",
      "يفضل أن يتم الرصد ضمن فريق للحصول على نتائج دقيقة",
    ],
    imageUrl: "https://vid.alarabiya.net/images/2021/05/09/745e610b-e9d4-47ef-bdd5-db0e77292856/745e610b-e9d4-47ef-bdd5-db0e77292856_16x9_1200x676.jpg?width=555&format=jpg",
    region: "الخليج",
    createdAt: "2024-05-24",
    viewCount: 1,
    featured: false
  },
  {
    id: "navigation-2",
    title: "تحديد القبلة من مواقع النجوم",
    summary: "طريقة بدوية لتحديد اتجاه القبلة في الصحراء ليلاً باستخدام النجوم",
    category: "navigation",
    content:
      "كان البدو يعتمدون على مواقع النجوم مثل نجم سهيل لتحديد اتجاه القبلة، خاصة أثناء السفر أو التخييم في أماكن بعيدة عن المساجد والمعالم.",
    steps: [
      "حددي نجم سهيل جنوباً في الأفق المنخفض",
      "استنتجي اتجاه مكة بناءً على موقعك في الخليج (جنوب غرب تقريباً)",
      "قارني الاتجاه مع نجمة القطب لضبط الاتجاه بدقة",
      "ثبتي موقعك بحجر أو عصا لمساعدتك على التوجه عند الصلاة",
    ],
    tips: [
      "استخدمي خريطة النجوم لتأكيد مواقع النجوم الرئيسية",
      "تعلمي الفرق بين النجوم الثابتة والمتحركة لتجنب الخطأ",
    ],
    imageUrl: "https://www.albawabhnews.com/UploadCache/libfiles/690/7/400x225o/642.jpg",
    region: "الخليج",
    createdAt: "2024-05-25",
    viewCount: 1,
    featured: false
  },
  {
    id: "navigation-1",
    title: "الملاحة بالنجوم في الصحراء",
    summary: "طريقة تحديد الاتجاهات باستخدام النجوم في الصحراء الخليجية",
    category: "navigation",
    content:
      "البدو في الخليج كانوا يستخدمون النجوم، خاصة نجمة القطب الشمالي، للملاحة في الصحراء ليلاً. هذه الطريقة تعتمد على تحديد الاتجاهات بدقة.",
    steps: [
      "ابحثي عن نجمة القطب الشمالي باستخدام كوكبة الدب الأصغر",
      "وجهي نفسك بحيث تكون النجمة أمامك لتحديد الاتجاه الشمالي",
      "استخدمي النجوم الأخرى (مثل سهيل) لتأكيد الاتجاهات الأخرى",
      "راقبي السماء بانتظام كل ساعة لتجنب الانحراف عن المسار",
    ],
    tips: [
      "تعلمي التعرف على الكوكبات الأساسية قبل السفر",
      "احملي بوصلة احتياطية في حالة الطقس الغائم",
    ],
    imageUrl:
      "https://static.majalla.com/2023-06/153727.jpg",
    region: "الخليج",
    createdAt: "2024-05-25",
    viewCount: 1,
    featured: false,
  },
  {
    id: "navigation-3",
    title: "الملاحة بالنجوم في البحر",
    summary: "طريقة استخدام النجوم للملاحة البحرية في الخليج قديماً",
    category: "navigation",
    content:
      "الصيادون والبحارة الخليجيون استخدموا النجوم لتحديد المسارات في البحر، خاصة خلال رحلات الغوص على اللؤلؤ أو التنقل بين الموانئ.",
    steps: [
      "حددي نجم القطب الشمالي في السماء ليلاً",
      "راقبي كوكبة الجبار لتحديد اتجاه الجنوب الشرقي",
      "احفظي مواقع النجوم في أوقات مختلفة لتقدير موقعك",
      "تابعي النجوم على خط الأفق لضمان التوجه الصحيح",
    ],
    tips: [
      "سجلي الاتجاهات عند انطلاقك لتعودي من نفس المسار",
      "النجوم تُستخدم مع حركة الأمواج والرياح لتحديد الموقع بدقة أكبر",
    ],
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCY0TZ6BxmgzTTmp58v514IyWix-jD7Js0urDa9iKIXbLh6sg-xN7rUJ4LClPo1XWiBgaaYwWsgUqd6ydXQKCFP1OOBxWsPx4lQIvAXCwsZPLt36U9UmgFjRL_YOoXIx7TCqbswJ_kkBjX4RkMU-Rsv2YFj4AEWVSisPSfVCVW4eFgSD6T7KCNPCRJcbM/s1200-rw/at-night-a-sailor-on-a-sky-ship-with-a-star-in-it-ultra-hd-realistic-vivid-colors-highly-detail%20(1).webp",
    region: "الخليج",
    createdAt: "2024-05-25",
    viewCount: 1,
    featured: false
  },
  {
    id: "navigation-5",
    title: "استخدام ظل القمر والنجوم لتقدير الاتجاه",
    summary: "طريقة بدوية لتحديد الاتجاهات ليلاً بدون أدوات باستخدام الضوء والظل",
    category: "navigation",
    content:
      "في حال غياب البوصلة أو الخرائط، استخدم البدو ظل الأجسام الناتج عن القمر وتوزيع النجوم في السماء لتحديد موقعهم.",
    steps: [
      "راقبي موقع القمر وحددي اتجاه ظله",
      "قارني بين الظل وموقع نجم القطب لتأكيد الاتجاه",
      "استخدمي أعمدة أو عصا لرصد تغير الظلال على الرمال",
      "اجمعي بين عدة مؤشرات فلكية وظلية للوصول للدقة",
    ],
    tips: [
      "كلما كان القمر بدراً، كانت الظلال أوضح وأسهل للتحليل",
      "احتفظي بسجل شخصي لحركة الظل في أماكن مألوفة لديكِ",
    ],
    imageUrl: "https://modo3.com/thumbs/fit630x300/78405/1477554695/%D9%83%D9%84%D8%A7%D9%85_%D8%AC%D9%85%D9%8A%D9%84_%D8%B9%D9%86_%D8%A7%D9%84%D9%82%D9%85%D8%B1.jpg",
    region: "الخليج",
    createdAt: "2024-05-25",
    viewCount: 1,
    featured: false
  },
  {
    id: "navigation-6",
    title: "الملاحة من موقع الشمس والقمر نهاراً",
    summary: "تقنية تقليدية لتحديد الاتجاه في النهار باستخدام الشمس أو القمر",
    category: "navigation",
    content:
      "في حال صعوبة الرؤية الليلية، استخدم البدو الشمس لتحديد الشرق والغرب، والقمر أحياناً عند ظهوره في النهار لتأكيد المسار.",
    steps: [
      "حددي موقع شروق الشمس كاتجاه شرقي واضح",
      "في الظهيرة تكون الشمس جنوبية في الخليج",
      "ظلال الأشجار أو الصخور تدلك على الاتجاه المعاكس للشمس",
      "استخدمي دوران القمر في النهار لمتابعة الاتجاه إذا ظهر",
    ],
    tips: [
      "تحركي في الصباح الباكر أو العصر لتجنب حرارة الشمس",
      "ارصدي تغيرات الظلال كل ساعة لضبط الاتجاه",
    ],
    imageUrl: "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/moon-g3761074cc_1920.jpg",
    region: "الخليج",
    createdAt: "2024-05-25",
    viewCount: 1,
    featured: false
  },
  {
    id: "poetry-1",
    title: "كتابة قصيدة شعبية",
    summary: "نصائح لكتابة الشعر الشعبي العربي في بلاد الشام",
    category: "poetry",
    content:
      "الشعر الشعبي في بلاد الشام كان وسيلة للتعبير عن الحياة اليومية والمشاعر، ويتميز بلغته البسيطة وإيقاعه الجذاب. هذه الطريقة تساعد على كتابة قصيدة شعبية.",
    steps: [
      "اختاري موضوعاً شعبياً مثل الحب، الوطن، أو الطبيعة",
      "استخدمي لغة بسيطة وقريبة من اللهجة المحلية",
      "حافظي على إيقاع وقافية متناسقة (مثل بحر الرجز أو الهزج)",
      "جربي إلقاء القصيدة أمام الآخرين لاختبار تأثيرها",
    ],
    tips: [
      "اقرئي أشعار شعبية تقليدية لفهم الأسلوب",
      "استخدمي الصور البلاغية مثل التشبيه لإثراء القصيدة",
    ],
    imageUrl:
      "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    region: "بلاد الشام",
    createdAt: "2024-05-26",
    viewCount: 1,
    featured: false,
  },
  {
    id: "poetry-5",
    title: "تلحين القصيدة الشعبية",
    summary: "خطوات لتلحين قصيدة شعبية وجعلها صالحة للغناء",
    category: "poetry",
    content:
      "تلحين الشعر الشعبي يحوّله إلى أغنية محكية تُغنّى في الأفراح والاحتفالات. ويعتمد على التكرار والوزن الموسيقي السلس.",
    steps: [
      "اختاري بحراً شعرياً بسيطاً يمكن تلحينه بسهولة",
      "قومي بتجريب عدة ألحان شعبية على الأبيات",
      "ركّزي على التكرار في بعض الكلمات لإضفاء لحن واضح",
      "اختبري التلحين مع آلة موسيقية بسيطة مثل العود أو الربابة",
    ],
    tips: [
      "استمعي لأغاني شعبية قديمة لاستلهام النمط",
      "استخدمي نغمة معتدلة تناسب الإلقاء الجماهيري",
    ],
    imageUrl: "https://pub-a0fe29ed512a454eb858af73b205c8eb.r2.dev/storage/thumbs/28/thumb519.jpg",
    region: "بلاد الشام",
    createdAt: "2024-05-26",
    viewCount: 1,
    featured: false
  },
  {
    id: "poetry-6",
    title: "جمع الأمثال في أبيات شعرية",
    summary: "ربط الأمثال الشعبية في بيتين أو أكثر لخلق حكمة منغومة",
    category: "poetry",
    content:
      "الشعر الشعبي كثيراً ما يدمج الأمثال المعروفة في أبياته ليمنحها مصداقية وقوة تعبيرية تصل بسرعة إلى المتلقي.",
    steps: [
      "اكتبي مجموعة من الأمثال المتعلقة بموضوع محدد",
      "رتبيها حسب المعنى أو التسلسل المنطقي",
      "حاولي إعادة صياغتها لتتناسب مع القافية والوزن",
      "اربطي كل مثل ببيت شعري بسيط",
    ],
    tips: [
      "الأمثال تضيف عمقاً شعرياً ومعنى مألوفاً للمستمع",
      "يمكن استخدام مثلين في كل بيت لتقوية الرسالة",
    ],
    imageUrl: "https://www.fay3.com/iOwFGOgfC5u/download",
    region: "بلاد الشام",
    createdAt: "2024-05-26",
    viewCount: 1,
    featured: false
  },
  
  {
    id: "markets-1",
    title: "التسوق في الأسواق القديمة",
    summary: "نصائح للتعامل في الأسواق التقليدية المصرية",
    category: "markets",
    content:
      "الأسواق القديمة في مصر، مثل خان الخليلي، كانت مركزاً للتجارة والتواصل الاجتماعي. هذه النصائح تساعد على التسوق بذكاء ولباقة.",
    steps: [
      "ابدئي بالتجول في السوق لمعرفة الأسعار والمنتجات المتاحة",
      "تفاوضي بابتسامة ولباقة، وابدئي بسعر أقل من المعروض",
      "افحصي البضائع جيداً للتأكد من جودتها قبل الشراء",
      "احملي نقوداً صغيرة لتسهيل الدفع وتجنب مشاكل التغيير",
    ],
    tips: [
      "تعلمي بعض العبارات المحلية مثل 'غالي أوي' لتسهيل التفاوض",
      "ارتدي ملابس مريحة لأن التسوق قد يستغرق وقتاً",
    ],
    imageUrl:
      "https://hurghadalovers.com/wp-content/uploads/2022/10/%D8%AE%D8%A7%D9%86-%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84%D9%8A-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1-%D8%A7%D9%83%D8%AA%D8%B4%D9%81-%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-%D9%88%D8%AD%D9%82%D8%A7%D9%8A%D9%94%D9%82-%D8%A7%D9%94%D8%B4%D9%87%D8%B1-%D8%A7%D9%94%D8%AD%D9%8A%D8%A7%D8%A1-%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9-%D8%A7%D9%84%D9%82%D8%AF%D9%8A%D9%85%D8%A9-%D9%88%D9%85%D8%A7-%D9%87%D9%8A-%D9%85%D9%88%D8%A7%D8%B9%D9%8A%D8%AF-%D8%A7%D9%84%D8%B9%D9%85%D9%84.jpg",
    region: "مصر",
    createdAt: "2024-05-28",
    viewCount: 1,
    featured: false,
  },
  {
    id: "markets-2",
    title: "شراء التوابل من العطّار",
    summary: "دليل لاختيار التوابل الطازجة من دكاكين العطارين التقليديين",
    category: "markets",
    content:
      "محلات العطارة في الأسواق الشعبية المصرية كانت مرجعاً للروائح والنكهات. اختيار التوابل الجيدة يعتمد على النظر والرائحة والسؤال عن المصدر.",
    steps: [
      "اسألي العطار عن مصدر التوابل وتاريخ طحنها",
      "اشمي العينة للتأكد من قوتها ونقاوتها",
      "اشتري كميات صغيرة للحفاظ على النكهة",
      "خزني التوابل في علب محكمة الغلق بعيداً عن الضوء",
    ],
    tips: [
      "اختاري التوابل التي تُطحن أمامك إن أمكن",
      "اسألي عن خلطات شعبية مثل بهارات الكشري أو الملوخية",
    ],
    imageUrl: "https://media.elwatannews.com/media/img/mediaarc/large/14533237911664037437.jpg",
    region: "مصر",
    createdAt: "2024-05-28",
    viewCount: 1,
    featured: false
  },
  {
    id: "markets-3",
    title: "زيارة سوق الجمعة",
    summary: "نصائح للتجول في سوق الجمعة الشهير وشراء السلع المستعملة",
    category: "markets",
    content:
      "سوق الجمعة في القاهرة من أشهر أسواق البضائع المستعملة والنادرة. يتطلب التجول فيه مهارة في الفحص والمساومة.",
    steps: [
      "اذهبي باكراً للحصول على أفضل المعروضات",
      "تفقدي البضاعة جيداً قبل الشراء، خصوصاً الإلكترونية أو الملابس",
      "تفاوضي على السعر دائماً، ولا تقبلي أول عرض",
      "احتفظي بمبلغ نقدي محدد للسيطرة على الميزانية",
    ],
    tips: [
      "البسي حذاء مريح لأن السوق كبير وقد يستغرق وقتاً طويلاً",
      "اسألي البائعين عن قصص الأشياء القديمة، فهم يعرفون الكثير!",
    ],
    imageUrl: "https://media.elwatannews.com/media/img/mediaarc/large/11481200141599316824.jpg",
    region: "مصر",
    createdAt: "2024-05-28",
    viewCount: 1,
    featured: false
  },
  {
    id: "falconry-2",
    title: "اختيار الصقر المناسب",
    summary: "كيف تختار الصقر المناسب للصيد حسب النوع والعمر",
    category: "falconry",
    content:
      "اختيار الصقر خطوة حاسمة في تدريب الصيد، حيث تختلف القدرات حسب النوع (الحر، الشاهين، الوكري) والعمر والصحة العامة.",
    steps: [
      "حددي الهدف من الصيد (طيور، أرانب...) لاختيار النوع المناسب",
      "افحصي العينين والريش والصدر للتأكد من الصحة الجيدة",
      "اختاري صقراً صغيراً نسبياً لسهولة التدريب",
      "اطلبي استشارة من مربٍ محترف قبل الشراء",
    ],
    tips: [
      "الصقر الحر أكثر هدوءاً ومناسب للمبتدئين",
      "الصقور المحلية قد تتأقلم أسرع من المستوردة",
    ],
    imageUrl: "https://blog.ajsrp.com/wp-content/uploads/2025/03/%D8%A3%D8%BA%D9%84%D9%89-%D8%A3%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D8%B5%D9%82%D9%88%D8%B1-696x398.jpg",
    region: "الخليج",
    createdAt: "2024-05-29",
    viewCount: 1,
    featured: false
  },
  {
    id: "falconry-3",
    title: "الرعاية اليومية للصقر",
    summary: "أساسيات العناية بالصقر من تغذية ونظافة وصحة",
    category: "falconry",
    content:
      "الرعاية اليومية تضمن بقاء الصقر نشيطاً وصحياً، وتتضمن التغذية السليمة، المراقبة الصحية، والتنظيف المنتظم.",
    steps: [
      "قدمي وجبات منتظمة ومتوازنة (لحم طازج خالٍ من العظام الكبيرة)",
      "افحصي الصقر يومياً بحثاً عن أي جروح أو علامات خمول",
      "نظفي القفص أو المكان المخصص بانتظام لتجنب الأمراض",
      "وفري له مكاناً ظليلاً مع تهوية جيدة",
    ],
    tips: [
      "استخدمي قفازات عند التعامل مع الصقر لتفادي الخدوش",
      "راقبي وزنه يومياً لأن تغيّره يؤثر على أدائه",
    ],
    imageUrl: "https://arabic.animalgoodnews.com/images/20230925/202309251531217887-720x.webp",
    region: "الخليج",
    createdAt: "2024-05-29",
    viewCount: 1,
    featured: false
  },
  
  {
    id: "falconry-1",
    title: "تدريب الصقر للصيد",
    summary: "خطوات أساسية لتدريب الصقور للصيد في التراث الخليجي",
    category: "falconry",
    content:
      "الصيد بالصقور تقليد خليجي قديم يعتمد على المهارة والصبر. تدريب الصقر يتطلب بناء علاقة ثقة بين المدرب والطائر.",
    steps: [
      "اختاري صقراً صغيراً (يفضل من 6 إلى 12 شهراً) لتسهيل التدريب",
      "استخدمي غطاء الرأس لتهدئة الصقر أثناء التدريب",
      "علميه العودة إليك باستخدام طعام (مثل قطع اللحم) كمكافأة",
      "مارسي التدريب يومياً في مكان مفتوح لتحسين مهارات الصيد",
    ],
    warnings: [
      "استشيري مختصاً في الصقور لتجنب إيذاء الطائر",
      "تأكدي من الامتثال للقوانين المحلية المتعلقة بتربية الصقور",
    ],
    tips: [
      "كوني صبورة، فقد يستغرق التدريب أسابيع",
      "حافظي على وزن الصقر لضمان نشاطه",
    ],
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8s-u2VY87oz_zU86K-V_7ER8g8cv3xKJLJqZkk-rNKlfyMjr0rog3iyyTBFQl5ZUiAcbAGaDvNkx7DHdBk_OAe8DGMiY5JN4k6-5hKcfQX2r-ZJBvQjDslefCOXAoJtQ2mdPMKdE3WN0/s640/%25D8%25AA%25D8%25AF%25D8%25B1%25D9%258A%25D8%25A8+%25D8%25A7%25D9%2584%25D8%25B5%25D9%2582%25D9%2588%25D8%25B1+%252811%2529.jpg",
    region: "الخليج",
    createdAt: "2024-05-29",
    viewCount: 1,
    featured: false,
  },
  {
    id: "camel_racing-2",
    title: "اختيار اللإبل المناسب للسباق",
    summary: "أسس اختيار الإبل الأفضل للسباقات الخليجية",
    category: "camel_racing",
    content:
      "نجاح الإبل في السباقات يعتمد بشكل كبير على سلالتها، لياقتها، وسرعتها. من المهم اختيار الجمل المناسب بناءً على معايير واضحة.",
    steps: [
      "ركزي على سلالات معروفة بالسرعة مثل (العُمانية أو السُّودانية)",
      "افحصي الأرجل والصدر للتأكد من القوة الجسدية",
      "اختاري جملاً بعمر بين 3-6 سنوات لذروة اللياقة",
      "راقبي حركة الجري الطبيعية وسرعة الاستجابة",
    ],
    tips: [
      "استشيري مدرب سباقات محترف قبل الشراء",
      "تابعي سجل الجمل إذا كان قد شارك سابقاً",
    ],
    imageUrl: "https://media.assettype.com/ajel%2F2022-06%2Fa05bbf4f-9d79-476c-a3e5-8a5d087ddfec%2F1c4f5fdf-ed92-4dc6-90a9-3f5e9437f02f.jpeg",
    region: "الخليج",
    createdAt: "2024-05-30",
    viewCount: 1,
    featured: false
  },
  {
    id: "camel_racing-3",
    title: "أنظمة التغذية للإبل الرياضية",
    summary: "ما يجب أن تأكله الإبل لتحسين الأداء في السباقات",
    category: "camel_racing",
    content:
      "الغذاء الجيد يُحدث فرقاً كبيراً في قدرة الإبل على التحمل والسرعة. الأنظمة الغذائية يجب أن تكون متوازنة وغنية بالطاقة.",
    steps: [
      "وفري شعيراً نظيفاً وخالياً من العفن",
      "أضيفي التمر المهروس والملح كمصدر طاقة",
      "قللي الأعلاف الثقيلة قبل السباق بيوم",
      "قدّمي الماء بكميات معتدلة لتفادي التُخمة",
    ],
    tips: [
      "راجعي جدول التغذية مع طبيب بيطري متخصص",
      "استخدمي مكملات معدنية عند الحاجة",
    ],
    imageUrl: "https://hcblg.com/wp-content/uploads/2024/08/%D8%AA%D8%BA%D8%B0%D9%8A%D8%A9-%D8%A7%D9%84%D8%A5%D8%A8%D9%84-%D8%AA%D8%AD%D8%B3%D9%8A%D9%86-%D8%A7%D9%84%D8%B5%D8%AD%D8%A9-%D9%88%D8%A7%D9%84%D8%A3%D8%AF%D8%A7%D8%A1.webp",
    region: "الخليج",
    createdAt: "2024-05-30",
    viewCount: 1,
    featured: false
  },
  {
    id: "camel_racing-5",
    title: "العناية الصحية قبل السباق",
    summary: "الإجراءات الطبية والوقائية التي تسبق السباقات",
    category: "camel_racing",
    content:
      "الصحة الجيدة عامل أساسي في تفوق الإبل في السباق. يجب الحرص على الفحوصات الوقائية والراحة الكافية.",
    steps: [
      "أجري فحصاً طبياً شاملاً قبل أسبوع من السباق",
      "راقبي الجلد والعينين للتأكد من خلوها من العدوى",
      "امتنعي عن إعطاء أدوية دون وصف بيطري",
      "اتركي الجمل يرتاح في بيئة مريحة قبل السباق بيومين",
    ],
    tips: [
      "سجلي ملاحظاتك اليومية لمتابعة أي تغيّرات صحية",
      "استخدمي كريمات للقدم إذا ظهرت أي تشققات",
    ],
    imageUrl: "https://beta.akhbaar24.com/uploads/imported_images/d982f291-9e01-49e1-b75f-5ae7f1d4fa29.jpg",
    region: "الخليج",
    createdAt: "2024-05-30",
    viewCount: 1,
    featured: false
  },
  {
    id: "camel_racing-4",
    title: "التدريب اليومي للإبل المتسابقة",
    summary: "كيفية تنظيم تدريبات الإبل لرفع اللياقة والتحمل",
    category: "camel_racing",
    content:
      "التدريب المنتظم أساس نجاح الإبل في السباقات. يجب أن يشمل الجري، التحفيز، والراحة الدورية.",
    steps: [
      "ابدئي بجولات مشي يومية لمسافات قصيرة",
      "زيدي مدة الجري تدريجياً حسب التحمل",
      "استخدمي جهاز تحكم روبوتي لتعويد الجمل على السباق",
      "تابعي نبض الجمل بعد كل تدريب لتقييم الأداء",
    ],
    tips: [
      "اختاري ساعات الصباح الباكر لتفادي حرارة الشمس",
      "راقبي سلوك الجمل، فالانزعاج قد يشير إلى تعب أو ألم",
    ],
    imageUrl: "https://img.youm7.com/ArticleImgs/2024/9/22/2674769-%D8%A7%D9%84%D9%87%D8%AC%D9%86-%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D8%B1%D9%83-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%A8%D8%A7%D9%82.JPG",
    region: "الخليج",
    createdAt: "2024-05-30",
    viewCount: 1,
    featured: false
  },
  {
    id: "camel_racing-1",
    title: "تحضير الإبل للسباق",
    summary: "نصائح لتجهيز الإبل لسباقات الخليج التقليدية",
    category: "camel_racing",
    content:
      "سباقات الإبل تقليد خليجي يعكس القوة والسرعة، وتحضير الإبل يتطلب تغذية جيدة وتدريب مستمر لضمان أداء متميز.",
    steps: [
      "اختاري إبلاً صحية وسريعة بعمر مناسب (3-7 سنوات)",
      "دربيها يومياً على المسار لمدة ساعة لتحسين اللياقة",
      "أطعميها غذاء غنياً بالطاقة مثل الشعير والتمر",
      "تأكدي من راحتها قبل السباق بتوفير ماء ومكان مظلل",
    ],
    tips: [
      "استشيري بيطرياً لفحص صحة الإبل قبل التدريب",
      "قللي التدريب قبل السباق بيوم لتجنب الإرهاق",
    ],
    imageUrl:sebakatelabel,
    region: "الخليج",
    createdAt: "2024-05-30",
    viewCount: 1,
    featured: false,
  },
  {
    id: "bedouin_life-1",
    title: "إقامة خيمة بدوية",
    summary: "طريقة إعداد خيمة تقليدية في الصحراء الخليجية",
    category: "bedouin_life",
    content:
      "الخيمة كانت المنزل الأساسي للبدو في الصحراء الخليجية، وتُصمم لتكون متينة وسهلة النقل. هذه الطريقة تصف كيفية إقامة خيمة بسيطة.",
    ingredients: [
      "قماش قوي مقاوم للماء (مثل الصوف أو القطن السميك)",
      "4 أعمدة خشبية",
      "حبال قوية",
    ],
    steps: [
      "اختاري مكاناً محمياً من الرياح ومستوياً لإقامة الخيمة",
      "ثبتي الأعمدة في الأرض بشكل مربع أو مستطيل",
      "غطي الأعمدة بالقماش وربطيه بالحبال بإحكام",
      "أضيفي سجاداً داخلياً أو بطانيات لتوفير الراحة",
    ],
    tips: [
      "استخدمي أوتاداً قوية لتثبيت الحبال في الرمال",
      "وجهي مدخل الخيمة بعيداً عن اتجاه الرياح",
    ],
    imageUrl:
      "https://png.pngtree.com/thumb_back/fh260/background/20221206/pngtree-the-bedouins-tent-in-the-saharamorocco-journey-tourism-house-photo-image_20807698.jpg",
    region: "الخليج",
    createdAt: "2024-05-31",
    viewCount: 1,
    featured: false,
  },
  {
    id: "bedouin_life-2",
    title: "إعداد الطعام في الخيمة البدوية",
    summary: "طريقة تحضير الوجبات التقليدية في الخيمة الصحراوية",
    category: "bedouin_life",
    content:
      "الطعام في الحياة البدوية يُعدّ ببساطة باستخدام الأدوات المتوفرة في الصحراء. الأطعمة غالباً ما تكون غنية باللحوم والألبان.",
    ingredients: [
      "لحم غنم أو إبل",
      "أرز أو بر",
      "توابل مثل الكمون والزنجبيل",
      "زيت زيتون أو سمن",
    ],
    steps: [
      "شوي اللحم فوق النار أو في التنور البسيط",
      "سلق الأرز مع إضافة التوابل والسمن",
      "تحضير اللبن الطازج كمرافق للوجبة",
      "قدمي الطعام في صحون مسطحة أو أواني مصنوعة يدوياً",
    ],
    tips: [
      "استخدمي الحطب المحلي للحصول على طعم مميز للطعام",
      "تحضير الطعام جماعياً يعزز من الروابط الاجتماعية بين أفراد القبيلة",
    ],
    imageUrl: "https://images.deliveryhero.io/image/talabat/Menuitems/%D8%B4%D9%85%D8%A8%D8%B1%D9%8A_%D9%85%D9%86%D8%AF%D9%8A_%D8%A7%D8%B1%D8%B2638041495799727606.jpg",
    region: "الخليج",
    createdAt: "2024-05-31",
    viewCount: 1,
    featured: false
  },
  {
    id: "bedouin_life-3",
    title: "ركوب الجمال في الصحراء",
    summary: "تقاليد ركوب الجمال في الصحراء الخليجية",
    category: "bedouin_life",
    content:
      "الجمال كانت وسيلة النقل الرئيسية للبدو في الصحراء. تعليم ركوب الجمل يتطلب مهارة ومعرفة جيدة بالحيوان.",
    steps: [
      "اختاري جملاً هادئاً وصحياً لبدء التدريب",
      "ثبتي الركاب بحذر على ظهر الجمل قبل الركوب",
      "ركبي الجمل ببطء وتوازني للحفاظ على استقرارك",
      "تدربي على التوجيه باستخدام الحبال مع المربي المختص",
    ],
    tips: [
      "كوني صبورة أثناء تعلم ركوب الجمل",
      "اختاري مسارات صحراوية سلسة للتمرين الأولي",
    ],
    imageUrl: "https://vootours.com/wp-content/uploads/2017/04/Camel-Riding.jpg",
    region: "الخليج",
    createdAt: "2024-05-31",
    viewCount: 1,
    featured: false
  },
  {
    id: "bedouin_life-4",
    title: "الملابس التقليدية للبدو",
    summary: "تفاصيل عن الملابس التقليدية التي يرتديها البدو في الخليج",
    category: "bedouin_life",
    content:
      "الملابس التقليدية للبدو تُصمم لتحميهم من ظروف الصحراء القاسية. تختلف الملابس حسب الجنس والموسم.",
    ingredients: [
      "ثوب طويل من القماش القطني أو الصوفي",
      "شال رأس أو غطاء الرأس (الكوفية أو الشماغ)",
      "أحذية جلدية أو صندل منسوج",
    ],
    steps: [
      "اختاري ثوباً خفيفاً في الصيف، وثوباً سميكاً في الشتاء",
      "غطي الرأس لحمايته من الشمس باستخدام الكوفية أو الشماغ",
      "ارتدي الأحذية الجلدية لتسهيل الحركة على الرمال",
    ],
    tips: [
      "الملابس البدوية تتميز بكونها مريحة ومتينة",
      "استخدمي الألوان الفاتحة في الصيف لتقليل الامتصاص الحراري",
    ],
    imageUrl:elmalabselbadawya,
    region: "الخليج",
    createdAt: "2024-05-31",
    viewCount: 1,
    featured: false
  },
  {
    id: "bedouin_life-5",
    title: "الضيافة البدوية",
    summary: "طريقة استقبال الضيوف وتقديم الضيافة في الثقافة البدوية",
    category: "bedouin_life",
    content:
      "الضيافة جزء مهم من تقاليد البدو، حيث يُعتبر استقبال الضيوف وإكرامهم من الواجبات المقدسة.",
    steps: [
      "استقبل الضيف بحفاوة وابتسامة دافئة",
      "قدم للضيف القهوة العربية أو الشاي",
      "قدّم الطعام التقليدي مثل التمر واللبن",
      "تأكد من راحة الضيف بتوفير مكان مناسب للجلوس",
    ],
    tips: [
      "في الصحراء، تكون الخيمة هي المكان المناسب لاستقبال الضيوف",
      "قدّم الطعام المحلي الطازج لإظهار الكرم",
    ],
    imageUrl: "https://cdn.arabsstock.com/uploads/images/182669/interior-decoration-of-the-traditional-thumbnail-182669.webp",
    region: "الخليج",
    createdAt: "2024-05-31",
    viewCount: 1,
    featured: false
  },
  
  {
    id: "folklore-1",
    title: "رواية حكاية عنترة بن شداد",
    summary: "فن سرد قصص الفولكلور العربي عن عنترة في بلاد الشام",
    category: "folklore",
    content:
      "حكايات عنترة بن شداد تعكس البطولة والشجاعة في التراث العربي، وكانت تُروى في بلاد الشام لإلهام الأجيال. هذه الطريقة تركز على سرد مشوق.",
    steps: [
      "اجمعي الأطفال أو العائلة في مكان هادئ ومريح",
      "اسردي قصة عنترة بأسلوب مشوق، مع التركيز على مغامراته وحبه لعبلة",
      "ركزي على تفاصيل البطولة مثل معاركه وشجاعته",
      "أنهي الحكاية بحكمة أو درس، مثل أهمية العدل والشرف",
    ],
    tips: [
      "استخدمي لغة بسيطة تناسب الأطفال إذا كانوا الجمهور",
      "أضيفي لمسات درامية مثل توقف مؤقت لزيادة التشويق",
    ],
    imageUrl:antarebnshadad,
    region: "بلاد الشام",
    createdAt: "2024-06-01",
    viewCount: 1,
    featured: false,
  },
  {
    id: "folklore-4",
    title: "حكاية الزير سالم",
    summary: "فن سرد قصة الزير سالم في التراث العربي",
    category: "folklore",
    content:
      "حكاية الزير سالم هي من أشهر الحكايات في الفولكلور العربي. تسرد قصة الأخوة والصراع على الثأر، وتمثل شجاعة الزير ومواقفه.",
    steps: [
      "ابدئي بالقصة من البداية، مع التأكيد على تاريخ الصراع بين القبائل",
      "ركزي على الشخصيات مثل الزير سالم وحربه في معركة مؤتة",
      "احرصي على إبراز معاني الشجاعة والإقدام في سرد الأحداث",
      "انتهي الحكاية بتعليم قيم الصدق والعدالة",
    ],
    tips: [
      "استخدمي أسلوب السرد التقليدي لزيادة التفاعل",
      "توقفي عند لحظات درامية لزيادة التأثير على المستمعين",
    ],
    imageUrl: "https://s3.amazonaws.com/jarir-files/images/original/12873.jpg",
    region: "الجزيرة العربية",
    createdAt: "2024-06-02",
    viewCount: 1,
    featured: false
  },
  {
    id: "folklore-5",
    title: "حكاية ليلى والذئب",
    summary: "فن سرد حكاية ليلى والذئب في التراث العربي",
    category: "folklore",
    content:
      "حكاية ليلى والذئب هي حكاية مشهورة تعكس مفهوم الحذر من الغرباء. قد يتم سرد هذه القصة للأطفال في الحقول أو حول النار.",
    steps: [
      "ابدئي القصة بشخصية ليلى وهي في طريقها إلى جدتها",
      "ركزي على أهمية الحذر والاستماع للنصائح",
      "اشركي الأطفال في القصة عبر أسئلة تشجعهم على التفكير",
      "انهي الحكاية بحكمة حول الشجاعة والطاعة",
    ],
    tips: [
      "استخدمي أصوات مختلفة للذئب ولبقية الشخصيات لزيادة التشويق",
      "حاولي أن تكوني تفاعلية مع الجمهور بإشراكهم في لحظات معينة من القصة",
    ],
    imageUrl: "https://www.edarabia.com/ar/wp-content/uploads/2020/04/story-of-laila-and-wolf-and-her-international-fame-in-childrens-stories.jpg",
    region: "الشرق الأوسط",
    createdAt: "2024-06-02",
    viewCount: 1,
    featured: false
  },
  
  {
    id: "architecture-1",
    title: "تصميم فناء تقليدي",
    summary: "نصائح لبناء فناء بأسلوب تقليدي مصري للتجمعات العائلية",
    category: "architecture",
    content:
      "الفناء التقليدي في مصر كان مكاناً للتجمع العائلي والاسترخاء، ويتميز بالبساطة والعناصر الطبيعية. هذه الطريقة تصف كيفية تصميم فناء منزلي.",
    ingredients: [
      "حجارة طبيعية أو طوب",
      "نباتات عطرية (مثل الياسمين أو الريحان)",
      "مقاعد خشبية أو حجرية",
    ],
    steps: [
      "اختاري مكاناً مشمساً في المنزل مع مساحة كافية",
      "رصي الحجارة أو الطوب لتشكيل أرضية متينة وجميلة",
      "أضيفي نباتات عطرية في أصص أو على حواف الفناء",
      "ضعي مقاعد خشبية أو حجرية للجلوس مع وسائد للراحة",
    ],
    tips: [
      "أضيفي مظلة قماشية للحماية من الشمس",
      "استخدمي إضاءة خافتة مثل الفوانيس لأجواء دافئة ليلاً",
    ],
    imageUrl:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    region: "مصر",
    createdAt: "2024-06-02",
    viewCount: 1,
    featured: false,
  },
  {
    id: "architecture-4",
    title: "تصميم حديقة بسيطة",
    summary: "نصائح لتصميم حديقة منزلية صغيرة وسهلة",
    category: "architecture",
    content:
      "تصميم حديقة منزلية بسيطة يمكن أن يعزز جمالية المكان. هذه النصائح تركز على جعل الحديقة ممتعة وسهلة الصيانة.",
    ingredients: [
      "أرضية ترابية",
      "نباتات محلية",
      "أحجار صغيرة للتزيين",
    ],
    steps: [
      "اختاري مكاناً مفتوحاً في المنزل لتصميم الحديقة",
      "ازرعي النباتات المحلية التي تتحمل الطقس الحار",
      "رتبي الأحجار الصغيرة لتشكيل مسارات في الحديقة",
      "ضعي نباتات الزينة حول المسار لإضفاء طابع جميل",
    ],
    tips: [
      "احرصي على سقي النباتات بانتظام لتجنب الجفاف",
      "استخدمي الألوان الطبيعية والنباتات التي لا تحتاج إلى صيانة كبيرة",
    ],
    imageUrl:
      "https://kholaasah.com/wp-content/uploads/2023/06/%D8%AD%D8%AF%D8%A7%D8%A6%D9%82-%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9-%D8%B5%D8%BA%D9%8A%D8%B1%D8%A9.jpg",
    region: "العالم العربي",
    createdAt: "2024-06-02",
    viewCount: 1,
    featured: false
  },
  
  {
    id: "architecture-3",
    title: "بناء جدار من الطين",
    summary: "طريقة بناء جدران من الطين التقليدي",
    category: "architecture",
    content:
      "بناء جدران الطين يستخدم تقنيات بسيطة لكنه فعال في العزل الحراري. هذه الطريقة تعتبر سهلة ومناسبة للبناء التقليدي في البيئة الحارة.",
    ingredients: [
      "طين وماء",
      "خشب لتشكيل القوالب",
    ],
    steps: [
      "امزجي الطين مع الماء لتكوين مزيج متماسك",
      "استخدمي الخشب في تشكيل القوالب",
      "صبّي الطين داخل القوالب واتركيه ليجف بشكل طبيعي",
      "اتركي الجدران تجف تماماً قبل استخدامها لبناء المزيد",
    ],
    tips: [
      "استخدمي مواد طبيعية وخالية من المواد الكيميائية",
      "تأكدي من أن الجدران متينة ومستوية قبل البناء عليها",
    ],
    imageUrl:
      "https://www.m5zn.com/wp-content/uploads/2022/10/%D8%AA%D9%81%D8%B3%D9%8A%D8%B1-%D8%AD%D9%84%D9%85-%D8%A8%D9%8A%D8%AA-%D9%85%D9%86-%D8%A7%D9%84%D8%B7%D9%8A%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D9%85-%D9%84%D8%A7%D8%A8%D9%86-%D8%B3%D9%8A%D8%B1%D9%8A%D9%86-1.jpg",
    region: "المناطق الريفية",
    createdAt: "2024-06-02",
    viewCount: 1,
    featured: false
  },
  
  {
    id: "natural_remedies-1",
    title: "علاج الصداع بالنعناع",
    summary: "وصفة طبيعية لتخفيف الصداع باستخدام النعناع في مصر",
    category: "remedies",
    content:
      "النعناع يُستخدم في مصر كعلاج طبيعي للصداع بفضل خصائصه المهدئة. هذه الوصفة تعتمد على تحضير شاي النعناع مع استنشاق البخار.",
    ingredients: ["10 أوراق نعناع طازجة", "1 كوب ماء مغلي"],
    steps: [
      "اغلي أوراق النعناع في الماء لمدة 5 دقائق",
      "اتركي الخليط مغطى لمدة 5 دقائق إضافية لاستخلاص النكهة",
      "صفي الشاي واشربيه دافئاً ببطء",
      "استنشقي بخار النعناع أثناء التحضير لتأثير مهدئ إضافي",
    ],
    warnings: [
      "استشيري طبيباً إذا استمر الصداع لأكثر من يومين",
      "تجنبي الإفراط إذا كنتِ تعانين من حساسية النعناع",
    ],
    tips: [
      "أضيفي ملعقة عسل لتحسين الطعم وتعزيز التأثير",
      "استخدمي النعناع الطازج بدلاً من المجفف لنتائج أفضل",
    ],
    imageUrl:
      "https://i0.wp.com/www.almalkylandscape.com/wp-content/uploads/2024/06/%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D9%86%D8%B9%D9%86%D8%A7%D8%B9.jpg?fit=800%2C533&ssl=1",
    region: "مصر",
    createdAt: "2024-06-03",
    viewCount: 1,
    featured: false,
  },
  {
    id: "festive_foods-1",
    title: "تحضير الكنافة للعيد",
    summary: "وصفة كنافة تقليدية للأعياد في بلاد الشام",
    category: "festive_foods",
    content:
      "الكنافة حلوى تقليدية تُحضر في الأعياد والمناسبات في بلاد الشام، وتتميز بقوامها المقرمش وطعمها الحلو. هذه الوصفة تنتج كنافة بالجبنة الناعمة.",
    ingredients: [
      "500 غرام كنافة",
      "1 كوب سمن ذائب",
      "400 غرام جبنة عكاوي (منقوعة لإزالة الملح)",
      "2 كوب شربات (ماء وسكر وعصير ليمون)",
    ],
    steps: [
      "افرمي الكنافة يدوياً وامزجيها بالسمن الذائب حتى تتغطى بالكامل",
      "ضعي نصف كمية الكنافة في صينية واضغطيها جيداً لتشكيل طبقة متماسكة",
      "أضيفي الجبنة المبشورة بالتساوي، ثم غطيها بالنصف الآخر من الكنافة",
      "اخبزيها في فرن محمى مسبقاً على 180 مئوية لمدة 30 دقيقة حتى تصبح ذهبية",
      "اسكبي الشربات البارد فور خروج الصينية من الفرن",
    ],
    tips: [
      "استخدمي جبنة نابلسية كبديل للعكاوي إذا أردتِ قواماً أكثر كريمية",
      "زيني الكنافة بالفستق المطحون لإضافة لمسة جمالية",
    ],
    imageUrl:
      "https://i.ytimg.com/vi/GAbMM537wrY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAmpWQEBaAQhytcCy6udLcZ4zxVmA",
    region: "بلاد الشام",
    createdAt: "2024-06-04",
    viewCount: 1,
    featured: false,
  },
  {
    id: "festive_foods-2",
    title: "معمول العيد بالتمر",
    summary: "حلوى مشهورة في العيد تُحشى بالتمر وتُزين بنقوش مميزة",
    category: "festive_foods",
    content: "المعمول يُعد من أبرز الحلويات في العيد بمذاقه الغني وقوامه الطري.",
    ingredients: ["2 كوب سميد", "1 كوب سمن", "1 ملعقة صغيرة محلب", "تمر معجون للحشوة"],
    steps: [
      "اخلطي السميد والسمن واتركيه يرتاح ليلة",
      "شكلي كرات واحشيها بالتمر",
      "اضغطيها بالقالب ثم اخبزيها على حرارة 170°",
    ],
    tips: ["رشي السكر البودرة بعد أن يبرد", "احفظي المعمول في علبة محكمة"],
    imageUrl: "https://images.alwatanvoice.com/news/large/9999170151.jpg",
    region: "الشرق الأوسط",
    createdAt: "2024-06-04",
    viewCount: 1,
    featured: false
  },
  {
    id: "festive_foods-3",
    title: "العصيدة بالحليب",
    summary: "طبق احتفالي بسيط في المناسبات الدينية خاصة في الحجاز واليمن",
    category: "festive_foods",
    content: "العصيدة تُقدم ساخنة مع الحليب أو السمن والعسل.",
    ingredients: ["1 كوب دقيق قمح", "2 كوب ماء", "حليب وسمن أو عسل للتقديم"],
    steps: [
      "اخلطي الدقيق مع الماء تدريجياً على نار هادئة",
      "استمري في التحريك حتى تتماسك",
      "قدميها في طبق عميق مع الحليب أو العسل",
    ],
    tips: ["استخدمي ملعقة خشبية للتحريك", "قدّميها دافئة دائماً"],
    imageUrl: "https://i.ytimg.com/vi/ccQKQgGZjL4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD9Qt5LlcwP-9MfImy3q_JbuSSLPQ",
    region: "الحجاز واليمن",
    createdAt: "2024-06-04",
    viewCount: 1,
    featured: false
  },
  {
    id: "festive_foods-4",
    title: "مقروض العيد بالتمر",
    summary: "حلوى مقرمشة من السميد محشوة بالتمر ومقلية ثم تغمس في العسل",
    category: "festive_foods",
    content: "المقروض من أقدم حلويات الأعياد في تونس وليبيا والمغرب.",
    ingredients: ["2 كوب سميد", "نصف كوب زيت", "تمر معجون", "عسل أو قطر"],
    steps: [
      "اخلطي السميد بالزيت وشكّلي عجينة",
      "احشيها بالتمر وقطّعيها على شكل معينات",
      "اقليها حتى تحمر واغمسيها في العسل",
    ],
    tips: ["يفضل تقديمها باردة", "زيّني بالسمسم إن رغبتِ"],
    imageUrl: "https://www.lazezh.com/wp-content/uploads/gcMigration/recipes/l/lazezh_389327ba09-736x460.jpg",
    region: "شمال أفريقيا",
    createdAt: "2024-06-04",
    viewCount: 1,
    featured: false
  },
  {
    id: "festive_foods-5",
    title: "رز بحليب للعيد",
    summary: "حلوى سهلة تُقدّم باردة في العيد خاصة للأطفال",
    category: "festive_foods",
    content: "الرز بحليب طبق شعبي بسيط مكونه الأساسي الأرز والحليب.",
    ingredients: ["نصف كوب أرز مصري", "3 أكواب حليب", "سكر حسب الرغبة", "قرفة للزينة"],
    steps: [
      "اسلقي الأرز حتى ينضج",
      "أضيفي الحليب والسكر واتركيه يغلي مع التحريك",
      "صبيّه في كاسات وزيّني بالقرفة",
    ],
    tips: ["يمكنكِ إضافة ماء زهر لمذاق شرقي", "يُفضل تقديمه بارداً"],
    imageUrl: "https://i.ytimg.com/vi/D_XRoZIzp54/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCy_MjVYxC13WzFu0dCXNGSjasO_g",
    region: "مصر وبلاد الشام",
    createdAt: "2024-06-04",
    viewCount: 1,
    featured: false
  },
  {
    id: "festive_foods-6",
    title: "فقاص العيد المغربي",
    summary: "بسكويت مغربي باللوز يُقدم في المناسبات",
    category: "festive_foods",
    content: "الفقاص حلوى مقرمشة تُقدم مع الشاي أو القهوة في العيد.",
    ingredients: ["2 كوب طحين", "3 بيضات", "سكر", "لوز محمص", "خميرة"],
    steps: [
      "اخلطي المكونات لتشكيل عجينة",
      "شكّليها على هيئة أصابع طويلة واخبزيها",
      "قطّعيها شرائح رقيقة ثم أعيدي خبزها حتى تتحمص",
    ],
    tips: ["أضيفي القليل من ماء الزهر لنكهة تقليدية", "احفظيها في علبة محكمة"],
    imageUrl: "https://i.ytimg.com/vi/ntqtMfQyV8A/maxresdefault.jpg",
    region: "المغرب",
    createdAt: "2024-06-04",
    viewCount: 1,
    featured: false
  },
  
  {
    id: "remedies-1",
    title: "علاج المغص باليانسون",
    summary: "وصفة منزلية تقليدية لتخفيف المغص وتحسين الهضم باستخدام اليانسون",
    category: "remedies",
    content:
      "اليانسون، أو كما يُعرف في مصر بـ'الينسون'، كان يُستخدم منذ القدم في الطب الشعبي لتهدئة المغص وتحسين الهضم، سواء للأطفال أو الكبار. هذه الوصفة تعتمد على خصائص اليانسون المهدئة التي تساعد على تقليل التقلصات المعوية وتخفيف الانتفاخ، مما يجعلها علاجاً طبيعياً فعالاً وسهل التحضير في المنزل.",
    ingredients: [
      "1 ملعقة صغيرة بذور يانسون كاملة (يفضل عضوية)",
      "1 كوب (250 مل) ماء مغلي نقي",
    ],
    steps: [
      "أضيفي بذور اليانسون إلى كوب من الماء المغلي في وعاء مقاوم للحرارة",
      "غطي الكوب واتركي البذور تنقع لمدة 10 دقائق لاستخلاص الزيوت العطرية",
      "صفي المشروب باستخدام مصفاة ناعمة لإزالة البذور",
      "اشربي المشروب دافئاً ببطء، وكرري الوصفة عند الحاجة بحد أقصى مرتين يومياً",
    ],
    warnings: [
      "استشيري طبيباً إذا استمر المغص لأكثر من يومين أو تفاقمت الأعراض",
      "تجنبي الإفراط في تناول اليانسون إذا كنتِ حاملاً، لأنه قد يؤثر على الرحم بكميات كبيرة",
      "تأكدي من عدم وجود حساسية لديكِ أو للطفل تجاه اليانسون",
    ],
    tips: [
      "أضيفي نصف ملعقة صغيرة من العسل الطبيعي لتحسين الطعم، خاصة للأطفال (للأطفال فوق سنة واحدة)",
      "استخدمي بذور يانسون طازجة بدلاً من المطحونة للحصول على نكهة أقوى وفائدة أكبر",
      "إذا كنتِ تحضرين المشروب لطفل، خففيه بنصف كوب ماء إضافي واستشيري طبيب الأطفال أولاً",
      "حافظي على البذور في وعاء محكم في مكان جاف وبارد للحفاظ على جودتها",
    ],
    imageUrl:
      "https://media.zid.store/thumbs/06b7d077-7350-47dc-b489-bcaffc9c3d22/235a5b83-8851-441f-8d52-742ca3293a50-thumbnail-1000x1000-70.jpg",
    region: "مصر",
    createdAt: "2024-06-05",
    viewCount: 1,
    featured: false,
  },
  {
    id: "remedies-2",
    title: "غرغرة الماء والملح لالتهاب الحلق",
    summary: "وصفة منزلية تقليدية لتخفيف التهاب الحلق وتطهير الفم",
    category: "remedies",
    content: "غرغرة الماء والملح هي علاج شعبي قديم يُستخدم لتخفيف التهاب الحلق، تقليل البكتيريا في الفم، وتهدئة الألم الناتج عن التهاب اللوزتين أو نزلات البرد. الملح يساعد على تقليل التورم في الأنسجة ويعمل كمطهر طبيعي، مما يجعل هذه الوصفة فعالة وبسيطة للتحضير في المنزل.",
    ingredients: [
      "1 ملعقة صغيرة ملح بحري أو ملح طعام (غير معالج باليود)",
      "1 كوب (250 مل) ماء دافئ (ليس ساخناً)"
    ],
    steps: [
      "أذيبي الملح في كوب الماء الدافئ مع التحريك جيدًا حتى يذوب تمامًا",
      "خذي رشفة صغيرة من المحلول واغرغري بها في مؤخرة الحلق لمدة 15-20 ثانية",
      "ابصقي المحلول في الحوض وكرري العملية 2-3 مرات",
      "كرري الغرغرة 3-4 مرات يوميًا حتى تخف الأعراض"
    ],
    warnings: [
      "لا تبتلعي المحلول لأن كمية الملح قد تكون غير مناسبة للمعدة",
      "استشيري طبيبًا إذا استمر الألم أو ظهرت أعراض مثل الحمى أو صعوبة البلع",
      "تجنبي الوصفة للأطفال الصغار الذين لا يستطيعون الغرغرة بأمان"
    ],
    tips: [
      "استخدمي ماء دافئًا وليس ساخنًا لتجنب تهيج الحلق",
      "أضيفي قطرة من زيت النعناع العطري (اختياري) لإحساس منعش، مع التأكد من أنه آمن للاستخدام",
      "حضري المحلول طازجًا في كل مرة لضمان النظافة",
      "اشربي بعدها ماء عادي أو شاي أعشاب لتهدئة الحلق"
    ],
    imageUrl: "https://static.webteb.net/images/content/tbl_articles_article_33252_4330e97a9e9-c333-4a94-a560-dd6e37caf80f.jpg",
    region: "الشرق الأوسط",
    createdAt: "2025-05-07",
    viewCount: 85,
    featured: true
  },
];

// Utility functions
export const getAdviceByCategory = (categorySlug: string): Advice[] => {
  return adviceData.filter((advice) => advice.category === categorySlug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};

export const getFeaturedAdvice = (): Advice[] => {
  return adviceData.filter((advice) => advice.featured).slice(0, 3);
};

export const getAdviceById = (id: string): Advice | undefined => {
  return adviceData.find((advice) => advice.id === id);
};
export function searchAdvice(query: string): Advice[] {
  const searchTerms = query.toLowerCase().split(" ");

  return adviceData.filter((advice) => {
    const searchableText = [
      advice.title.toLowerCase(),
      advice.summary.toLowerCase(),
      advice.content.toLowerCase(),
    ].join(" ");

    return searchTerms.some((term) => searchableText.includes(term));
  });
}
export function getTipOfDay(): Advice {
  // Get a pseudo-random advice based on the day of the year
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const index = dayOfYear % adviceData.length;
  return adviceData[index];
}
