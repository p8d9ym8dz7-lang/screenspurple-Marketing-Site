import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#120019] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-300">
          ScreensPurple Talent
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          The professional talent platform for film, media and creator industries.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Build a world-class portfolio as talent, or discover and contact verified
          creative professionals as an agent, casting director or production house.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/login"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#120019]"
          >
            Login with Avatar Pass
          </Link>

          <a
            href="https://screenspurple.com"
            className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white"
          >
            Back to ScreensPurple
          </a>
        </div>
      </section>
    </main>
  );
}
