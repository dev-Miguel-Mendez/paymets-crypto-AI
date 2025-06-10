export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#090A0B]  flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          YourWebsiteName
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10">
          Simple. Fast. Powerful. Start your journey with us today.
        </p>

        <div className="mb-10">
          <input
            type="text"
            placeholder="Start a chat or send a test message"
            className="w-full max-w-md px-4 py-3 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 text-lg font-medium bg-black text-white rounded-2xl shadow hover:bg-gray-900 transition">
            Login
          </button>
          <button className="px-6 py-3 text-lg font-medium bg-gray-200 text-gray-800 rounded-2xl hover:bg-gray-300 transition">
            About
          </button>
          <button className="px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition">
            Pricing
          </button>
        </div>

        <footer className="mt-20 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} YourWebsiteName. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
