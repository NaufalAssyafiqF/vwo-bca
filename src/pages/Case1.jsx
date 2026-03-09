import React from 'react'
import { Clock, ChevronRight } from 'lucide-react';
import { promos } from '../datas/promoData';
import Card from '../components/Card';

const Case1 = () => {
    
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
          <Card {...promos[0]} />
          <Card {...promos[1]} />
          <Card {...promos[2]} />
          <Card {...promos[3]} />
        </div>
      </div>
    </div>
  )
}

export default Case1