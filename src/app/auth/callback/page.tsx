import Link from "next/link";

type CallbackPageProps = {
  searchParams: Promise<{
    code?: string;
  }>;
};

export default async function CallbackPage({ searchParams }: CallbackPageProps) {
  const params = await searchParams;
  const code = params.code;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#120019] px-6 text-white">
      <section className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.06] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
          Authentication Callback
        </p>

        <h1 className="mt-4 text-3xl font-bold">Avatar Pass connected</h1>

        <p className="mt-4 text-white/70">
          {code
            ? "Authorization code received. Next step is token exchange and session creation."
            : "No authorization code was received."}
        </p>

        <Link
          href="/onboarding/role"
          className="mt-8 block rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#120019]"
        >
          Continue to Role Selection
        </Link>
      </section>
    </main>
  );
}
