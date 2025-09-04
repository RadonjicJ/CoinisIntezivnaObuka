import Card from "../Card/Card";

export default function ProductCard({
  id,
  title,
  price,
  image,
  isFeatured,
  onAdd,
  onDetails,
}) {
  return (
    <Card className="product-item">
      <figure className="product-image">
        <img src={image} alt={title} />
        {/* 
        <span className={isFeatured ? "product-featured" : "hidden"}>
          &hearts;
        </span>
        */}
        {isFeatured && <span className="product-featured">&hearts;</span>}
      </figure>
      <div className="product-data">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price} &euro;</p>
      </div>
      <div className="product-button">
        <button className="product-more-details" onClick={() => onDetails(id)}>
          Show More
        </button>
        <button className="product-add" onClick={() => onAdd(id)}>
          Add to List
        </button>
      </div>
    </Card>
  );
}
