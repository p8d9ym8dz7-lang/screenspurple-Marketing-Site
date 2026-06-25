export default function DigitalMarketingPage() {
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

      <section className="px-6 py-32 text-center">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-6 text-6xl font-bold">
            Grow Faster With Data-Driven Digital Marketing
          </h1>

          <p className="text-xl text-teal-200">
            From content creation to performance marketing, we help businesses
            attract customers, generate leads and increase revenue.
          </p>
        </div>
      </section>

      <section className="border-t border-teal-800 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Services
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Social Media Management",
              "Content Creation",
              "Performance Marketing",
              "Influencer Marketing",
              "SEO",
              "Branding",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-teal-700 p-8"
              >
                <h3 className="text-2xl font-bold">{service}</h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="border-t border-teal-800 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Our Process
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Discovery",
              "Strategy",
              "Creative Development",
              "Campaign Execution",
              "Optimization",
              "Reporting",
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

    </main>
    </>
  );
}
