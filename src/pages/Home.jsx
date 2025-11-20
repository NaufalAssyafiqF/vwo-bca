import { Clock, ChevronRight } from 'lucide-react';
import { promos } from '../datas/promoData';


export default function App() {
  const randomPromos = [...promos]
  .sort(() => Math.random() - 0.5)
  .slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-semibold text-blue-600">Promo Terbaru</h2>
            <div className="h-1 w-16 bg-blue-600 mt-2"></div>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Lihat Semua Promo
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Promo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {randomPromos.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  <span className="text-xs font-semibold text-gray-700">
                    {promo.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-medium text-gray-900 mb-3 line-clamp-2 min-h-[3rem]">
                  {promo.title}
                </h3>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">{promo.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}