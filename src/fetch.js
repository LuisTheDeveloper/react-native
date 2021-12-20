import products from "../assets/products.json";
import allProducts from "../assets/allProducts.json";

const fetchProducts = async () => {
  // Simulating an API Request
  try {
    //const response = await transformData(producs);
    const response = allProducts;
    //console.log("FETCH ", response);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const transformData = (data) => {
  data.sort((a, b) => a.order - b.order);
  return Object.entries(groupBy(data, "category"));
  // .map((item) => {
  //   return {
  //     category: item[0],
  //     data: item[1],
  //   };
  // });
};

const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};

export default fetchProducts;
