export async function getCategories() {
  const fecthCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const jsonCategories = await fecthCategories.json();
  return jsonCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query ) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const fetchProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const jsonProducts = await fetchProducts.json();
  return jsonProducts;
}
