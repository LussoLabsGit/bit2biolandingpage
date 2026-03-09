import Image from "next/image";

const supplementStack = [
  "Vitamin D",
  "Magnesium",
  "Omega-3",
  "Probiotic",
  "B Complex",
  "Zinc",
  "Electrolytes",
  "Creatine",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="text-2xl font-semibold tracking-tight">
            bit<span className="text-teal-400">2</span>bio
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#how" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#problem" className="transition hover:text-white">
              Science
            </a>
            <a href="#plans" className="transition hover:text-white">
              Plans
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#login" className="transition hover:text-white">
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(96,165,250,0.12),_transparent_35%),linear-gradient(to_right,_#020617,_#0f172a,_#020617)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.25),rgba(2,6,23,0.7))]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-5 text-sm uppercase tracking-[0.35em] text-teal-300">
              Precision Nutrient Printing
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl xl:text-7xl">
              Precision Nutrition
              <br />
              built from your biology.
            </h1>

            <div className="mt-6 h-px w-full max-w-xl bg-gradient-to-r from-teal-400 via-cyan-300/70 to-transparent" />

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Upload your biomarkers. We build your formula. Manufactured fresh
              for you.
            </p>

            <p className="mt-4 max-w-xl text-base text-slate-400">
              Bit2Bio transforms biomarker data into a personalized nutrient
              blueprint, then creates a precision supplement formula designed
              specifically for your biology.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-xl bg-teal-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-teal-400">
                ANALYZE MY BIOMARKERS
              </button>

              <button className="rounded-xl border border-white/20 bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                TAKE THE HEALTH QUIZ
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span>Biomarker Driven</span>
              <span>Personalized Formula</span>
              <span>Manufactured Fresh</span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 -z-10 blur-3xl">
              <div className="mx-auto h-64 w-64 rounded-full bg-cyan-400/10" />
            </div>

            <Image
              src="/herosection.png"
              alt="Bit2Bio nutrient printer"
              width={900}
              height={900}
              priority
              className="h-auto w-full max-w-2xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section
        id="problem"
        className="relative overflow-hidden border-y border-white/10 bg-slate-900/60"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),_transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-teal-200">
              The Problem
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Your body isn&apos;t generic.
            </h2>

            <p className="mt-6 text-xl text-slate-300">
              But most supplements still are.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
              Traditional supplements are built for the average customer, mass
              manufactured in advance, and sold as one-size-fits-all formulas.
              Bit2Bio takes the opposite approach by starting with your
              biomarkers and building around your biology.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Generic Supplements
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                  Old Model
                </div>
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-white">
                Manufactured for millions
              </h3>

              <ul className="mt-8 space-y-4 text-lg text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-slate-500" />
                  <span>Bulk blended formulas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-slate-500" />
                  <span>One dose for everyone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-slate-500" />
                  <span>Produced months in advance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-slate-500" />
                  <span>Stored in warehouses</span>
                </li>
              </ul>

              <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Result
                </div>

                <div className="mt-4 grid items-center gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <p className="text-base leading-7 text-slate-300">
                    More bottles, overlapping ingredients, and a routine that was
                    never truly designed for you.
                  </p>

                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-3">
                    <Image
                      src="/oldmodel.png"
                      alt="Generic supplement bottles"
                      width={500}
                      height={360}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-teal-400/20 bg-gradient-to-br from-teal-400/10 via-cyan-400/10 to-slate-900 p-8 shadow-[0_0_60px_rgba(45,212,191,0.08)]">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm uppercase tracking-[0.28em] text-teal-200">
                  Bit2Bio
                </div>
                <div className="rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-xs text-teal-100">
                  Better Model
                </div>
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-white">
                Built from your biology
              </h3>

              <ul className="mt-8 space-y-4 text-lg text-white/95">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-300" />
                  <span>Built from your biomarkers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-300" />
                  <span>Personalized nutrient blueprint</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-300" />
                  <span>Precision formulated for your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal-300" />
                  <span>Manufactured fresh on demand</span>
                </li>
              </ul>

              <div className="mt-10 rounded-[1.5rem] border border-teal-300/15 bg-slate-950/30 p-5 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.24em] text-teal-200/80">
                  Result
                </div>

                <div className="mt-4 grid items-center gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <p className="text-base leading-7 text-slate-100">
                    One smarter formula tailored to your biology instead of a shelf
                    full of generic products.
                  </p>

                  <div className="overflow-hidden rounded-2xl border border-teal-300/15 bg-slate-950/40 p-3">
                    <Image
                      src="/bit2biomodel.png"
                      alt="Bit2Bio personalized formula bottle"
                      width={500}
                      height={360}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STACK SECTION */}
