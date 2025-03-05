import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { candles, testimonials } from "../../mock/products";
import { IoCheckmark } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { BsEnvelopeCheckFill, BsTelephoneInboundFill  } from "react-icons/bs";


const ViewProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = [...candles, ...testimonials].find((item) => item.id === id);

  if (!product) {
    return (
      <div className="text-center mt-10 h-screen flex justify-center items-center text-red-500">
        Produsul nu a fost găsit!
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 pt-[85px] pb-[105px]">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-200 px-4 py-2 rounded-md text-gray-800 mb-4 hover:bg-gray-300"
      >
        ← Produse
      </button>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-xl text-[#7a6e44] mt-4">RON {product.price}</p>
          <p className="text-gray-500 mt-2 text-justify">{product.description}</p>
          <span className="text-gray-600 mt-4 flex flex-col gap-3">
            <h1 className="text-[#7a6e44]">Pentru comenzi</h1>
            <p className="flex justify-start items-center gap-2"><BsEnvelopeCheckFill/> mail@mail.com</p>
            <p className="flex justify-start items-center gap-2"><BsTelephoneInboundFill/> +0123 456 789</p>
          </span>

          <div className="flex items-center gap-3 mt-4">
            {product.stock ? (
              <div className="flex justify-start items-center gap-2">
                <IoCheckmark className="text-green-500 text-2xl" />
                <p className="text-gray-500 text-sm">Produs disponibil gata de livrare.</p>
              </div>
            ) : (
              <div className="flex justify-start items-center gap-2">
                <IoIosClose className="text-red-500 text-3xl" />
                <p className="text-gray-500 text-sm">Produs indisponibil momentan.</p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={product.img}
            alt={product.title}
            className="w-full md:w-[450px] md:h-[450px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
