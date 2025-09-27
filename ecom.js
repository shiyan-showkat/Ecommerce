// var swiper = new swiper(".myswiper", {
//   loop: true,
//   navigation: {
//     nextEl: "#prev",
//     prevEl: "#next",
//   },
// });

// import { json } from "express";

// let carticon = document.querySelector(".cart-icon");
// let carttab = document.querySelector(".cart-tab");
// let closebtn = document.querySelector(".close-btn");
// carticon.addEventListener("click", () => {
//   carttab.classList.add("cart-tab-active");
// });
// closebtn.addEventListener("click", () => {
//   carttab.classList.remove("cart-tab-active");
// });

// let productlist = [];
// let cartproduct = [];
// const carttotal = document.querySelector(".cart-total");
// let cardlist = document.querySelector(".card-list");
// let cartvalue = document.querySelector(".cart-value");
// const updatetotals = () => {
//   let totalquantity = 0;
//   let totalprice = 0;
//   document.querySelectorAll(".item").forEach((item) => {
//     const quantity = parseInt(
//       item.querySelector(".quantity-value").textContent
//     );
//     const price = parseFloat(
//       item.querySelector(".item-total").textContent.replace("$", "")
//     );
//     totalprice += price;
//     totalquantity += quantity;
//   });

//   carttotal.textContent = `${totalprice.toFixed(2)}`;
//   cartvalue.textContent = totalquantity;
// };
// const showcard = () => {
//   productlist.forEach((product) => {
//     const ordercard = document.createElement("div");

//     ordercard.classList.add("order-card");
//     ordercard.innerHTML = `
//           <div class="card-image">
//             <img src="${product.image}">
//         </div>
//          <h4>${product.name}</h4>
//         <h4 class="price">${product.price}</h4>
//         <a href="#" class="btn card-btn">Add to cart</a>

//         `;
//     cardlist.append(ordercard);
//     let cardbtn = ordercard.querySelector(".card-btn");
//     cardbtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       addtocart(product);
//     });
//   });
// };
// let cartlist = document.querySelector(".cart-list");

// const addtocart = (product) => {
//   let existingproduct = cartproduct.find((item) => item.id == product.id);
//   if (existingproduct) {
//     alert("item already in your cart");
//     return;
//   }
//   cartproduct.push(product);
//   let quantity = 1;
//   let price = parseFloat(product.price.replace("$", ""));

//   let cartitem = document.createElement("div");
//   cartitem.classList.add("item");
//   cartitem.innerHTML = `
//      <div class="item-image">
//      <img src="${product.image}" alt="">
//      </div>
//     <div>
//        <h4>${product.name}</h4>
//        <h4 class="item-total">${product.price}</h4>
//     </div>
//     <div class="flex" style="justify-content: space-between; ">
//     <a href="#" class="quantity-btn minus">
//      <i class="fa solid fa-minus"></i>
//     </a>
//     <h4 class="quantity-value">${quantity}</h4>
//     <a href="#" class="quantity-btn plus">
//       <i class="fa solid fa-plus"></i>
//     </a>

//     `;

//   cartlist.append(cartitem);
//   updatetotals();
//   const plusbtn = cartitem.querySelector(".plus");
//   let minusbtn = cartitem.querySelector(".minus");
//   let itemtotal = cartitem.querySelector(".item-total");
//   let quantityvalue = cartitem.querySelector(".quantity-value");
//   plusbtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     quantity++;
//     quantityvalue.textContent = quantity;
//     itemtotal.textContent = `$ ${(price * quantity).toFixed(2)}`;
//     updatetotals();
//   });
//   minusbtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (quantity <= 1) {
//       cartitem.classList.add("slide-out");

//       setTimeout(() => {
//         cartitem.remove();
//         updatetotals();
//       }, 300);
//     } else {
//       quantity--;
//       quantityvalue.textContent = quantity;
//       itemtotal.textContent = `$ ${(price * quantity).toFixed(2)}`;
//       updatetotals();
//     }
//   });
// };
// const initapp = () => {
//   fetch("product.json").then((response) =>
//     response.json().then((data) => {
//       productlist = data;
//       showcard();
//     })
//   );
// };
// initapp();

