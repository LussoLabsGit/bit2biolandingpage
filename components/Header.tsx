export default function Header() {
    return (
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1250px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="text-[28px] font-semibold tracking-tight text-white sm:text-[32px] md:text-[34px]"
          >
            bit<span className="text-teal-400">2</span>bio
          </a>
  
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            <a
              href="/#about"
              className="text-[15px] font-medium text-slate-300 transition hover:text-white"
            >
              About Us
            </a>
            <a
              href="/#problem"
              className="text-[15px] font-medium text-slate-300 transition hover:text-white"
            >
              Why Bit2Bio
            </a>
            <a
              href="/#how"
              className="text-[15px] font-medium text-slate-300 transition hover:text-white"
            >
              How It Works
            </a>
            <a
              href="/#faq"
              className="text-[15px] font-medium text-slate-300 transition hover:text-white"
            >
              FAQs
            </a>
            <a
              href="/#refer"
              className="text-[15px] font-medium text-slate-300 transition hover:text-white"
            >
              Refer a Friend
            </a>
  
            <a
              href="/get-started"
              className="rounded-full bg-teal-400 px-5 py-2.5 text-[14px] font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              Get Started
            </a>
          </nav>
  
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="/get-started"
              className="rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              Get Started
            </a>
          </div>
        </div>
  
        <div className="border-t border-white/5 lg:hidden">
          <div className="mx-auto flex max-w-[1250px] gap-5 overflow-x-auto px-4 py-3 text-sm text-slate-300 sm:px-6">
            <a href="/#about" className="whitespace-nowrap transition hover:text-white">
              About Us
            </a>
            <a href="/#problem" className="whitespace-nowrap transition hover:text-white">
              Why Bit2Bio
            </a>
            <a href="/#how" className="whitespace-nowrap transition hover:text-white">
              How It Works
            </a>
            <a href="/#faq" className="whitespace-nowrap transition hover:text-white">
              FAQs
            </a>
            <a href="/#refer" className="whitespace-nowrap transition hover:text-white">
              Refer a Friend
            </a>
          </div>
        </div>
      </header>
    );
  }