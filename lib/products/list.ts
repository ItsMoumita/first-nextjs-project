import instance from "../instance";

const getProducts = async () => {
  return await instance.get("/products");

};

export { getProducts};
