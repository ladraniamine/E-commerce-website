//let productsInCart = localStorage.getItem('productsInCarts');
let productDOM = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");

/*if(productsInCart){
    let items = JSON.parse(productsInCart);
    drawProductsInCartUi(items);
}else{
    console.log("wrong");
}*/


function drawFavoretsProductsUi(allproducts = []){
    if(JSON.parse(localStorage.getItem("productsfavoret")).length === 0){
        noProductsDom.innerHTML = "no products";
    }
    let products = JSON.parse(localStorage.getItem("productsfavoret")) || allproducts; 
    console.log(products);
    let prodectsUI = products.map((item)=>{
        return `
        <div class="product-item">
        <img src="${item.imageurl}" class="product-item-img"alt="image1">
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <span>size: ${item.size}</span> <br>
            <span>quntatit: ${item.qty}</span>
        </div>
        <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">remove from favoret</button>
        </div>
    </div>
        `;
    });
    productDOM.innerHTML = prodectsUI.join("") ;
}
drawFavoretsProductsUi();

function removeItemFromCart(id){
    let productsfavoret = localStorage.getItem('productsfavoret');
if(productsfavoret){
    let items = JSON.parse(productsfavoret);
    let filtreditems =  items.filter((item)=>item.id !==id);
    localStorage.setItem("productsfavoret", JSON.stringify(filtreditems));
    drawFavoretsProductsUi(filtreditems);
}
}