import instance from "../instance";

const getCategoryList = async () => {
  return await instance.get("/products/categories");
};

const getProductById = async (id: number) => {
  return await instance.get(`https://dummyjson.com/products/${id}`)
}
export { getCategoryList,  getProductById};
