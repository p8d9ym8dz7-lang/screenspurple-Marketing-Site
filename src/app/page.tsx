export default function HomePage() {
  return (
    <main className="text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-teal-950/70 border-b border-teal-700">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-wider">
              SCREENSSTUDIOS
            </h1>
          </div>

          <nav className="hidden gap-8 md:flex">
            <a href="/podcast">Podcast</a>
            <a href="/digital-marketing">Digital Marketing</a>
            <a href="/film-marketing">Film Marketing</a>
            <a href="/case-studies">Case Studies</a>
          </nav>

          <a
            href="/book"
            className="rounded-xl bg-orange-500 px-5 py-3 font-semibold"
          >
            Book Consultation
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <div className="mb-6 inline-flex rounded-full border border-orange-400 bg-teal-950/30 px-4 py-2 text-sm">
              Premium Podcast Production • Digital Marketing • Film Marketing
            </div>

            <h1 className="mb-8 text-6xl font-bold leading-tight md:text-8xl">
              Create.
              <br />
              Market.
              <br />
              Amplify.
            </h1>

            <p className="mb-10 max-w-2xl text-xl text-teal-100">
              India's Premium Content, Podcast & Film Marketing Studio.
              Helping brands, creators, startups, celebrities and film
              producers create content and campaigns that drive results.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/podcast"
                className="rounded-xl bg-orange-500 px-8 py-4 text-center font-semibold"
              >
                Book Podcast Studio
              </a>

              <a
                href="/book"
                className="rounded-xl border border-orange-400 px-8 py-4 text-center"
              >
                Schedule Consultation
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">

          <div className="rounded-2xl border border-teal-700 bg-teal-950/20 p-8 text-center">
            <div className="text-5xl font-bold">100+</div>
            <div className="mt-2 text-teal-100">Projects</div>
          </div>

          <div className="rounded-2xl border border-teal-700 bg-teal-950/20 p-8 text-center">
            <div className="text-5xl font-bold">50+</div>
            <div className="mt-2 text-teal-100">Clients</div>
          </div>

          <div className="rounded-2xl border border-teal-700 bg-teal-950/20 p-8 text-center">
            <div className="text-5xl font-bold">10M+</div>
            <div className="mt-2 text-teal-100">Reach Generated</div>
          </div>

          <div className="rounded-2xl border border-teal-700 bg-teal-950/20 p-8 text-center">
            <div className="text-5xl font-bold">5+</div>
            <div className="mt-2 text-teal-100">Years Experience</div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-16 text-center text-5xl font-bold">
            Our Divisions
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">

            <a
              href="/podcast"
              className="rounded-3xl border border-teal-700 bg-teal-950/20 p-10 transition hover:border-orange-400"
            >
              <h3 className="mb-4 text-3xl font-bold">
                Podcast Studio
              </h3>

              <p className="text-teal-100">
                Professional podcast production with 4K video,
                premium audio, editing, reels and thumbnails.
              </p>
            </a>

            <a
              href="/digital-marketing"
              className="rounded-3xl border border-teal-700 bg-teal-950/20 p-10 transition hover:border-orange-400"
            >
              <h3 className="mb-4 text-3xl font-bold">
                Digital Marketing
              </h3>

              <p className="text-teal-100">
                Social media, performance marketing, branding,
                influencer campaigns and lead generation.
              </p>
            </a>

            <a
              href="/film-marketing"
              className="rounded-3xl border border-teal-700 bg-teal-950/20 p-10 transition hover:border-orange-400"
            >
              <h3 className="mb-4 text-3xl font-bold">
                Film Marketing
              </h3>

              <p className="text-teal-100">
                Film launches, PR, influencer campaigns,
                OTT promotions and celebrity management.
              </p>
            </a>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <div className="mx-auto max-w-4xl px-6">

          <h2 className="mb-6 text-6xl font-bold">
            Ready To Grow?
          </h2>

          <p className="mb-10 text-xl text-teal-100">
            Launch a podcast, scale your brand or market your film
            with ScreensStudios.
          </p>

          <a
            href="/book"
            className="rounded-xl bg-orange-500 px-10 py-5 text-lg font-semibold"
          >
            Get Started Today
          </a>

        </div>
      </section>

    </main>
  );
}
