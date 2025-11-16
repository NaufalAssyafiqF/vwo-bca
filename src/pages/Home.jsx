import { Clock, ChevronRight } from 'lucide-react';

const promos = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?w=400&h=300&fit=crop',
    badge: 'food',
    title: 'Blu Shaak - Bonus Soft Ice Cream Setiap Rabu',
    period: 'Periode 17 Nov 2025 - 31 Mei 2026',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    badge: 'food',
    title: 'Food Fair Mal Ciputra Semarang - Dapatkan Voucher',
    period: 'Periode 15 Nov 2025 - 31 Des 2025',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=300&fit=crop',
    badge: 'food',
    title: 'Xpress Mart Tarakan - Dapatkan Gula Pasir 1 Kg',
    period: 'Periode 15 Nov 2025 - 31 Jan 2026',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    badge: 'travel',
    title: 'Mastercard Contactless Bali - Dapatkan Voucher',
    period: 'Periode 07 Okt 2025 - 30 Nov 2025',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
    badge: 'hobby',
    title: 'Seminggu Kopitiam Medan - Potongan Rp30.000',
    period: 'Periode 01 Des 2025 - 31 Jan 2026',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    badge: 'hobby',
    title: 'QQ Kopitiam - Diskon 15% Setiap Senin',
    period: 'Periode 10 Nov 2025 - 09 Des 2026',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    badge: 'Hotel',
    title: 'Cambridge Hotel - Diskon Rp100 Ribu',
    period: 'Periode 07 Nov 2025 - 30 Des 2025',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
    badge: 'intertaiment',
    title: 'Kopitiam - Penawaran Spesial (Diskon 15% dan Cashback)',
    period: 'Periode 17 Nov 2025 - 31 Mei 2026',
  },
];

export default function App() {
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
          {promos.map((promo) => (
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
                    {promo.badge}
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