const loadCategory = () => {
  url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCategory(data.data.news_category));
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  for (const category of categories) {
    // console.log(category);
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
            <button onclick="loadNews(${category.category_id})" class="ctg-btn bg-white fs-5 px-3">${category.category_name}</button>
          
    `;
    categoryContainer.appendChild(categoryDiv);
  }
};

const loadNews = (categoryId) => {
  url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const displayNews = () => {};

loadCategory();

// const displayCategory = (categories) => {
//   const categoryContainer = document.getElementById("category-container");
//   console.log(categories);
//   const categoryDiv = document.createElement("div");
//   categoryDiv.innerHTML = `
//           <button class="ctg-btn bg-white fs-5 px-3">${categories[0].category_name}</button>
//           <button class="ctg-btn bg-white fs-5 px-3">${categories[1].category_name}</button>

//     `;
//   categoryContainer.appendChild(categoryDiv);
// };

// loadNews();
