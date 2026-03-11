"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1250px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-[26px] font-semibold tracking-tight text-white sm:text-[32px] md:text-[34px]"
          onClick={closeMenu}
        >
          Bit<span className="text-teal-400">2</span>Bio
        </Link>

        {/* DESKTOP NAV */}
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
          {/* <a
            href="/#refer"
            className="text-[15px] font-medium text-slate-300 transition hover:text-white"
          >
            Refer a Friend
          </a> */}

          <Link
            href="/get-started"
            className="rounded-full bg-teal-400 px-5 py-2.5 text-[14px] font-semibold text-slate-950 transition hover:bg-teal-300"
          >
            Get Started
          </Link>
        </nav>

        {/* MOBILE / TABLET RIGHT SIDE */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/get-started"
            className="rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-300 sm:px-5"
          >
            Get Started
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/[0.06]"
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "top-2.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "top-2.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET MENU */}
      <div
        className={`overflow-hidden border-t border-white/5 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1250px] px-4 py-4 sm:px-6">
          <nav className="flex flex-col gap-2">
            <a
              href="/#about"
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-base font-medium text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
            >
              About Us
            </a>
            <a
              href="/#problem"
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-base font-medium text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
            >
              Why Bit2Bio
            </a>
            <a
              href="/#how"
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-base font-medium text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
            >
              How It Works
            </a>
            <a
              href="/#faq"
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-base font-medium text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
            >
              FAQs
            </a>
            {/* <a
              href="/#refer"
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-base font-medium text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
            >
              Refer a Friend
            </a> */}

            <Link
              href="/get-started"
              onClick={closeMenu}
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-teal-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}