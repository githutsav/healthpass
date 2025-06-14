export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">HealthChain: Emergency Health Passport</h1>
      <p className="text-lg mb-8">Your health information, always accessible.</p>
      <a
        href="/login"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Generate Your Health Passport
      </a>
    </main>
  );
}
