const products = [

  {
    name: "Tomatoes",
    price: 40,
    rating: "4.5",
    image:
    "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400"
  },

  {
    name: "Wheat",
    price: 30,
    rating: "4.3",
    image:
    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400"
  },

  {
    name: "Vegetables",
    price: 50,
    rating: "4.7",
    image:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400"
  }

];

// SELLER PRODUCTS

let sellerProducts =

JSON.parse(
localStorage.getItem("sellerProducts")
)

|| [];

const allProducts = [

  ...products,

  ...sellerProducts
];

// PRODUCT CONTAINER

const productContainer =
document.getElementById("products");

// DISPLAY PRODUCTS

function displayProducts(items) {

  productContainer.innerHTML = "";

  items.forEach(product => {

    productContainer.innerHTML += `

    <div class="card">

      <img
      src="${product.image}"
      class="product-img">

      <h2>${product.name}</h2>

      <p>
        ₹${product.price}/kg
      </p>

      <p>
        ⭐ ${product.rating}
      </p>

      <div class="btns">

        <!-- BUY -->

        <button class="buy-btn">

          Buy

        </button>

        <!-- WISHLIST -->

        <button
        onclick="addWishlist('${product.name}')"

        class="buy-btn">

        ❤️

        </button>

        <!-- CART -->

        <button
        class="cart-btn"

        onclick="addToCart('${product.name}')">

        🛒 Add

        </button>

      </div>

    </div>

    `;
  });
}

// SHOW PRODUCTS

displayProducts(allProducts);

// SEARCH

function searchProduct() {

  const search =

  document
  .getElementById("search")
  .value
  .toLowerCase();

  const filtered =

  allProducts.filter(product =>

    product.name
    .toLowerCase()
    .includes(search)
  );

  displayProducts(filtered);
}

// ADD TO CART

function addToCart(name){

  const selectedProduct =

  allProducts.find(product =>

    product.name === name
  );

  let cart =

  JSON.parse(
  localStorage.getItem("cart")
  )

  || [];

  cart.push(selectedProduct);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  showNotification(
  name + " added to cart 🛒"
  );
}

// WISHLIST

function addWishlist(name){

  showNotification(
  name + " added to wishlist ❤️"
  );
}

// NOTIFICATION

function showNotification(message){

  let note =
  document.createElement("div");

  note.innerText = message;

  note.style.position = "fixed";

  note.style.top = "20px";

  note.style.right = "20px";

  note.style.background = "green";

  note.style.color = "white";

  note.style.padding = "15px";

  note.style.borderRadius = "10px";

  note.style.zIndex = "1000";

  document.body.appendChild(note);

  setTimeout(()=>{

    note.remove();

  },2000);
}

// DARK MODE

function toggleDarkMode(){

  document.body
  .classList
  .toggle("dark-mode");
}

// LANGUAGE SWITCH

function changeLanguage(lang){

  if(lang === "hi"){

    document.getElementById(
    "heroTitle"
    ).innerHTML =

    "किसानों से ताज़ा उत्पाद 🌱";

    document.getElementById(
    "heroText"
    ).innerHTML =

    "आसान • तेज • सीधा";
  }

  else{

    document.getElementById(
    "heroTitle"
    ).innerHTML =

    "Fresh Products From Farmers 🌱";

    document.getElementById(
    "heroText"
    ).innerHTML =

    "Easy • Fast • Direct";
  }
}
// VOICE SEARCH

function startVoiceSearch(){

  const recognition =

  new webkitSpeechRecognition();

  recognition.lang = "en-IN";

  recognition.start();

  recognition.onresult = function(event){

    const text =

    event.results[0][0].transcript;

    document.getElementById(
    "search"
    ).value = text;

    searchProduct();

    showNotification(
    "Voice Search: " + text
    );
  };
}
// MOBILE MENU

function toggleMenu(){

  document
  .getElementById("navLinks")
  .classList
  .toggle("show");
}