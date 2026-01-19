import instance from "../instance";

const getProducts = async () => {
  return await instance.get("/products");

};

const getProductById = async (id:number) => {
  console.log("Calling API with ID:", id);
  return await instance.get(`/products/${id}`)
}

export { getProducts, getProductById };
