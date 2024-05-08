import Navbar from './components/Navbar/Navbar';
import Layout from './components/ui/Layout';
import Hero from './components/Hero/Hero';
import Supports from './components/Sections/Supports';
import About from './components/Sections/About';
import Features from './components/Sections/Features';

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <Layout maxWidth="max-w-[1440px]">
        <Hero />
        <Supports />
        <About />
        <Features />
      </Layout>
    </main>
  );
}

export default App;
