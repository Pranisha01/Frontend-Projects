// to hover over images in section 4
function bigImg(x) {
    x.style.height = "400px";
    x.style.width = "200px";
  }
  
  function normalImg(x) {
    x.style.height = "140px";
    x.style.width = "200px";
  }
//   const images = ["img1", "img2","img3","img4","img5","img6","img7","img8","img9"];
 
//   for(let imgs of images){
//     const img=document.getElementById(imgs);
//     img.addEventListener('mouseover',()=>{
//       bigImg(img);
//     })
//   }
//   const image = ["img1", "img2","img3","img4","img5","img6","img7","img8","img9"];
//   for(let imgs of image){
//     const imgout=document.getElementById(imgs);
//   imgout.addEventListener('mouseout',()=>{
//     normalImg(imgout);
//   })
//   }


//  to add to cart
// const prod = ["Top Offers", "Mobiles & Tablets","Electronics","TVs & Appliances","Fashion","Beauty","Home & Furniture","Flights","Grocery"];
const prod = ["TopOffers","Mobiles&Tablets","Electronics","TVs&Appliances","Fashion","Beauty","Home&Furniture","Flights","Grocery"];
for(let x of prod){
  const prods=document.getElementById(x);
  prods.addEventListener('mouseover',()=>{
    prods.innerText="Add to Cart"
  })
}
// const prods = ["TopOffers", "Mobiles&Tablets","Electronics","TVs&Appliances","Fashion","Beauty","Home&Furniture","Flights","Grocery"];
for(let x of prod){
  const prods=document.getElementById(x);
  prods.addEventListener('mouseout',()=>{
    prods.innerText=x;
  })
}
 


// change login button color
  function changeColor() {
    const button = document.getElementById("myButton");
    button.style.backgroundColor = "red";
  }

  function normalColor() {
    const button = document.getElementById("myButton");
    button.style.backgroundColor = "";
  }


// Adding elements to cart
let count=0;
for(products of prod){
  const addToCart=document.getElementById(products);
  const countvalue=addToCart.addEventListener('click',()=>{
         count++;
        // console.log(count);
         changeCart(count);
  })
  // changeCart(countvalue);
}
 
function changeCart(count){
  const added=document.getElementById("add");
  added.innerText=count;
  added.style.color="Red";
  // console.log(count);
}
 