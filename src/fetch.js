import products from "../assets/products.json";
import allProducts from "../assets/allProducts.json";

const fetchProducts = async () => {
  // Simulating an API Request
  try {
    // This part needs investigation to check why is not working here.
    // in Node.js the reduce + map it works fine
    //const response = transformData(producs);
    //console.log("response: ", response);

    const response = allProducts;
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const transformData = (data) => {
  data.sort((a, b) => a.order - b.order);

  return Object.entries(data.reduce(groupByCategory, {})).map(
    ([category, data]) => ({
      category,
      data,
    })
  );
};

const groupByCategory = (prev, curr) => {
  prev[curr.category] = [...(prev[curr.category] || []), curr];
  return prev;
};

export default fetchProducts;
