

//products
let productDOM = document.querySelector(".products");
let addUrProduct = document.querySelector(".addurproduct");
let badg = document.querySelector(".badg");
let opencart = document.querySelector(".fa-shopping-cart");
let cartOfProducts = document.querySelector(".carts-products");
let products = productsDB;
//display product 
let drawProductsUi;
( drawProductsUi = function (products = []){
    let prodectsUI = products.map((item)=>{
        console.log("eee" , item);
        return `
        <div class="product-item">
        <img src="${item.imageurl}" class="product-item-img"alt="image1">
        <div class="product-item-desc">
            <a onclick='saveItemData(${item.id})'>${item.title}</a>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <span>size: ${item.size}</span>
            
        </div>
        <div class="product-item-actions">
                <button class="add-to-cart" onclick="addtocart(${item.id})">add to cart</button>
                <i class="favoret fa fa-heart" style="color:${item.liked == true ? 'red' : ''} " onclick="addtofavoret(${item.id})"></i>
        </div>
    </div>
        `;
    });

    productDOM.innerHTML = prodectsUI.join("") ;
})(JSON.parse(localStorage.getItem("products"))||products );

//check if there is items in localStorage
let additem = JSON.parse(localStorage.getItem('productsInCarts')) 
    ? JSON.parse(localStorage.getItem('productsInCarts')) 
     :[] ;
  
 if(additem){
     additem.map(item =>{
        addUrProduct.innerHTML += ` <p>${item.title} ${item.qty}</p>`;
     }); 
     let productscontor = document.querySelectorAll(".addurproduct p");
     badg.style.display = "block"; 
     badg.innerHTML += productscontor.length;

 }

 //add to cart
 let allitems = [];
 console.log("allitems", allitems);
function addtocart(id){
    
    let product = products.find((item)=> item.id === id );
    let isproductincart = allitems.some((i) => i.id === product.id);
    if(isproductincart){
       allitems =  allitems.map((p) => {
            if(p.id === product.id) p.qty +=1 ;
             return p ;
        
        });
       
    }else{
        allitems.push(product);
    }

    addUrProduct.innerHTML = "";
    allitems.forEach((item)=>{
        addUrProduct.innerHTML += ` <p>${item.title} ${item.qty}</p>`;
    });

    localStorage.setItem('productsInCarts', JSON.stringify(allitems));
    let productscontor = document.querySelectorAll(".addurproduct p");
    badg.style.display = "block";
    badg.innerHTML = productscontor.length;
   //additem = [...additem,chooseitem];
  //let uniqueProducts = getUniqueArr(additem , "id");

}

function getUniqueArr(arr , filterType){
let unique = arr.map((item)=>  item[filterType])
                .map(( item, i, final)=>final.indexOf(item) ===i && i)
                .filter((item)=> arr[item])
                .map((item)=> arr[item]);
return unique ; 
}

// check login user
function checkloginuser(){
    if(localStorage.getItem("username")){
        window.location = "addproduct.html";
    }else{
      window.location = "login.html";
    }
}

// open cart menu
opencart.addEventListener("click", ()=>{
if(addUrProduct.innerHTML !=""){
    if(    cartOfProducts.style.display==="block"){
        cartOfProducts.style.display="none";
    }else {
        cartOfProducts.style.display="block";
    }
}

})

function saveItemData(id){
    localStorage.setItem('productId', id);
    window.location = "itemdetails.html"
}

//search function 

let input = document.getElementById("search");

input.addEventListener("keyup",function(e){
  
        search(e.target.value , JSON.parse(localStorage.getItem("products")));
    

    if(e.target.value.trim() ==="" ){
        drawProductsUi(JSON.parse(localStorage.getItem("products")))
    }
});

function search(title , myarry){
let arr = myarry.filter((item) => item.title.indexOf(title) !== -1);
drawProductsUi(arr);
}

//add to favoret
let allfavoret = JSON.parse(localStorage.getItem('productsfavoret')) 
    ? JSON.parse(localStorage.getItem('productsfavoret')) 
     :[] ;

function addtofavoret(id){
    
    let chooseitem = products.find((item)=> item.id === id );
    
    allfavoret = [...allfavoret,chooseitem];
    let uniqueProducts = getUniqueArr(allfavoret , "id");
   chooseitem.liked = true ; 

localStorage.setItem('productsfavoret', JSON.stringify(uniqueProducts));
products.map((item) => {
    if(item.id === chooseitem.id){
        item.liked = true ;
    }
})
localStorage.setItem('products', JSON.stringify(products));
drawProductsUi(products);

}
