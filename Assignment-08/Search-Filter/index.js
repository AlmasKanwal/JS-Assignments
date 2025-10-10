let products = [
  {
    title: "Shampoo",
    price: "1200",
    brand: "Lifeboy",
    quantity: 10,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    id: 1,
    category: "cosmetic",
    image: "https://rakanaa.pk/cdn/shop/products/134357_0.jpg?v=1628285284"
  },
  {
    title: "Dove Soap",
    price: "300",
    brand: "Dove",
    quantity: 33,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    id: 2,
    category: "cosmetic",
    image: "https://nazarjanssupermarket.com/cdn/shop/products/dove-sensitive-skin-soap-106gm-usa-nazar-jan-s-supermarket.jpg?v=1715275648"
  },
  {
    title: "Dell Inspirion 15 5502",
    price: "164,999.00",
    brand: "Dell",
    quantity: 5,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    id: 3,
    category: "electronics",
    image: "https://dellshop.pk/wp-content/uploads/2021/10/Dell_pk.sku_5502-01.jpg"
  },
  {
    title: "Galaxy Z Fold6",
    price: "604,999.00",
    brand: "Samsung",
    quantity: 15,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    id: 4,
    category: "electronics",
    image: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-f956bdbgpkd/gallery/pk-galaxy-z-fold6-f956-519772-sm-f956bdbgpkd-thumb-543086728?$216_216_PNG$"
  },
  {
    title: "Red Velvet Cake",
    price: "2500",
    brand: "Ruhama",
    quantity: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    id: 5,
    category: "sweet",
    image: "https://sallysbakingaddiction.com/wp-content/uploads/2015/02/red-velvet-cake-recipe-4.jpg"
  }
];

const productContainer = document.getElementById("productContainer");

// Create product card
const generateProductCard = (product) => {
  return `
    <div class="card">
      <img src="${product.image}" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="fw-bold text-primary">Price: Rs. ${product.price}</p>
        <a href="#" class="btn btn-primary w-100">Buy Now</a>
      </div>
    </div>
  `;
};

// Render products
const renderProducts = (data) => {
  if (data.length > 0) {
    productContainer.innerHTML = data.map(generateProductCard).join("");
  } else {
    productContainer.innerHTML = `<h3 class="text-muted text-center">No item found</h3>`;
  }
};

// Initial render
renderProducts(products);

// Search filter
const searchProduct = (arr, keyword) => {
  return arr.filter((p) =>
    p.title.toLowerCase().includes(keyword.toLowerCase())
  );
};

const searchInput = (searchItem) => {
  let result = searchProduct(products, searchItem);
  renderProducts(result);
};

// Category filter
const filterByCategory = (category) => {
  if (!category) {
    renderProducts(products);
  } else {
    const filtered = products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
    renderProducts(filtered);
  }
};

// Sort A–Z or Z–A
const sortProducts = (order) => {
  let sorted = [...products];
  if (order === "asc") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else if (order === "desc") {
    sorted.sort((a, b) => b.title.localeCompare(a.title));
  }
  renderProducts(sorted);
};
