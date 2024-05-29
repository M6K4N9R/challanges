import { getProductById } from "@/services/productServices";

const handler = (request, response) => {
    
    
    const { id } = request.query;
    const singleProduct = getProductById(id);
    if (!singleProduct) {
      return response.status(404).json({ status: "Product not found" });
    }

    response.status(200).json(singleProduct);
};
export default handler;
