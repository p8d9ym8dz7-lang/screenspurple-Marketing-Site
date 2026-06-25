export default function TalentDashboardPage() {
  return (
    <main className="min-h-screen bg-[#120019] px-6 py-20 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
          Talent Dashboard
        </p>

        <h1 className="mt-4 text-4xl font-bold">Build your portfolio</h1>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Profile", "Photos", "Showreel", "Skills", "Experience", "Availability"].map(
            (item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                {item}
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
