export default function HomePage() {
  return (
    <main className="p-6 max-w-6xl mx-auto bg-gradient-to-br from-white via-blue-50 to-purple-100 min-h-screen">
      <section className="text-center py-12">
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-800">Ediga Technology Solutions</h1>
        <p className="text-xl text-gray-700">Empowering Developers Through Coaching, Interviews & Job Placement</p>
      </section>
      <footer className="text-center py-6 text-sm text-gray-600">&copy; {new Date().getFullYear()} Ediga Technology Solutions LLC. All rights reserved.</footer>
    </main>
  );
}