import React from 'react'
import { Clock } from 'lucide-react';

const Card = ({ id, image, category, title, period }) => {
    return (
        <div
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                    <span className="text-xs font-semibold text-gray-700">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="text-base font-medium text-gray-900 mb-3 line-clamp-2 min-h-[3rem]">
                    {title}
                </h3>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="leading-tight">{period}</span>
                </div>
            </div>
        </div>
    )
}

export default Card