//let productsInCart = localStorage.getItem('productsInCarts');
let productDOM = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");

/*if(productsInCart){
    let items = JSON.parse(productsInCart);
    drawProductsInCartUi(items);
}else{
    console.log("wrong");
}*/


function drawProductsInCartUi(allproducts = []){
    if(JSON.parse(localStorage.getItem("productsInCarts")).length === 0){
        noProductsDom.innerHTML = "no products";
    }
    let products = JSON.parse(localStorage.getItem("productsInCarts")) || allproducts; 
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
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">remove from cart</button>
        </div>
    </div>
        `;
    });
    productDOM.innerHTML = prodectsUI.join("");
}
drawProductsInCartUi();

function removeItemFromCart(id){
    let productsInCart = localStorage.getItem('productsInCarts');
if(productsInCart){
    let items = JSON.parse(productsInCart);
    let filtreditems =  items.filter((item)=>item.id !==id);
    localStorage.setItem("productsInCarts", JSON.stringify(filtreditems));
    drawProductsInCartUi(filtreditems);
}
}