<section className="relative overflow-hidden border-y border-white/10 bg-slate-950">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),_transparent_24%)]" />

  <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      <div className="inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-teal-200">
        One formula instead of a stack
      </div>

      <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
        Most people don&apos;t take one supplement.
      </h2>

      <p className="mt-6 text-xl text-slate-300">
        They manage 10 to 15 different products.
      </p>

      <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
        Multiple bottles. Duplicated nutrients. Guessing doses. Different
        routines. Bit2Bio simplifies all of that into one personalized formula
        designed for your biology and your preferred flavor.
      </p>
    </div>

    <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
      {/* LEFT CARD */}
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm uppercase tracking-[0.28em] text-slate-400">
            Traditional routine
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
            Stack
          </div>
        </div>

        <h3 className="mt-6 text-3xl font-semibold text-white">
          Too many bottles to manage
        </h3>

        <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4">
          <Image
            src="/stack.png"
            alt="Multiple supplement bottles"
            width={900}
            height={700}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-300">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            Multiple bottles
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            Duplicate nutrients
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            Guessing doses
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            Hard to maintain
          </div>
        </div>

        <p className="mt-6 text-base leading-7 text-slate-400">
          Most supplement routines become complicated fast, and they were never
          truly designed around your biology.
        </p>
      </div>

      {/* CENTER ARROW / DIVIDER */}
      <div className="hidden items-center justify-center lg:flex">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-teal-300/20 bg-teal-300/10 text-3xl text-teal-200 shadow-[0_0_30px_rgba(45,212,191,0.15)]">
          →
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="rounded-[2rem] border border-teal-400/20 bg-gradient-to-br from-teal-400/10 via-cyan-400/10 to-slate-900 p-6 shadow-[0_0_60px_rgba(45,212,191,0.08)] md:p-8">
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm uppercase tracking-[0.28em] text-teal-200">
            Bit2Bio
          </div>
          <div className="rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-xs text-teal-100">
            Personalized
          </div>
        </div>

        <h3 className="mt-6 text-3xl font-semibold text-white">
          One formula, built for you
        </h3>

        <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-teal-300/15 bg-slate-950/40 p-4">
          <Image
            src="/personalized.png"
            alt="Personalized supplement formula"
            width={900}
            height={700}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full border border-teal-300/20 bg-slate-950/40 px-4 py-2 text-teal-100">
            Your nutrient mix
          </span>
          <span className="rounded-full border border-teal-300/20 bg-slate-950/40 px-4 py-2 text-teal-100">
            Personalized dose
          </span>
          <span className="rounded-full border border-teal-300/20 bg-slate-950/40 px-4 py-2 text-teal-100">
            Flavor options
          </span>
          <span className="rounded-full border border-teal-300/20 bg-slate-950/40 px-4 py-2 text-teal-100">
            Freshly made
          </span>
        </div>

        <p className="mt-6 text-base leading-7 text-slate-100">
          Instead of managing an entire shelf, Bit2Bio combines what your body
          needs into one personalized formula with the flavor experience you
          prefer.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* PRINTER */}
      <section
        id="about"
        className="relative overflow-hidden border-y border-white/10 bg-slate-900/60"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.08),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.08),_transparent_24%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-teal-200">
              Precision production
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              From supplement factories to nutrient printers.
            </h2>

            <p className="mt-6 text-xl leading-8 text-slate-300">
              Bit2Bio replaces bulk manufacturing with precision nutrient
              formulation.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
              Your nutrients are designed from your biomarkers, built into a
              personal formula, and prepared specifically for your body.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-slate-200">
                Biomarker-guided
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-slate-200">
                Precision formulated
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-slate-200">
                Freshly prepared
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-3xl">
              <div className="mx-auto h-64 w-64 rounded-full bg-cyan-400/10" />
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-teal-300/15 bg-slate-950/40 p-4 shadow-[0_0_60px_rgba(45,212,191,0.08)]">
              <Image
                src="/factory.png"
                alt="Futuristic nutrient production facility"
                width={1200}
                height={900}
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Analyze. Build. Deliver.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-sm text-teal-300">01</div>
            <h3 className="mt-3 text-2xl font-semibold">Analyze</h3>
            <p className="mt-4 text-slate-300">
              Upload biomarkers and health data to identify the nutrients your
              body actually needs.
            </p>
            <p className="mt-4 text-sm text-teal-200">
              Your biomarkers become your nutrient blueprint.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-sm text-teal-300">02</div>
            <h3 className="mt-3 text-2xl font-semibold">Build</h3>
            <p className="mt-4 text-slate-300">
              Bit2Bio transforms your health data into a personalized nutrient
              formula.
            </p>
            <p className="mt-4 text-sm text-teal-200">
              Your data becomes your formula.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-sm text-teal-300">03</div>
            <h3 className="mt-3 text-2xl font-semibold">Deliver</h3>
            <p className="mt-4 text-slate-300">
              Your personalized formula is prepared fresh and delivered directly
              to your door.
            </p>
            <p className="mt-4 text-sm text-teal-200">
              Freshly made. Easy to follow.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="plans" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 p-10 text-center md:p-14">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Stop managing a shelf of supplements.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Turn your entire supplement stack into one formula built for your
            biology.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100">
              Start Your Analysis
            </button>

            <button className="rounded-xl border border-white/20 px-6 py-3 text-sm transition hover:bg-white/5">
              Take the Health Quiz
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="login"
        className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500"
      >
        © 2026 Bit2Bio. Personalized nutrition, built from your biology.
      </footer>
    </main>
  );
}
