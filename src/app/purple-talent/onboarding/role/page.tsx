import Link from "next/link";

export default function RoleSelectionPage() {
  return (
    <main className="min-h-screen bg-[#120019] px-6 py-20 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
          Choose Workspace
        </p>

        <h1 className="mt-4 text-4xl font-bold">How will you use Purple Talent?</h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            href="/talent/dashboard"
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 transition hover:bg-white/[0.1]"
          >
            <h2 className="text-2xl font-semibold">I am Talent</h2>
            <p className="mt-4 text-white/70">
              Actors, models, musicians, dancers, directors, writers, editors,
              cinematographers, voice artists and creative professionals.
            </p>
          </Link>

          <Link
            href="/agent/dashboard"
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 transition hover:bg-white/[0.1]"
          >
            <h2 className="text-2xl font-semibold">I am an Agent</h2>
            <p className="mt-4 text-white/70">
              Agencies, casting directors, studios, brands, production houses and
              recruiters searching for talent.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
