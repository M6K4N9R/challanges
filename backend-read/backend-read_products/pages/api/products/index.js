import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const products = await Product.find();
    if (!products) {
      return response.status(404).json({ status: "Your request is not found" });
    }
    
    return response.status(200).json(products);
  }
}