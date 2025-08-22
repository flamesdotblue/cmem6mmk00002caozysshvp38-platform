export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Hello, World!</h1>
        <p className="mt-2 text-gray-600">
          This is a minimal Next.js + Tailwind server. Try the API endpoint at
          <code className="ml-1 rounded bg-gray-200 px-1 py-0.5 text-sm">/api/hello</code>.
        </p>
      </div>
    </main>
  );
}
