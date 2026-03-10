"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  interest: "",
  message: "",
};

export default function GetStartedPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/get-started", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: "Thanks — we received your request and our team will reach out soon.",
      });

      setForm(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit the form right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(96,165,250,0.12),_transparent_35%),linear-gradient(to_right,_#020617,_#0f172a,_#020617)]" />

        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1 text-[11px] uppercase tracking-[0.24em] text-teal-200 sm:text-xs sm:tracking-[0.28em]">
              Get Started
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Talk to the Bit2Bio team
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Bit2Bio is building personalized nutrition powered by biomarkers.
              Leave your details and our team will get back to you.
            </p>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/40"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/40"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/40"
                    placeholder="+1 555 123 4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/40"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  What are you interested in? *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-teal-400/40"
                >
                  <option value="">Select an option</option>
                  <option value="Early access">Early access</option>
                  <option value="Personalized nutrition">Personalized nutrition</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Pilot program">Pilot program</option>
                  <option value="General inquiry">General inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400/40"
                  placeholder="Tell us a little about what you're looking for..."
                />
              </div>

              {status.type !== "idle" && (
                <div
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-teal-400/30 bg-teal-400/10 text-teal-100"
                      : "border-red-400/30 bg-red-400/10 text-red-100"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl bg-teal-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Request Early Access"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}