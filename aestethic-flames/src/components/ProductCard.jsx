import React from 'react'
import { candles, testimonials } from '../mock/products'
import { useNavigate } from 'react-router'

const ProductCard = () => {

  const navigate = useNavigate();

    return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Colectie lumanari</h2>
    
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {candles.map((p) => (
                <div key={p.id} className="group relative">
                  <img
                    src={`${p.img}`}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex flex-col justify-between w-full h-20">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <button onClick={() => navigate(`/products/${p.id}`)}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {p.title}
                        </button>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900 w-[45px]">{p.price}RON</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Colectie marturii</h2>
    
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {testimonials.map((p) => (
                <div key={p.id} className="group relative">
                  <img
                    src={`${p.img}`}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex flex-col justify-between w-full h-20">
                    <div>
                      <h3 className="text-sm text-gray-700">
                      <button onClick={() => navigate(`/products/${p.id}`)}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {p.title}
                        </button>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900 w-[45px]">{p.price}RON</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
            

        </div>
      )
}

export default ProductCard