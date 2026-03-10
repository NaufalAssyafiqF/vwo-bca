import React from 'react'

function Case2() {
  return (
    <section className="relative bg-gradient-to-br from-white-900 to-gray-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-25 grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            BCA Singapore Airlines <br />
            KrisFlyer Visa Signature
          </h1>

          <p className="text-lg opacity-90 mb-8 max-w-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ipsam mollitia voluptatem quae aperiam cum explicabo eveniet, tempore iusto obcaecati.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://www.bca.co.id/-/media/Feature/Credit-Card/SQ/SQ-signature.png?v=1"
            alt="BCA KrisFlyer Visa Signature"
            className="w-[380px] md:w-[420px] drop-shadow-2xl animate-float"
          />
        </div>
      </div>
    </section>
  )
}

export default Case2