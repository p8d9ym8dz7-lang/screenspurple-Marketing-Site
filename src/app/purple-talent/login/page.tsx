import { getAvatarPassLoginUrl } from "@/lib/auth/avatarpass";

export default function LoginPage() {
  const loginUrl = getAvatarPassLoginUrl();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#120019] px-6 text-white">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.06] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
          Avatar Pass
        </p>

        <h1 className="mt-4 text-3xl font-bold">Login to Purple Talent</h1>

        <p className="mt-4 text-white/70">
          Continue with Email, OTP, Avatar and PIN using Avatar Pass.
        </p>

        <a
          href={loginUrl}
          className="mt-8 block rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#120019]"
        >
          Continue with Avatar Pass
        </a>
      </section>
    </main>
  );
}
