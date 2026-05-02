// App.jsx
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm"; // Поки закоментовано

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hour = new Date().getHours();
    const isDayTime = hour >= 7 && hour <= 21;
    setTheme(isDayTime ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    // Застосовуємо клас теми до body
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.style.backgroundColor = '#1a1a2e';
    } else {
      document.body.classList.remove('dark-mode');
      document.body.style.backgroundColor = '';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ліва колонка */}
          <div className="lg:col-span-1 space-y-8">
            <Contacts />
            <Skills />
            <Languages />
          </div>
          
          {/* Права колонка */}
          <div className="lg:col-span-2 space-y-8">
            <About />
            <Education />
            <Experience />
            <Project />
            <Reviews />
          </div>
        </div>
      </main>
      <Footer />
      <ContactForm /> 
    </div>
  );
}

export default App;