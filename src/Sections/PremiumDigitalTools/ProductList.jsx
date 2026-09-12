import { use } from "react";
import ProductCard from "../../Components/UI/ProductCard";

const ProductList = ({ productsData, setAddToCart, addToCart }) => {
  const products = use(productsData);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {products.map((product) => {
        return (
          <ProductCard
            addToCart={addToCart}
            setAddToCart={setAddToCart}
            key={product.id}
            product={product}
          ></ProductCard>
        );
      })}
    </div>
  );
};

export default ProductList;
