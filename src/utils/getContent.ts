const { currentBrand } = require('../../brand.config'); // Adjust the path as necessary

export const getContent = () => {
  // Dynamically require the brand's content based on currentBrand
  const brandData = require(`../content/${currentBrand}.json`); // Adjust the path as necessary
  return brandData;
};