let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details");
let productDetails = products.find((item)=> item.id == productId);
console.log(productDetails);

itemDom.innerHTML = `
<img src="${productDetails.imageurl}" alt="">
<h2>${productDetails.title}</h2>
<span>size: ${productDetails.size}</span> <br>
<span>quantatit: ${productDetails.qty}</span>
`