import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(96,165,250,0.12),_transparent_35%),linear-gradient(to_right,_#020617,_#0f172a,_#020617)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.25),rgba(2,6,23,0.7))]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">

{/* MAIN HEADING */}
<h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
  Precision Nutrient Printing
</h1>

{/* SUBTITLE */}
<p className="mt-4 text-lg text-teal-300 sm:text-xl">
  Precision Nutrition built from your biology
</p>

{/* LINE */}
<div className="mt-6 h-px w-full max-w-xl bg-gradient-to-r from-teal-400 via-cyan-300/70 to-transparent" />

{/* DESCRIPTION */}
<p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 md:text-xl">
  Upload your biomarkers. Collect at Home. We build your formula. Manufactured fresh for you.
</p>

<p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
  Bit2Bio transforms biomarker data into a personalized nutrient blueprint,
  then creates a precision supplement formula designed specifically for
  your biology.
</p>

{/* BUTTONS */}
<div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
  <a
    href="/get-started"
    className="rounded-xl bg-teal-500 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-teal-400 sm:px-8 sm:py-4"
  >
    ANALYZE MY BIOMARKERS
  </a>

  <a
    href="/get-started"
    className="rounded-xl border border-white/20 bg-white px-6 py-3.5 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:px-8 sm:py-4"
  >
    TAKE THE HEALTH QUIZ
  </a>
</div>

{/* TAGS */}
<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400 sm:mt-10 sm:gap-x-8">
  <span>Biomarker Driven</span>
  <span>Personalized Formula</span>
  <span>Manufactured Fresh</span>
</div>

</div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 -z-10 blur-3xl">
              <div className="mx-auto h-52 w-52 rounded-full bg-cyan-400/10 sm:h-64 sm:w-64" />
            </div>

            <Image
              src="/Herosection.png"
              alt="Bit2Bio nutrient printer"
              width={900}
              height={900}
              priority
              className="h-auto w-full max-w-lg object-contain sm:max-w-xl lg:max-w-2xl"
            />
          </div>
        </div>
      </section>

      {/* WHY BIT2BIO */}
      <section
        id="problem"
        className="relative overflow-hidden border-y border-white/10 bg-slate-900/60"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),_transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-teal-200 sm:text-xs sm:tracking-[0.28em]">
              Why Bit2Bio
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
              DATA TO DOSE.
            </h2>

            <p className="mt-5 text-lg text-slate-300 sm:mt-6 sm:text-xl">
              Your body isn't generic.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:text-lg">
              Traditional supplements are built for the average customer, mass
              manufactured in advance, and sold as one-size-fits-all formulas.
              Bit2Bio takes the opposite approach by starting with your
              biomarkers and building around your biology.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:rounded-[2rem] sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="text-xs uppercase tracking-[0.22em] text-slate-400 sm:text-sm sm:tracking-[0.28em]">
                  Generic Supplements
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                  Old Model
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white sm:mt-8 sm:text-3xl">
                Manufactured for millions
              </h3>

              <ul className="mt-6 space-y-4 text-base text-slate-300 sm:mt-8 sm:text-lg">
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

              <div className="mt-8 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 sm:mt-10 sm:rounded-[1.5rem] sm:p-5">
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 sm:text-xs sm:tracking-[0.24em]">
                  Result
                </div>

                <div className="mt-4 grid items-center gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <p className="text-sm leading-7 text-slate-300 sm:text-base">
                    More bottles, overlapping ingredients, and a routine that was
                    never truly designed for you.
                  </p>

                  <div className="p-1">
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

            <div className="rounded-[1.5rem] border border-teal-400/20 bg-gradient-to-br from-teal-400/10 via-cyan-400/10 to-slate-900 p-6 shadow-[0_0_60px_rgba(45,212,191,0.08)] sm:rounded-[2rem] sm:p-8">
              <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-semibold tracking-tight text-white sm:text-base">
  Bit<span className="text-teal-400">2</span>Bio
