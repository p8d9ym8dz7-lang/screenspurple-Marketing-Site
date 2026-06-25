export default function FilmMarketingPage() {
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

      <section className="px-6 py-32 text-center">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 text-6xl font-bold">
            Film Marketing That Creates Buzz,
            Builds Audiences & Drives Results
          </h1>

          <p className="mx-auto max-w-4xl text-xl text-teal-200">
            We design and execute complete film marketing campaigns
            from announcement to release.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/book"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white"
            >
              Schedule Consultation
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-orange-400 px-8 py-4"
            >
              Request Campaign Proposal
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-teal-800 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center text-4xl font-bold">
            Services
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Film Marketing Strategy",
              "Trailer & Teaser Marketing",
              "Digital Marketing",
              "Public Relations (PR)",
              "Influencer Campaigns",
              "Celebrity Management",
              "Event Marketing",
              "OTT Promotions",
              "Outdoor Advertising",
              "Content Production",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-teal-700 p-8"
              >
                <h3 className="text-xl font-bold">
                  {service}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="border-t border-teal-800 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Campaign Process
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Research",
              "Strategy",
              "Creative Planning",
              "Content Production",
              "Media Buying",
              "Influencer Execution",
              "PR Management",
              "Performance Tracking",
            ].map((step) => (
              <div
                key={step}
                className="rounded-xl border border-teal-700 p-6 text-center"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-teal-800 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Why Choose ScreensPurple
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Entertainment Industry Expertise",
              "Influencer Network",
              "Media Relationships",
              "Creative Production Team",
              "Film Marketing Specialists",
              "Nationwide Campaign Execution",
              "Measurable Results",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-teal-700 p-6"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-5xl font-bold">
            Your Story Deserves An Audience
          </h2>

          <p className="mb-10 text-xl text-teal-200">
            Let's build campaigns that create conversations,
            excitement and measurable success.
          </p>

          <a
            href="/book"
            className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white"
          >
            Start Your Campaign
          </a>
        </div>
      </section>

    </main>
    </>
  );
}
