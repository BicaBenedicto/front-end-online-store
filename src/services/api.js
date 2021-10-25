export async function getCategories() {
  const fecthCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const jsonCategories = await fecthCategories.json();
  return jsonCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const fetchProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const jsonProducts = await fetchProducts.json();
  const { results } = jsonProducts;
  const output = results
    .map(({ id, title, price, thumbnail }) => ({ id, title, price, image: thumbnail }));
  return output;
}

export async function searchAPI(query) {
  const fecthSearch = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const jsonSearch = await fecthSearch.json();
  const { results } = jsonSearch;
  const output = results
    .map(({ id, title, price, thumbnail }) => ({ id, title, price, image: thumbnail }));
  return output;
}

export async function searchCategoryAPI(categoryId) {
  const fecthSearchCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const jsonSearchCategory = await fecthSearchCategory.json();
  return jsonSearchCategory;
}
