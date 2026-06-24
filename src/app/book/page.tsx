export default function BookPage() {
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
      <section className="mx-auto max-w-5xl px-6 py-32 text-center">
        <h1 className="mb-6 text-5xl font-bold">
          Book A Consultation
        </h1>

        <p className="text-xl text-teal-200">
          Online booking system coming soon.
        </p>
      </section>
    </main>
    </>
  );
}
