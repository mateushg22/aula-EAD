import { ProductCard } from "./ProductCard";

export function ProductList({ products }) {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}
