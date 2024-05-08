import Navbar from './components/Navbar/Navbar';
import Layout from './components/ui/Layout';
import Hero from './components/Hero/Hero';
import Supports from './components/Sections/Supports';
import About from './components/Sections/About';
import Features from './components/Sections/Features';
import Explore from './components/Sections/Explore';
import Prices from './components/Sections/Prices';
import Testimonials from './components/Sections/Testimonials';
import Last from './components/Sections/Last';

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <Layout maxWidth="max-w-[1440px]">
        <Hero />
        <Supports />
        <About />
        <Features />
        <Explore />
        <Prices />
        <Testimonials />
        <Last />
      </Layout>
    </main>
  );
}

export default App;
