import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials'; // Tambahkan ini

function App() {
  return (
    <div className="App bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials /> {/* Tambahkan ini */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2024 Amjaad Mafaza. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}

export default App;