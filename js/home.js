
// Function to fetch products from fakestoreapi.com in home page and populate it

// function getProduct() {
//     var xhttp = new XMLHttpRequest()
//     xhttp.open("Get", "https://fakestoreapi.com/products", true)
//     xhttp.send()
//     xhttp.onreadystatechange = function () {
//         if (this.status == 200 && this.readyState == 4) {
//             var productJson = JSON.parse(this.responseText)
//             var product = productJson;
//             // console.log(productJson);
//             // console.log(product[1].id);
//             // let productDiv = document.getElementById('prod')

//             for (var item of product) {
//                 document.getElementById('prodScroll').innerHTML += `<div class="${item.id}" >
//                         <img src="${item.image}" width="170px" height="170px"><br>
//                         <p> $${item.price} </p><br>
//                     </div>`

//             }



//         }

//     }
// }
//  getProduct();




// const productsList = document.getElementById("productList");

// Function to fetch products from fakestoreapi.com
// function fetchProducts() {
//     fetch("https://fakestoreapi.com/products")
//         .then((response) => response.json())
//         .then((data) => {
//             populateProductList(data);
//         })
//         .catch((error) => {
//             console.error("Error fetching products:", error);
//         });
// }

// // Function to populate the product list on the Home page
// function populateProductList(products) {
//     const productsList = document.getElementById("productList");

//     const listItems = products
//         .map(
//             (product) =>
//                 `<li class="product" data-id="${product.id}">${product.title}</li>`
//         )
//         .join("");
//     productsList.innerHTML = listItems;
//     console.log(productsList);
// }
// console.log(listItems);

// Add click event listener to the product list

// productList.addEventListener("click", function (event) {
//     if (event.target.classList.contains("product")) {
//         const productId = event.target.dataset.id;
//         window.location.href = `product.html?id=${productId}`;
//     }
// });

// Fetch products when the page loads
// fetchProducts();






// ------------------------------------------get Product Id------------------------------------------
// Add click event listener to the product list


// ------------------------------------------Scroll------------------------------------------

// let scroler;
// window.scrollTo(300, 500);
// // let slider = document.getElementById("prodScroll");
// function rightclick() {
//     rightButton.scrollTo(300, 500);
// }

//     console.log("yes");
//     scroler = 100;
//     let s = setInterval(() => {
//         scroler--;
//         if (scroler < 1) {
//             clearInterval(s);
//         }
//         slider.scrollBy(10, 0);
//     }, 5);
// };

// function leftclic() {
//     leftButton.scrollTo(300, 500);
// }
//     console.log("yes");
//     scroler = 100;
//     let s = setInterval(() => {
//         scroler--;
//         if (scroler < 1) {
//             clearInterval(s);
//         }
//         slider.scrollBy(-10, 0);
//     }, 5);
// };



//     `<div class="${item.id}">
//                              <p> title: ${item.title} </p><br>
//                             <p> price: ${item.price} $ </p><br>
//                             <p> description: ${item.description}</p><br>
//                             <p> category: ${item.category}</p><br>
//                             <img src="${item.image}" width="50px" height="50px"><br>
//  <p> rating:  <br> rate ${item.rating.rate} <br> count: ${item.rating.count} </p><br>
//                         </div>`