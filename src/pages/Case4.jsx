import React, { useState } from 'react'

const Case4 = () => {
    // 1. Data gambar (bisa diganti dengan props atau API)
    const slides = [
        { url: 'https://pustaka.bca.co.id/Promo/A2C31A68-BC10-4CBD-AB51-85474A36CC50/Detail/ImageCover/20251121_Proteksi-myBCA-Banner.jpg?v=08032026082103', title: 'Promo 1' },
        { url: 'https://pustaka.bca.co.id/Promo/A2C31A68-BC10-4CBD-AB51-85474A36CC50/Detail/ImageCover/20250613_myBCA_Promo-Proteksi_BANNER.jpg?v=06032026141512', title: 'Promo 2' },
        { url: 'https://infoekonomi.id/wp-content/uploads/2025/03/20241001-mybca-banner.webp', title: 'Promo 3' },
    ];

    // 2. State untuk melacak index gambar saat ini
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <div className="w-full h-[80vh] relative group overflow-hidden bg-gray-900">
            {/* Gambar Latar dengan Transisi Halus */}
            <a href="/case4/detail" className='banner-case4'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className="w-full h-full bg-center bg-cover duration-700 ease-in-out transition-all"
                >
                    {/* Overlay Gelap agar Teks/Tombol lebih terlihat */}
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
            </a>


            {/* Tombol Navigasi - Kiri */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-8 -translate-y-1/2 text-white/50 hover:text-white text-5xl z-10 transition-colors"
            >
                ❮
            </button>

            {/* Tombol Navigasi - Kanan */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-8 -translate-y-1/2 text-white/50 hover:text-white text-5xl z-10 transition-colors"
            >
                ❯
            </button>

            {/* Indikator Bar (Gaya Modern) */}
            <div className="absolute bottom-10 w-full flex justify-center gap-4 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1 transition-all duration-500 rounded-full ${currentIndex === index ? 'bg-white w-12' : 'bg-white/40 w-6'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    )
}

export default Case4