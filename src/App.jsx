import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import PageNotFound from './components/PageNotFound';

// Contact pulls in the Three.js/@react-three stack for the 3D Pikachu model —
// code-split so that weight only loads when someone actually visits /contact.
const Contact = lazy(() => import('./pages/Contact'));

// The tsparticles engine (~100KB) is decorative and needed on every route —
// deferred so it never blocks the initial page paint.
const Starfield = lazy(() => import('./components/Starfield'));

function App() {
  return (
    <div className="sky-mesh dark:bg-none dark:bg-transparent w-full min-h-screen">
      <Suspense fallback={null}><Starfield /></Suspense>
      {/* <Cursor /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Suspense fallback={null}><Contact /></Suspense>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;