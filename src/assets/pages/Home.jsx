import { ThemeToggle } from "../../components/ThemeToggle";

// ۱. کامپوننت نوبار (منوی بالای سایت)
const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
    <h1 className="text-2xl font-bold tracking-tighter">
      Abolfazl<span className="text-blue-500">.Dev</span>
    </h1>
    <ul className="hidden md:flex space-x-8 font-medium">
      <li className="cursor-pointer hover:text-blue-500 transition">About</li>
      <li className="cursor-pointer hover:text-blue-500 transition">Skills</li>
      <li className="cursor-pointer hover:text-blue-500 transition">Projects</li>
    </ul>
    <div className="flex items-center gap-4">
      {/* دکمه تم رو آوردیم اینجا تا کنار منو باشه */}
      <ThemeToggle />
    </div>
  </nav>
);

// ۲. کامپوننت معرفی (بخش اصلی وسط صفحه)
const HeroSection = () => (
  <main className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4">
    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
      Software Developer
    </div>
    <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
      Hi, I'm <span className="text-blue-600 dark:text-blue-500">Abolfazl</span>
    </h2>
    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
      A passionate Backend Developer specializing in Python, Django, and Software Architecture. 
      I build scalable systems and explore the world of Artificial Intelligence.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
        View My GitHub
      </button>
      <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
        Download Resume
      </button>
    </div>
  </main>
);

// ۳. کامپوننت فوتر (پایین صفحه)
const Footer = () => (
  <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200 dark:border-gray-800 mt-auto">
    <p>© 2026 Abolfazl. Built with React & Tailwind CSS.</p>
  </footer>
);

// --- کامپوننت اصلی ---
export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden font-sans transition-colors duration-300">
      {/* Background Effect (افکت محو پس‌زمینه) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
      </div>

      <Navbar />
      <HeroSection />
      <Footer />
      
    </div>
  );
};