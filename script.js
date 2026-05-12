// PRODUCTS

const products = [

  {
    name: "Fresh Tomatoes",
    hindi: "टमाटर",
    price: 40,
    quantity: "1kg"
  },

  {
    name: "Wheat",
    hindi: "गेहूं",
    price: 30,
    quantity: "1kg"
  },

  {
    name: "Rice",
    hindi: "चावल",
    price: 60,
    quantity: "1kg"
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

  // HINDI TO ENGLISH

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

  recognition.onstart = function(){

    console.log("Voice Started");
  };


  recognition.onresult = function(event) {

    const transcript =
    event.results[0][0].transcript;

    console.log(transcript);

    document.getElementById("search")
    .value = transcript;

    searchProduct();

  };


  recognition.onerror = function(event){

    console.log(event.error);

    alert(
      "Voice Search Error"
    );
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


// LOAD PRODUCTS

loadProducts();
