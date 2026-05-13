// PRODUCTS

const products = [

  {
    name: "Fresh Tomatoes",
    hindi: "टमाटर",
    price: 40,
    quantity: "1kg",
    image: "tomato.jpg"
  },

  {
    name: "Wheat",
    hindi: "गेहूं",
    price: 30,
    quantity: "1kg",
    image: "wheat.jpg"
  },

  {
    name: "Rice",
    hindi: "चावल",
    price: 60,
    quantity: "1kg",
    image: "rice.jpg"
  }

];


// PRODUCT CONTAINER

const productsContainer =
document.getElementById("products");


// LOAD PRODUCTS

function loadProducts(productsToShow = products) {

  productsContainer.innerHTML = "";

  productsToShow.forEach(product => {

    productsContainer.innerHTML += `

    <div class="product-card">

      <img
      src="${product.image}"
      class="product-image">

      <h2>${product.name}</h2>

      <p>${product.hindi}</p>

      <p>Price: ₹${product.price}</p>

      <p>Quantity: ${product.quantity}</p>

      <button onclick="addToCart('${product.name}')">

        🛒 Add To Cart

      </button>

    </div>

    `;

  });

}


// SEARCH PRODUCT

function searchProduct() {

  const input =
  document.getElementById("search")
  .value
  .toLowerCase()
  .trim();

  let translatedInput = input;

  if (
    input.includes("tamatar") ||
    input.includes("टमाटर")
  ) {

    translatedInput = "fresh tomatoes";
  }

  else if (
    input.includes("gehun") ||
    input.includes("गेहूं")
  ) {

    translatedInput = "wheat";
  }

  else if (
    input.includes("chawal") ||
    input.includes("चावल")
  ) {

    translatedInput = "rice";
  }

  const filteredProducts =
  products.filter(product => {

    return (

      product.name
      .toLowerCase()
      .includes(translatedInput)

      ||

      product.hindi
      .includes(input)

    );

  });

  loadProducts(filteredProducts);

}


// VOICE SEARCH

function startVoiceSearch() {

  if (
    !(
      'webkitSpeechRecognition'
      in window
    )
  ) {

    alert(
      "Voice Search Not Supported"
    );

    return;
  }

  const recognition =
  new webkitSpeechRecognition();

  recognition.lang = "hi-IN";

  recognition.continuous = false;

  recognition.interimResults = false;

  recognition.start();

  recognition.onresult =
  function(event) {

    const transcript =
    event.results[0][0].transcript;

    document.getElementById("search")
    .value = transcript;

    searchProduct();

  };

}


// ADD TO CART

function addToCart(productName) {

  alert(
    productName +
    " Added To Cart ✅"
  );

}


// LANGUAGE SWITCH

let isHindi = false;

function switchLanguage() {

    const heading =
    document.getElementById("main-heading");

    const search =
    document.getElementById("search");

    const featureCards =
    document.querySelectorAll(".feature-card");

    if(!isHindi){

        heading.innerText =
        "किसानों से ताजे उत्पाद 🌱";

        search.placeholder =
        "उत्पाद खोजें...";

        featureCards[0].innerText =
        "🤖 एआई मूल्य तुलना";

        featureCards[1].innerText =
        "🚚 लाइव ऑर्डर ट्रैकिंग";

        featureCards[2].innerText =
        "🛒 स्मार्ट कार्ट सिस्टम";

        featureCards[3].innerText =
        "🌐 बहुभाषी समर्थन";

        isHindi = true;
    }

    else{

        heading.innerText =
        "Fresh Products From Farmers 🌱";

        search.placeholder =
        "Search products...";

        featureCards[0].innerText =
        "🤖 AI Price Comparison";

        featureCards[1].innerText =
        "🚚 Live Order Tracking";

        featureCards[2].innerText =
        "🛒 Smart Cart System";

        featureCards[3].innerText =
        "🌐 Multi Language Support";

        isHindi = false;
    }
}


// AI PRICE

function changeAIPrice(){

    const text =
    document.getElementById("ai-price-text");

    const prices = [

      "Wheat market price is ₹45/kg. FarmMart price is ₹30/kg. You save ₹15 🎉",

      "Rice market price is ₹75/kg. FarmMart price is ₹60/kg. You save ₹15 🎉",

      "Tomatoes market price is ₹55/kg. FarmMart price is ₹40/kg. You save ₹15 🎉"

    ];

    const randomPrice =
    prices[Math.floor(Math.random() * prices.length)];

    text.innerText = randomPrice;
}


// LIVE NOTIFICATIONS

const notifications = [

  "🚚 Order Delivered Successfully",

  "🌱 Fresh Vegetables Added",

  "🎉 New Farmer Joined FarmMart",

  "💰 Tomato Price Dropped Today",

  "🛒 20+ Users Shopping Right Now"

];

function showNotification(){

    const notification =
    document.getElementById("notification");

    const randomNotification =

    notifications[
      Math.floor(
        Math.random() *
        notifications.length
      )
    ];

    notification.innerText =
    randomNotification;

    notification.style.display =
    "block";

    setTimeout(() => {

      notification.style.display =
      "none";

    },3000);
}


// SHOW EVERY 5 SECONDS

setInterval(showNotification,5000);


// LOAD PRODUCTS

loadProducts();
// LOGIN POPUP

function openLogin(){

    document.getElementById(
      "login-modal"
    ).style.display = "flex";
}

function closeLogin(){

    document.getElementById(
      "login-modal"
    ).style.display = "none";
}


// NAVIGATION

function goHome(){

    window.scrollTo({

      top:0,
      behavior:"smooth"

    });
}

function openTracking(){

    window.location.href =
    "tracking.html";
}