</div>
                <div className="rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-xs text-teal-100">
                  The Future
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white sm:mt-8 sm:text-3xl">
                Built from your biology
              </h3>

              <ul className="mt-6 space-y-4 text-base text-white/95 sm:mt-8 sm:text-lg">
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

              <div className="mt-8 rounded-[1.25rem] border border-teal-300/15 bg-slate-950/30 p-4 backdrop-blur-sm sm:mt-10 sm:rounded-[1.5rem] sm:p-5">
                <div className="text-[11px] uppercase tracking-[0.2em] text-teal-200/80 sm:text-xs sm:tracking-[0.24em]">
                  Result
                </div>

                <div className="mt-4 grid items-center gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <p className="text-sm leading-7 text-slate-100 sm:text-base">
                    One smarter formula tailored to your biology instead of a shelf
                    full of generic products.
                  </p>

                  <div className="p-1">
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

      {/* ABOUT / PRODUCTION */}
      <section
        id="about"
        className="relative overflow-hidden border-y border-white/10 bg-slate-900/60"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.08),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.08),_transparent_24%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-teal-200 sm:text-xs sm:tracking-[0.28em]">
              About us
            </div>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl">
  From mass produced supplement factories to precision nutrition.
</h2>

            <p className="mt-5 text-lg leading-8 text-slate-300 sm:mt-6 sm:text-xl">
              Bit2Bio is rethinking how people access nutrition by building around
              real biomarker insights instead of generic assumptions.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:text-lg">
              We believe health should be personal. Instead of mass-manufactured
              formulas, Bit2Bio is designed to deliver targeted nutrition shaped by
              your biology, your needs, and your health data.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm sm:mt-10">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-slate-200">
                Biomarker-guided
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-slate-200">
                Personalized
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-slate-200">
                Future-ready
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-3xl">
              <div className="mx-auto h-52 w-52 rounded-full bg-cyan-400/10 sm:h-64 sm:w-64" />
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-teal-300/15 bg-slate-950/40 p-3 shadow-[0_0_60px_rgba(45,212,191,0.08)] sm:rounded-[2rem] sm:p-4">
              <Image
                src="/factory.png"
                alt="Bit2Bio future of personalized nutrition"
                width={1200}
                height={900}
                className="h-auto w-full rounded-[1.25rem] object-cover sm:rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
