const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Health",
  "Sports",
  "Gym",
];

const products = {
  Electronics: [
    "Phone",
    "Laptop",
    "Tablet",
    "Televisions",
    "Smart Watches",
    "Headphones",
    "Speakers",
    "Video Game Consoles",
    "VR Headsets",
  ],
  Clothing: [
    "Shirts",
    "Jeans",
    "Shoes",
    "Trousers",
    "Hoodies",
    "T-Shirts",
    "Sweaters",
    "Sweatpants",
    "Jackets",
    "Tuxedos",
  ],
  Books: [
    "Mystery",
    "Crime Thriller",
    "Science-Fiction",
    "Romance",
    "Fantasy",
    "Smuts",
    "Biography",
    "Supernatural Horror",
    "Poetry",
    "History",
  ],
  Health: [
    "Multivitamins",
    "Whey Protien",
    "Creatine",
    "Ashwagandha",
    "Fish Oil",
    "Magnesium",
    "Zinc",
    "Iron",
  ],
  Sports: [
    "Football",
    "Basketball",
    "Quanco",
    "Racket",
    "Tennis Ball",
    "Volleyball",
    "Badminton Racket",
  ],
  Gym: ["Belt", "Wrist Band", "Knee Cap", "Bags", "Bottle"],
};

const categoryDropdown = document.getElementById("category");
const productDropdown = document.getElementById("product");
const addButton = document.getElementById("addButton");
const enquiryList = document.getElementById("enquiryList");
const searchInput = document.getElementById("search");

let isFirstEnquiryAdded = true;

categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category;
  option.style.background = "black";
  option.textContent = category;
  categoryDropdown.appendChild(option);
});

categoryDropdown.addEventListener("change", () => {
  const selectedCategory = categoryDropdown.value;
  productDropdown.innerHTML = '<option value="">Select a product</option>';

  if (selectedCategory && products[selectedCategory]) {
    products[selectedCategory].forEach((product) => {
      const option = document.createElement("option");
      option.value = product;
      option.style.background = "black";
      option.textContent = product;
      productDropdown.appendChild(option);
    });

    productDropdown.disabled = false;
  } else {
    productDropdown.disabled = true;
  }
});

var x = 1;

addButton.addEventListener("click", () => {
  const category = categoryDropdown.value;
  const product = productDropdown.value;
  const quantity = document.getElementById("quantity").value;

  if (category && product && quantity && quantity > 0) {
    const listItem = document.createElement("li");
    listItem.textContent = `${x++}. Category: ${category}, Product: ${product}, Quantity: ${quantity}`;

    if (isFirstEnquiryAdded) {
      const deleteButton = document.createElement("button");
      deleteButton.className = "del-btn";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        enquiryList.removeChild(listItem);
      });

      listItem.appendChild(deleteButton);
    } else {
      isFirstEnquiryAdded = true;
    }

    enquiryList.appendChild(listItem);

    categoryDropdown.value = "";
    productDropdown.value = "";
    document.getElementById("quantity").value = "";
  }
});

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const enquiries = Array.from(enquiryList.getElementsByTagName("li"));

  enquiries.forEach((enquiry) => {
    const text = enquiry.textContent.toLowerCase();
    enquiry.style.display = text.includes(searchTerm) ? "" : "none";
  });
});
