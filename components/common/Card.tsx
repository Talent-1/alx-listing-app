import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description, imageSrc, href }) => {
  return (
    <article className="rounded-lg shadow-md overflow-hidden">
      {imageSrc && <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
      </div>
    </article>
  );
};

export default Card;