<section
  id="how"
  className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),_transparent_24%)]" />

  <div className="relative mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <div className="inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-teal-200 sm:text-xs sm:tracking-[0.28em]">
        How it works
      </div>

      <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
        Analyze. Build. Deliver.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
        A simple workflow that turns your biomarker data into a smarter,
        more personalized nutrition experience.
      </p>
    </div>

    <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
      {/* ANALYZE */}
      <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-teal-300/20 hover:bg-white/[0.04] sm:rounded-[2rem] sm:p-8">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/40 to-transparent" />

        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-teal-300">01</div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
            Analyze
          </div>
        </div>

        <div className="mt-6 flex h-[220px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
          <Image
            src="/analyze-device.png"
            alt="At home biomarker analyzer"
            width={420}
            height={420}
            className="h-auto w-full max-w-[240px] object-contain"
          />
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-white sm:text-3xl">
          Analyze
        </h3>

        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          Upload biomarkers or Collect at Home to understand what your body may
          need.
        </p>

        <p className="mt-6 text-sm font-medium text-teal-200 sm:text-base">
          Your biomarkers become your starting point.
        </p>
      </div>

      {/* BUILD */}
      <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-teal-300/20 hover:bg-white/[0.04] sm:rounded-[2rem] sm:p-8">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/40 to-transparent" />

        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-teal-300">02</div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
            Build
          </div>
        </div>

        <div className="mt-6 flex h-[220px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
          <Image
            src="/build-printer.png"
            alt="Personalized supplement manufacturing"
            width={420}
            height={420}
            className="h-auto w-full max-w-[260px] object-contain"
          />
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-white sm:text-3xl">
          Build
        </h3>

        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          Bit2Bio translates your biomarker insights into a AI personalized
          nutrient formula manufactured with precision.
        </p>

        <p className="mt-6 text-sm font-medium text-teal-200 sm:text-base">
          Your data becomes your formula.
        </p>
      </div>

      {/* DELIVER */}
      <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-teal-300/20 hover:bg-white/[0.04] sm:rounded-[2rem] sm:p-8">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/40 to-transparent" />

        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-teal-300">03</div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
            Deliver
          </div>
        </div>

        <div className="mt-6 flex h-[220px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
          <Image
            src="/deliver-box.png"
            alt="Bit2Bio personalized supplement delivery"
            width={420}
            height={420}
            className="h-auto w-full max-w-[260px] object-contain"
          />
        </div>

        <h3 className="mt-8 text-2xl font-semibold text-white sm:text-3xl">
          Deliver Monthly 
        </h3>

        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          Your personalized nutrient formula is packaged and delivered
          directly to your door, ready to support your health routine.
        </p>

        <p className="mt-6 text-sm font-medium text-teal-200 sm:text-base">
          Personalized. Freshly prepared.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* FAQ */}
      <section
        id="faq"
        className="relative overflow-hidden border-y border-white/10 bg-slate-900/60"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-teal-200 sm:text-xs sm:tracking-[0.28em]">
              FAQs
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl">
              Questions people ask before they start.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:text-lg">
              Clear answers about personalization, biomarkers, and the Bit2Bio
              experience.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:gap-5 lg:mt-16">
            {[
              {
                q: "How is Bit2Bio different from regular supplements?",
                a: "Bit2Bio starts with your biomarkers and health data instead of using the same formula for everyone.",
              },
              {
                q: "Do I need lab results to use Bit2Bio?",
                a: "Lab data can improve personalization, and the experience is designed to work around real health inputs collected from home and other supported sources.",
              },
              {
                q: "Will I be able to manage this from home?",
                a: "Yes. Bit2Bio is designed around convenience and remote health insights so the experience can fit into everyday life.",
              },
              {
                q: "Is this available now?",
                a: "We are currently collecting interest and speaking with early users while the full product experience is being developed.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[1.5rem] sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFER A FRIEND
      <section id="refer" className="relative overflow-hidden bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="overflow-hidden rounded-[1.75rem] border border-teal-300/15 bg-gradient-to-r from-teal-400/10 via-cyan-400/10 to-slate-900 p-6 sm:rounded-[2rem] sm:p-8 lg:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-teal-200 sm:text-xs sm:tracking-[0.28em]">
                  Refer a Friend
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:mt-6 sm:text-4xl md:text-5xl">
                  Share smarter nutrition with someone you care about.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg">
                  If Bit2Bio sounds like a better way to think about nutrition,
                  invite friends and family to join the early journey too.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/get-started"
                    className="rounded-xl bg-teal-400 px-6 py-3.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
                  >
                    Refer a Friend
                  </a>
                  <a
                    href="/#faq"
                    className="rounded-xl border border-white/15 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/5"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <div className="text-2xl font-semibold text-white">01</div>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Share Bit2Bio with a friend.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <div className="text-2xl font-semibold text-white">02</div>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    They join the early access journey.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <div className="text-2xl font-semibold text-white">03</div>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    More people discover personalized nutrition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section
        id="plans"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 p-8 text-center sm:rounded-3xl sm:p-10 md:p-14">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Ready to explore Bit2Bio?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg">
            Get in touch and join the early experience while the full platform is
            being built.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/get-started"
              className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              Get Started
            </a>

            <a
              href="/get-started"
              className="rounded-xl border border-white/20 px-6 py-3 text-sm transition hover:bg-white/5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}