// let carticon = document.querySelector(".cart-icon");
// let carttab = document.querySelector(".cart-tab");
// let closebtn = document.querySelector(".close-btn");
// let cardlist = document.querySelector(".card-list");
// let cartlist = document.querySelector(".cart-list");
// let hamburger = document.querySelector(".hamburger");
// let mobilemenu = document.querySelector(".mobile-menu");
// let bars = document.querySelector(".fa-bars");
// hamburger.addEventListener("click", () => {
//   mobilemenu.classList.toggle("mobile-menu-active");
// });
// hamburger.addEventListener("click", () => {
//   bars.classList.toggle("fa-circle-xmark");
// });

// let productlist = [];
// let cartproducts = [];

// carticon.addEventListener("click", () => {
//   carttab.classList.add("cart-tab-active");
// });

// closebtn.addEventListener("click", () => {
//   carttab.classList.remove("cart-tab-active");
// });

// // Initialize App
// const initapp = () => {
//   fetch("product.json")
//     .then((response) => response.json())
//     .then((data) => {
//       productlist = data;
//       cart();
//     });
// };
// let carttotal = document.querySelector(".cart-total");
// let cartvalue = document.querySelector(".cart-value");

// const updatetotals = () => {
//   let productPrice = 0;
//   let totalQuantity = 0;

//   // Get all item prices
//   let itemTotals = document.querySelectorAll(".item-total");
//   itemTotals.forEach((item) => {
//     let price = parseFloat(item.textContent.replace("$", ""));
//     productPrice += price;
//   });

//   // Get all quantities
//   let quantityValues = document.querySelectorAll(".quantity-value");
//   quantityValues.forEach((q) => {
//     let conto = parseInt(q.textContent.replace("$", ""));
//     totalQuantity += conto;

//     // totalQuantity += parseInt(q.textContent);
//   });

//   // Update cart values
//   carttotal.textContent = `$${productPrice.toFixed(2)}`;
//   cartvalue.textContent = totalQuantity;
// };

// const cart = () => {
//   productlist.forEach((product) => {
//     let order = document.createElement("div");
//     order.classList.add("order-card");
//     order.innerHTML = `
//       <div class="card-image">
//         <img src="${product.image}">
//       </div>
//       <h4>${product.name}</h4>
//       <h4 class="price">${product.price}</h4>
//       <a href="#" class="btn add-btn">Add to cart</a>
//     `;

//     let addbtn = order.querySelector(".add-btn");

//     addbtn.addEventListener("click", (e) => {
//       e.preventDefault();

//       addtocart(product);

//       cardlist.appendChild(order);
//     });
//   });
// };

// // Add to cart
// const addtocart = (product) => {
//   let existingproduct = cartproducts.find((item) => item.id === product.id);
//   if (existingproduct) {
//     alert("Item already in your cart");
//     return;
//   }

//   cartproducts.push(product);
//   let quantity = 1;

//   let item = document.createElement("div");
//   item.classList.add("item");

//   item.innerHTML = `
//     <div class="item-image">
//       <img src="${product.image}" alt="">
//     </div>
//     <div>
//       <h4>${product.name}</h4>
//       <h4 class="item-total">${product.price}</h4>
//     </div>
//     <div class="flex" style="justify-content: space-between;">
//       <a href="#" class="quantity-btn minus">-</a>
//       <h4 class="quantity-value">${quantity}</h4>
//       <a href="#" class="quantity-btn plus">+</a>
//     </div>
//   `;

//   cartlist.appendChild(item);
//   updatetotals();

//   let plus = item.querySelector(".plus");
//   let minus = item.querySelector(".minus");
//   let quantityvalue = item.querySelector(".quantity-value");
//   quantityvalue.textContent = quantity;
//   let price = parseFloat(product.price.replace("$", ""));

//   let itemtotal = item.querySelector(".item-total");
//   let carttotal = document.querySelector(".cart-total");

//   plus.addEventListener("click", (e) => {
//     e.preventDefault();
//     quantity++;

//     itemtotal.textContent = `${(price * quantity).toFixed(2)}`;

//     updatetotals();
//   });

//   minus.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (quantity <= 1) {
//       item.classList.add("slide-out");

//       setTimeout(() => {
//         item.remove();

//         updatetotals();
//       }, 300);
//     } else {
//       quantity--;
//       itemtotal.textContent = `${(price * quantity).toFixed(2)}`;

//       quantityvalue.textContent = quantity;

//       updatetotals();
//     }
//   });
// };

// // Start app
// initapp();

