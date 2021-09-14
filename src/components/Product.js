import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);

  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div>
      <p>{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4>{title}</h4>
      <div>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>
      <p>{description}</p>
      <div>
        <Currency quantity={price} currency="INR" />
      </div>
    </div>
  );
}

export default Product;
