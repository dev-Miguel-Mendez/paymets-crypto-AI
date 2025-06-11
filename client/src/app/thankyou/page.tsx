"use client"


export default function ThankYouPage() {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-md space-y-6">
        <div className="text-center">
          <div className="text-4xl">🙏</div>
          <h2 className="text-2xl font-bold text-white mt-2">Thank You for Subscribing</h2>
          <p className="text-sm text-gray-400">We appreciate your support. Your subscription is now active.</p>
        </div>

        <div className="flex justify-center">
          <a
            href="/mysubscription"
            className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-xl transition"
          >
            Manage Subscription
          </a>
        </div>
      </div>
    </div>
  );
}