// Card.js

import React from "react";

const Card = ({ id, cardImage, cardTitle, time, description, price }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="p-4 text-center">
        <div className="m-4 pl-2">
          <img src={cardImage} alt={cardImage} className="mb-2 " />
        </div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-gray-800 text-left">
            {cardTitle}
          </h2>
          <p className="text-sm text-gray-600">{time}</p>
        </div>
        <p className="text-sm text-gray-600 text-left">{description}</p>
        <p className="mt-2 text-xl text-gray-800">{price}NGN</p>
      </div>
    </div>
  );
};

export default Card;
