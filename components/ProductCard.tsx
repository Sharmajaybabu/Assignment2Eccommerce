import React from "react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="bg-[#141414] rounded-lg overflow-hidden shadow-xl relative flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#423e3e]">
      <div className="bg-white">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="object-contain h-64 w-full bg-white my-6"
        />
      </div>
      <button
        type="button"
        className="cursor-pointer absolute top-2 right-1 bg-white/80 rounded-full p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-6 h-6 text-black"
        >
          <path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z" />
        </svg>
      </button>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="text-lg font-medium text-[#E5DFD9] mb-2 truncate tracking-wider">
          {title}
        </div>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-[#E5DFD9] text-xl font-semibold tracking-wider">
              ₹ {price}
            </span>
            <span className="text-gray-400 line-through ml-2 text-sm tracking-wider">
              9999
            </span>
            <span className="text-green-400 ml-2 text-sm tracking-wider">
              (50% Off)
            </span>
          </div>
          <button
            type="button"
            className="bg-transparent border-none cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 39 45"
              className="w-7 h-7 text-white"
            >
              <path
                d="M24.1815 10.0283H30.7028V30.6788C30.7028 32.1733 30.1593 33.464 29.0725 34.5508C27.9856 35.6377 26.7629 36.1132 25.2684 36.1132H5.70471C4.21026 36.1132 2.9196 35.6377 1.83273 34.5508C0.745855 33.464 0.270349 32.1733 0.270349 30.6788V10.0283H6.79158C6.79158 8.4659 7.13123 7.03938 7.94638 5.68079C8.69361 4.3222 9.71255 3.30325 11.0711 2.4881C12.4297 1.74087 13.8562 1.3333 15.4866 1.3333C17.0489 1.3333 18.4755 1.74087 19.834 2.4881C21.1926 3.30325 22.2116 4.3222 23.0267 5.68079C23.774 7.03938 24.1815 8.4659 24.1815 10.0283ZM15.4866 3.50704C13.6525 3.50704 12.0901 4.18634 10.8674 5.40907C9.57669 6.69973 8.96533 8.26211 8.96533 10.0283H22.0078C22.0078 8.26211 21.3285 6.69973 20.1058 5.40907C18.8151 4.18634 17.2527 3.50704 15.4866 3.50704ZM28.529 30.6788V12.202H24.1815V15.4626C24.1815 15.8023 24.0457 16.074 23.8419 16.2778C23.6381 16.4816 23.3664 16.5495 23.0947 16.5495C22.755 16.5495 22.4833 16.4816 22.2795 16.2778C22.0757 16.074 22.0078 15.8023 22.0078 15.4626V12.202H8.96533V15.4626C8.96533 15.8023 8.82947 16.074 8.62568 16.2778C8.42189 16.4816 8.15017 16.5495 7.87845 16.5495C7.53881 16.5495 7.26709 16.4816 7.0633 16.2778C6.85951 16.074 6.79158 15.8023 6.79158 15.4626V12.202H2.44409V30.6788C2.44409 31.6299 2.71581 32.3771 3.39511 32.9884C4.00647 33.6677 4.7537 33.9395 5.70471 33.9395H25.2684C26.1515 33.9395 26.8987 33.6677 27.578 32.9884C28.1894 32.3771 28.529 31.6299 28.529 30.6788Z"
                fill="#E5DFD9"
              />
              <ellipse
                cx="28.351"
                cy="34.0184"
                rx="9.96603"
                ry="10.1951"
                fill="#141414"
              />
              <path
                d="M33.4404 32.6081C33.497 32.6081 33.5253 32.6364 33.5819 32.693C33.6385 32.7496 33.6668 32.7779 33.6668 32.8345V33.7403C33.6668 33.7969 33.6385 33.8535 33.5819 33.9101C33.5253 33.9667 33.497 33.9667 33.4404 33.9667H28.9117V38.4953C28.9117 38.5519 28.8834 38.6086 28.8268 38.6652C28.7702 38.7218 28.7419 38.7218 28.6853 38.7218H27.7796C27.723 38.7218 27.6663 38.7218 27.6097 38.6652C27.5531 38.6086 27.5531 38.5519 27.5531 38.4953V33.9667H23.0245C22.9679 33.9667 22.9113 33.9667 22.8547 33.9101C22.7981 33.8535 22.7981 33.7969 22.7981 33.7403V32.8345C22.7981 32.7779 22.7981 32.7496 22.8547 32.693C22.9113 32.6364 22.9679 32.6081 23.0245 32.6081H27.5531V28.0795C27.5531 28.0229 27.5531 27.9946 27.6097 27.938C27.6663 27.8814 27.723 27.8531 27.7796 27.8531H28.6853C28.7419 27.8531 28.7702 27.8814 28.8268 27.938C28.8834 27.9946 28.9117 28.0229 28.9117 28.0795V32.6081H33.4404Z"
                fill="#E5DFD9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
