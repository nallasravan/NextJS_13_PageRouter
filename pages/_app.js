
import '@/styles/globals.css';   // Tailwind + base styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  return (
<div className="min-h-screen flex flex-col">
   <Navbar />
      <main className="flex-1 container max-w-7xl mx-auto p-8">
        <Component {...pageProps} />
      </main>
    <Footer />
  </div>

  )
}
