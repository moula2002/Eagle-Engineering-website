import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Products = () => {
  const products = [
    { 
      name: 'Industrial Gears', 
      image: 'https://images.unsplash.com/photo-1537222718910-4bf690240d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      name: 'Shaft Components', 
      image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      name: 'Machined Parts', 
      image: 'https://images.unsplash.com/photo-1580974482531-18e388f6c382?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    { 
      name: 'Custom Solutions', 
      image: 'https://images.unsplash.com/photo-1611078810214-41d131ec8e32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-10 border-b-2 border-gray-200 pb-2">
          <h2 className="text-3xl font-heading font-bold text-[#0b2545] uppercase tracking-wide">
            OUR <span className="text-[var(--brand-red)]">PRODUCTS</span>
          </h2>
          <button className="flex items-center text-[var(--brand-red)] font-bold text-sm hover:text-red-800 transition-colors uppercase tracking-wider pb-1">
            VIEW ALL <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <div key={idx} className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
              <div className="h-48 w-full bg-gray-100 p-4 flex items-center justify-center">
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="max-h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center border-t border-gray-100">
                <h3 className="text-lg font-bold text-[#0b2545]">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
