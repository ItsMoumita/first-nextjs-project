import instance from "../instance";

const getProductsList = async () => {
  return await instance.get("/products/all");
};

export { getProductsList };
