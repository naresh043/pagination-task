function ProductCard({ id, title, body }) {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
}
export default ProductCard;
