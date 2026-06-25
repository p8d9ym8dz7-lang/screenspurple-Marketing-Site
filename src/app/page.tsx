export default function HomePage() {
  return (
    <main className="text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-purple-950/70 border-b border-purple-700">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div>
            <h1 className="text-xl font-bold tracking-wider">
              Screens Purple
            </h1>
          </div>

          <nav className="hidden gap-8 md:flex">
            <a href="/index.html">Home</a>
            <a href="/podcast/index.html">Podcast</a>
            <a href="/digital-marketing/index.html">Digital Marketing</a>
            <a href="/film-marketing/index.html">Film Marketing</a>
            <a href="/purple-talent/index.html">Purple Talent</a>
          </nav>

          <a
            href="/book"
            className="rounded-xl bg-purple-600 px-5 py-2 font-semibold"
          >
            Book Consultation
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden px-6 py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(88,28,135,0.55),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* LEFT: PODCAST IMAGE SLIDER */}

          <div>
            <h2 className="mb-4 text-lg font-medium leading-snug text-purple-100 md:text-xl">
              A premium podcast studio in a prime location, powered by expert technicians and the latest technology.
            </h2>

            <div className="overflow-hidden rounded-[36px] border border-purple-500/30 bg-purple-950/30 p-4 shadow-[0_0_80px_rgba(168,85,247,0.28)]">
            <div className="podcast-slide-track flex gap-4">
              {[
                "/podcast/studio-01.jpeg",
                "/podcast/studio-02.jpeg",
                "/podcast/studio-03.jpeg",
                "/podcast/studio-04.jpeg",
                "/podcast/studio-05.jpeg",
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="ScreensPurple Studio"
                  className="h-[560px] min-w-full rounded-[28px] object-cover"
                />
              ))}
            </div>

            <div className="mt-5 px-2">
              <div className="flex items-center justify-between">
                <div className="text-sm uppercase tracking-[0.3em] text-purple-300">
                  ScreensPurple Studio
                </div>

                <div className="rounded-full border border-purple-400/40 px-4 py-2 text-sm text-purple-200">
                  4K • Audio • Lights
                </div>
              </div>

              <div className="mt-2 text-sm text-purple-100">
                Mezzanine Floor, Fun Republic, Cinepolis, Fun Republic Road, Andheri West, Mumbai – 400053 • Phone: +91 9004069833
              </div>
            </div>
          </div>

          </div>

          {/* RIGHT: BOOKING PANEL */}
          <div className="rounded-[36px] border border-purple-500/30 bg-black/35 p-8 backdrop-blur-xl shadow-[0_0_80px_rgba(168,85,247,0.22)]">
            <div className="mb-6 inline-flex rounded-full border border-purple-400/40 bg-purple-950/40 px-4 py-2 text-sm text-purple-200">
              Purple Podcast Studio
            </div>

            <h1 className="text-xl font-bold leading-tight md:text-2xl">
              <span className="bg-gradient-to-r from-purple-200 via-fuchsia-300 to-white bg-clip-text text-transparent">
                Book Your Podcast Session
              </span>
            </h1>

            <div className="mt-8 rounded-3xl border border-purple-500/20 bg-purple-950/30 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-lg font-bold">June 2026</div>
                <div className="text-sm text-purple-300">Available Slots</div>
              </div>

              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {["M","T","W","T","F","S","S"].map((day) => (
                  <div key={day} className="text-purple-300">{day}</div>
                ))}

                {Array.from({ length: 30 }).map((_, i) => (
                  <button
                    key={i}
                    className={`rounded-xl py-3 ${i === 21 ? "bg-purple-600 text-white" : "bg-white/5 text-purple-100"}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-purple-200">
                Select Session Time
              </label>

              <select className="w-full rounded-2xl border border-purple-500/30 bg-purple-950/30 px-4 py-4 text-purple-100 outline-none">
                <option>09:00 AM - 12:00 PM</option>
                <option>12:00 PM - 03:00 PM</option>
                <option>03:00 PM - 06:00 PM</option>
                <option>06:00 PM - 09:00 PM</option>
                <option>09:00 PM - 12:00 AM</option>
                <option>12:00 AM - 03:00 AM</option>
                <option>03:00 AM - 06:00 AM</option>
                <option>06:00 AM - 09:00 AM</option>
              </select>
            </div>

            <a
              href="/book"
              className="mt-6 block rounded-2xl bg-purple-600 px-8 py-4 text-center text-lg font-bold hover:bg-purple-500"
            >
              Book Studio Session
            </a>
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
              href="/podcast/index.html"
              className="rounded-3xl border border-purple-700 bg-purple-950/20 p-10 transition hover:border-purple-500"
            >
              <h3 className="mb-4 text-3xl font-bold">
                Podcast Studio
              </h3>

              <p className="text-purple-200">
                Professional podcast production with 4K video,
                premium audio, editing, reels and thumbnails.
              </p>
            </a>

            <a
              href="/digital-marketing/index.html"
              className="rounded-3xl border border-purple-700 bg-purple-950/20 p-10 transition hover:border-purple-500"
            >
              <h3 className="mb-4 text-3xl font-bold">
                Digital Marketing
              </h3>

              <p className="text-purple-200">
                Social media, performance marketing, branding,
                influencer campaigns and lead generation.
              </p>
            </a>

            <a
              href="/film-marketing/index.html"
              className="rounded-3xl border border-purple-700 bg-purple-950/20 p-10 transition hover:border-purple-500"
            >
              <h3 className="mb-4 text-3xl font-bold">
                Film Marketing
              </h3>

              <p className="text-purple-200">
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

          <p className="mb-10 text-xl text-purple-200">
            Launch a podcast, scale your brand or market your film
            with ScreensPurple.
          </p>

          <a
            href="/book"
            className="rounded-xl bg-purple-600 px-10 py-5 text-lg font-semibold"
          >
            Get Started Today
          </a>

        </div>
      </section>

    </main>
  );
}
