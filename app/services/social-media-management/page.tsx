import Link from "next/link";

const deliverables = [
  "Content strategy and monthly planning calendar",
  "Creative production for reels, posts, and stories",
  "Community management and response workflows",
  "Weekly reporting with engagement and conversion insights",
];

export default function ServicePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-text-primary">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#74EBF1]">
        Service 01
      </p>
      <h1 className="mb-6 text-4xl font-black md:text-5xl">
        Social Media Management
      </h1>
      <p className="mb-10 max-w-3xl text-lg leading-relaxed text-text-body">
        We turn your social channels into a consistent growth engine with
        strategy, creative execution, and audience engagement aligned to
        business goals.
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
          Book Strategy Call
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
