import { getProducts } from "./database.js";

const products = getProducts();

export const Products = () => {
  let html = "<ul>";

  for (const product of products) {
    html += `<li data-type="product"
                 data-name="${product.name}"
                 data-price="${product.price}"
                >${product.name}</li>`;
  }

  html += "</ul>";

  return html;
};

document.addEventListener("click", (productClick) => {
  const clickedProduct = productClick.target;
  if (clickedProduct.dataset.type === "product") {
    const twoDecimalPrice = parseFloat(clickedProduct.dataset.price).toFixed(2);
    window.alert(`${clickedProduct.dataset.name} costs\n$${twoDecimalPrice}`);
  }
});
