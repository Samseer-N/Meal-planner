const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function getMeals(search = "chicken") {
  const response = await fetch(
    `${BASE_URL}/search.php?s=${search}`
  );

  const data = await response.json();

  return data.meals;
}

export async function getCategories() {
  const response = await fetch(
    `${BASE_URL}/categories.php`
  );

  const data = await response.json();

  return data.categories;
}

export async function getMealDetails(id) {
  const response = await fetch(
    `${BASE_URL}/lookup.php?i=${id}`
  );

  const data = await response.json();

  return data.meals[0];
}