// -------------------- Select DOM elements --------------------
const carticon = document.querySelector(".cart-icon");
const carttab = document.querySelector(".cart-tab");
const closebtn = document.querySelector(".close-btn");
const cardlist = document.querySelector(".card-list");
const cartlist = document.querySelector(".cart-list");
const hamburger = document.querySelector(".hamburger");
const mobilemenu = document.querySelector(".mobile-menu");
const bars = document.querySelector(".fa-bars");
const carttotal = document.querySelector(".cart-total");
const cartvalue = document.querySelector(".cart-value");

// -------------------- Variables --------------------
let productlist = [];
let cartproducts = JSON.parse(localStorage.getItem("cart")) || []; // load saved cart

// -------------------- Mobile menu toggle --------------------
hamburger.addEventListener("click", () => {
  mobilemenu.classList.toggle("mobile-menu-active");
  bars.classList.toggle("fa-circle-xmark");
});

// -------------------- Cart tab toggle --------------------
carticon.addEventListener("click", () => {
  carttab.classList.add("cart-tab-active");
});

closebtn.addEventListener("click", () => {
  carttab.classList.remove("cart-tab-active");
});

// -------------------- Update totals --------------------
const updatetotals = () => {
  let productPrice = 0;
  let totalQuantity = 0;

  document.querySelectorAll(".item-total").forEach((item) => {
    productPrice += parseFloat(item.textContent.replace("$", ""));
  });

  document.querySelectorAll(".quantity-value").forEach((q) => {
    totalQuantity += parseInt(q.textContent);
  });

  carttotal.textContent = `$${productPrice.toFixed(2)}`;
  cartvalue.textContent = totalQuantity;
};

// -------------------- Render Cart from localStorage --------------------
const renderCart = () => {
  cartlist.innerHTML = ""; // clear existing
  cartproducts.forEach((product) => {
    addtocart(product, false); // false = don't push again
  });
  updatetotals();
};

// -------------------- Fetch products --------------------
const initapp = () => {
  fetch("product.json")
    .then((response) => response.json())
    .then((data) => {
      productlist = data;
      renderProducts();
      renderCart();
    });
};

// -------------------- Render products --------------------
const renderProducts = () => {
  cardlist.innerHTML = "";
  productlist.forEach((product) => {
    const order = document.createElement("div");
    order.classList.add("order-card");
    order.innerHTML = `
      <div class="card-image">
        <img src="${product.image}">
      </div>
      <h4>${product.name}</h4>
      <h4 class="price">${product.price}</h4>
      <a href="#" class="btn add-btn">Add to cart</a>
    `;

    const addbtn = order.querySelector(".add-btn");
    addbtn.addEventListener("click", (e) => {
      e.preventDefault();
      addtocart(product, true);
    });

    cardlist.appendChild(order);
  });
};

// -------------------- Add to cart --------------------
const addtocart = (product, pushToCart = true) => {
  if (pushToCart) {
    const existing = cartproducts.find((item) => item.id === product.id);
    if (existing) {
      alert("Item already in your cart");
      return;
    }
    cartproducts.push(product);
    localStorage.setItem("cart", JSON.stringify(cartproducts));
  }

  const quantity = 1;
  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = `
    <div class="item-image">
      <img src="${product.image}" alt="">
    </div>
    <div>
      <h4>${product.name}</h4>
      <h4 class="item-total">${product.price}</h4>
    </div>
    <div class="flex" style="justify-content: space-between;">
      <a href="#" class="quantity-btn minus">-</a>
      <h4 class="quantity-value">${quantity}</h4>
      <a href="#" class="quantity-btn plus">+</a>
    </div>
  `;
  cartlist.appendChild(item);

  let qty = quantity;
  const plus = item.querySelector(".plus");
  const minus = item.querySelector(".minus");
  const quantityvalue = item.querySelector(".quantity-value");
  const itemtotal = item.querySelector(".item-total");
  const price = parseFloat(product.price.replace("$", ""));

  plus.addEventListener("click", (e) => {
    e.preventDefault();
    qty++;
    quantityvalue.textContent = qty;
    itemtotal.textContent = `$${(price * qty).toFixed(2)}`;
    updatetotals();
  });

  minus.addEventListener("click", (e) => {
    e.preventDefault();
    if (qty <= 1) {
      item.remove();
      const index = cartproducts.findIndex((p) => p.id === product.id);
      if (index > -1) {
        cartproducts.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartproducts));
      }
    } else {
      qty--;
      quantityvalue.textContent = qty;
      itemtotal.textContent = `$${(price * qty).toFixed(2)}`;
    }
    updatetotals();
  });

  updatetotals();
};

// -------------------- Start app --------------------
initapp();
