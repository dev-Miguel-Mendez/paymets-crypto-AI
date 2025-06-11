import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen   flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Welcome to PAIKETH
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10">
          Try the best AI models, pay with crypto. Anonymously, no credit card and no questions.
        </p>


        <div className="flex flex-wrap justify-center gap-4">
          <Link href={'/mysubscription'} className="px-6 py-3 text-lg font-medium bg-black text-white rounded-2xl shadow hover:bg-gray-900 transition">
            Your subscription
          </Link>
         
          <Link href={'/subscriptions'} className="px-6 py-3 text-lg font-medium  text-white rounded-2xl bg-[#7375ef] transition">
            Plans and Pricing
          </Link>
        </div>

        <footer className="mt-20 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} PAIKTETH. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
