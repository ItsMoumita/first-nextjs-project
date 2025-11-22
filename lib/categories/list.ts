import instance from "../instance";

const getCategoryList = async () => {
  return await instance.get("/products/categories");
};

export { getCategoryList };
