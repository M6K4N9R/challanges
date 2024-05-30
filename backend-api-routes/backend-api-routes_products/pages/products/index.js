import useSWR from "swr";
import { getAllProducts } from "@/services/productServices";

const fetcher = (...arg) => fetch(...arg).then((res) => res.json());

export default function ProductList() {
  const URL = "/api/products";
  const { data, error, isLoading } = useSWR(URL, fetcher);

  const products = data;
  if (isLoading) {
    return <div>...Loading</div>;
  }
  if (error) {
    return <div>Failed to load the Product</div>;
  }

  
  return (
    <>
      <div>Home Page</div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>{product.name}</div>
          </li>
        ))}
      </ul>
      <div>Sweet</div>
    </>
  );
}

export { fetcher };
