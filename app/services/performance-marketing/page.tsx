import Link from "next/link";

const deliverables = [
  "Paid campaign strategy across Meta and Google",
  "Offer testing, creative testing, and funnel optimization",
  "CAC, ROAS, and LTV-focused performance dashboards",
  "Weekly optimization cycles with clear action plans",
];

export default function ServicePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-text-primary">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#74EBF1]">
        Service 03
      </p>
      <h1 className="mb-6 text-4xl font-black md:text-5xl">
        Performance Marketing (Paid Ads)
      </h1>
      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-text-body">
        We design and optimize paid media campaigns that prioritize profitable
        growth, not vanity metrics.
      </p>

      <div className="rounded-3xl border border-white/10 bg-bg-surface/70 p-8">
        <h2 className="mb-5 text-xl font-bold">What You Get</h2>
        <ul className="space-y-3 text-text-body">
          {deliverables.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#905AFF]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="rounded-xl bg-gradient-to-r from-[#905AFF] to-[#C448FF] px-7 py-3 font-bold text-white"
        >
          Scale My Campaigns
        </Link>
        <Link
          href="/services"
          className="rounded-xl border border-white/10 px-7 py-3 font-semibold text-white/90"
        >
          Back to Services
        </Link>
      </div>
    </section>
  );
}
