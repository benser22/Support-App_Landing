import Navbar from './components/Navbar/Navbar';
import Layout from './components/ui/Layout';
import Hero from './components/Hero/Hero';
import Supports from './components/Sections/Supports';
import About from './components/Sections/About';

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <Layout maxWidth="max-w-[1440px]">
        <Hero />
        <Supports />
        <About />
      </Layout>
    </main>
  );
}

export default App;
