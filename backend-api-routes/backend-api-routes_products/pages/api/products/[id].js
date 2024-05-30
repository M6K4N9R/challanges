import { getProductById } from "@/services/productServices";

const handler = (request, response) => {
  const { id } = request.query;

  console.log("ID id the", id);

  if (!getProductById(id)) {
    return response.status(404).json({ status: "Product not found" });
  }

  response.status(200).json(getProductById(id));
};
export default handler;
