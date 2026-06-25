export default function PodcastPage() {
  return (
    <>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-purple-950/70 border-b border-purple-700">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <h1 className="text-xl font-bold tracking-wider">
            Screens Purple
          </h1>

          <nav className="hidden gap-8 md:flex">
            <a href="/index.html">Home</a>
            <a href="/podcast/index.html">Podcast</a>
            <a href="/digital-marketing/index.html">Digital Marketing</a>
            <a href="/film-marketing/index.html">Film Marketing</a>
            <a href="/purple-talent/index.html">Purple Talent</a>
            <a href="/case-studies/index.html">Case Studies</a>
          </nav>

          <a
            href="/book/index.html"
            className="rounded-xl bg-purple-600 px-5 py-2 font-semibold"
          >
            Book Consultation
          </a>
        </div>
      </header>

    <main className="min-h-screen bg-transparent text-white">

      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-6xl font-bold">
            Record Studio-Quality Podcasts
            Without Building a Studio
          </h1>

          <p className="mx-auto max-w-3xl text-xl text-teal-200">
            Professional podcast production with 4K video, premium audio,
            editing services, reels, thumbnails and dedicated production
            support.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/book"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white"
            >
              Book Studio Now
            </a>

            <a
              href="#packages"
              className="rounded-xl border border-orange-400 px-8 py-4"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-teal-800 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Studio Features
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "3 Professional 4K Cameras",
              "Professional Audio System",
              "Lighting Setup",
              "Green Room Access",
              "Personalized Branding Area",
              "Dedicated Production Team",
              "Refreshments",
              "Parking Facility",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-teal-700 p-6"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-teal-800 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Who Is This For?
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Podcasters",
              "Entrepreneurs",
              "CEOs",
              "Coaches",
              "Educators",
              "YouTubers",
              "Brands",
              "Celebrities",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-teal-700 p-6 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="border-t border-teal-800 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center text-4xl font-bold">
            Package Comparison
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-2xl border border-teal-700 p-10">
              <h3 className="mb-6 text-3xl font-bold">
                Standard Production Package
              </h3>

              <ul className="space-y-3 text-teal-100">
                <li>✓ 3 Camera Setup</li>
                <li>✓ Lighting</li>
                <li>✓ Studio Access</li>
                <li>✓ Audio Recording</li>
                <li>✓ Green Room</li>
                <li>✓ Studio Coordinator</li>
              </ul>

              <div className="mt-8 text-teal-300">
                Perfect For: Independent Creators, Business Podcasts,
                Interview Podcasts
              </div>
            </div>

            <div className="rounded-2xl border border-white p-10">
              <h3 className="mb-6 text-3xl font-bold">
                Premium Editor's Package
              </h3>

              <ul className="space-y-3 text-teal-100">
                <li>✓ Everything In Standard</li>
                <li>✓ Full Podcast Editing</li>
                <li>✓ 5 Reels</li>
                <li>✓ 2 Teasers</li>
                <li>✓ Thumbnail Design</li>
                <li>✓ Branding Area</li>
                <li>✓ Dedicated Content Creator</li>
                <li>✓ Makeup Artist</li>
                <li>✓ Professional Host</li>
              </ul>

              <div className="mt-8 text-teal-300">
                Perfect For: Brands, Businesses, Influencers,
                Celebrity Interviews
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="border-t border-teal-800 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-5xl font-bold">
            Ready To Record?
          </h2>

          <p className="mb-10 text-xl text-teal-200">
            Book your professional podcast production session today.
          </p>

          <a
            href="/book"
            className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white"
          >
            Book Studio Session
          </a>
        </div>
      </section>

    </main>
    </>
  );
}
