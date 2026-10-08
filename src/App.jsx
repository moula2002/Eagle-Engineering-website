import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SmartAssistant } from './components/SmartAssistant';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Products = lazy(() => import('./pages/Products').then(module => ({ default: module.Products })));
const SubCategories = lazy(() => import('./pages/SubCategories').then(module => ({ default: module.SubCategories })));
const ProductDetails = lazy(() => import('./pages/ProductDetails').then(module => ({ default: module.ProductDetails })));
const Download = lazy(() => import('./pages/Download').then(module => ({ default: module.Download })));
const Quality = lazy(() => import('./pages/Quality').then(module => ({ default: module.Quality })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

// Loading Fallback Component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-[#0b2545] rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[var(--bg-primary)] text-slate-800 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/subcategories" element={<SubCategories />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/download" element={<Download />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <SmartAssistant />
      </div>
    </Router>
  );
}

export default App;
