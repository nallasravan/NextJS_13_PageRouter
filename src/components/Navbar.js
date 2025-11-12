import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyan-400">
          MyApp
        </Link>
        <div className="flex gap-8">
          <Link href="/" className="text-cyan-400 hover:text-white transition">
            Home
          </Link>
          <Link href="/about" className="text-cyan-400 hover:text-white transition">
            About
          </Link>
          <Link href="/dashboard" className="text-cyan-400 hover:text-white transition">
            Dashboard 
          </Link>
        </div>
      </div>
    </nav>
  );
}