import Link from "next/link";

const talentFeatures = [
  "World-class portfolio pages for actors, technicians, creators, models, musicians, dancers, writers, directors, editors, DOPs and production talent.",
  "Verified talent profiles with photos, showreels, skills, languages, experience, availability and contact preferences.",
  "Agent search with filters for role, location, skill, language, availability, experience and media presence.",
  "Shortlists, contact requests and future casting/project workflows for agencies and production houses.",
];

const talentCategories = [
  "Actors",
  "Models",
  "Directors",
  "Writers",
  "Cinematographers",
  "Editors",
  "Voice Artists",
  "Musicians",
  "Dancers",
  "Makeup Artists",
  "Costume Designers",
  "VFX Artists",
];

export default function PurpleTalentPage() {
  return (
    <main className="min-h-screen bg-[#120019] text-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-300">
            ScreensPurple Talent
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            A premium talent discovery platform for film, media and creator industries.
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/75">
            Purple Talent will help actors, technicians and creative professionals build a
            world-class portfolio, while agents, casting teams and production houses can
            discover, filter and contact the right talent faster.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://talent.screenspurple.com"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#120019] transition hover:bg-fuchsia-100"
            >
              Visit Talent Platform
            </Link>

            <Link
              href="/book/index.html"
              className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {talentFeatures.map((feature) => (
            <div
              key={feature}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-purple-950/30"
            >
              <p className="text-base leading-7 text-white/80">{feature}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/20 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Talent categories</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {talentCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-4 py-2 text-sm text-fuchsia-100"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
