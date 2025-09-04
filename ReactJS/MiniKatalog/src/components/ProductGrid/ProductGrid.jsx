import { useState } from "react";

import { PRODUCTS } from "../../data";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid() {
  const [message, setMessage] = useState("");

  function handleAddToList(productId) {
    setMessage(`Product with id: ${productId} is added to List`);
  }

  function handleDetails(productId) {
    setMessage(`Show details for product with id: ${productId}`);
  }

  return (
    <section className="products-grid d-flex justify-content-between flex-wrap">
      {PRODUCTS.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onAdd={handleAddToList}
          onDetails={handleDetails}
        />
      ))}
      <p className="message">{message}</p>
    </section>
  );
}
