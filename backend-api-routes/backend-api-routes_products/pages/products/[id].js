import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailedProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = response.status();
      throw error;
    }

    return res.json();
  };

  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) return <div>...Loading</div>;
  if (error)
    return (
      <>
        <div>Couldn\'t find a product you are looking for.</div>
        <div>Please try again.</div>
      </>
    );

  if (!data) return null;

  console.log("Product", data.name);

  return <div>Details Page of a {data.name}</div>;
}
