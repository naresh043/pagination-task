function ProductCard({ id, title, body }) {
  return (
    <div className="product-card">
      <h3>{id}</h3>
      <p>{title}</p>
      <span>${body}</span>
    </div>
  );
}
export default ProductCard;