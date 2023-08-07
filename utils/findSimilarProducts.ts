import { Product } from "@/types/Product";

function findSimilarProducts(product: Product, products: Product[]) {
  const similarProducts: Product[] = [];

  for (let i = 0; i < products.length; i++) {
    const p = products[i];

    if (
      p.subcategory.name === product.subcategory.name &&
      (p.price > product.price * 0.8 && p.price < product.price * 1.2)
    ) {
      if (!similarProducts.some((sp) => sp._id === p._id)) {
        similarProducts.push(p);
        if (similarProducts.length >= 4) {
          return similarProducts;
        }
      }
    }
  }

  for (let i = 0; i < products.length; i++) {
    const p = products[i];

    if (p.subcategory.name === product.subcategory.name) {
      if (!similarProducts.some((sp) => sp._id === p._id)) {
        similarProducts.push(p);
        if (similarProducts.length >= 4) {
          return similarProducts;
        }
      }
    }
  }

  return similarProducts;
}

export default findSimilarProducts;
