import instance from "../instance";

const getCategoryList = async () => {
  return await instance.get("/products/category-list");
};

export { getCategoryList };
