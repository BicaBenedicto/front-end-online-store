export async function getCategories() {
  const fecthCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const jsonCategories = await fecthCategories.json();
  return jsonCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const jsonProducts = await fetchProducts.json();
  return jsonProducts;
}

export async function searchAPI(query) {
  const fecthSearch = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const jsonSearch = await fecthSearch.json();
  return jsonSearch;
}

export async function searchCategoryAPI(categoryId) {
  const fecthSearchCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const jsonSearchCategory = await fecthSearchCategory.json();
  return jsonSearchCategory;
}
