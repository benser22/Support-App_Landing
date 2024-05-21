import { Suspense, lazy } from 'react';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/ui/Layout';
import Supports from './components/Sections/Supports';
import About from './components/Sections/About';
import Features from './components/Sections/Features';
import Explore from './components/Sections/Explore';
import Prices from './components/Sections/Prices';
import Testimonials from './components/Sections/Testimonials';
import Last from './components/Sections/Last';
import Footer from './components/Footer/Footer';
// import Hero from './components/Hero/Hero';

const LazyHero = lazy(() => import('./components/Hero/Hero'));

function App() {
  return (
    <main className="bg-[#FFFCF7]">
      <Navbar />
      <Layout maxWidth="max-w-[1440px]">
        <Suspense fallback={<Loader />}>
          <LazyHero />
        </Suspense>{' '}
        <Supports />
        <About />
        <Features />
        <Explore />
        <Prices />
        <Testimonials />
        <Last />
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
