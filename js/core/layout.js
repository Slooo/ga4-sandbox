
(function(){

const categories=[
["dress","Платья"],
["jeans","Джинсы"],
["sundress","Сарафаны"],
["skirts","Юбки"],
["tops","Топы и майки"],
["blouses","Блузки"],
["pants","Брюки"],
["lingerie","Нижнее белье"]
];

function count(name){
 try{
   return JSON.parse(localStorage.getItem(name)||"[]").length;
 }catch(e){
   return 0;
 }
}

function header(){
 return `
<nav class="navbar navbar-expand-lg bg-white shadow-sm">
<div class="container">
<a class="navbar-brand fw-bold" href="index.html">🌸 ${APP_CONFIG.storeName}</a>

<form class="d-flex search-box">
<input class="form-control" placeholder="Поиск товаров">
</form>

<div class="d-flex gap-3">

<a class="text-dark" href="favorites.html">
<i class="bi bi-heart"></i>
<span id="fav-count">${count("favorites")}</span>
</a>

<a class="text-dark" href="cart.html">
<i class="bi bi-cart3"></i>
<span id="cart-count">${count("cart")}</span>
</a>

</div>
</div>
</nav>`;
}

function sidebar(){

return `
<div class="list-group">

<div class="fw-bold mb-2">
Категории
</div>

${categories.map(c=>`
<a
class="list-group-item list-group-item-action category-link"
href="category.html?category=${c[0]}">
${c[1]}
</a>`).join("")}

<hr>

<a class="list-group-item list-group-item-action"
href="analytics-lab.html">
🧪 Analytics Lab
</a>

</div>
`;
}

function footer(){
return `
<div class="container text-center small text-muted">
Pink Store • Учебный проект GTM / GA4
</div>`;
}

document.addEventListener("DOMContentLoaded",()=>{

 const h=document.getElementById("header");
 if(h) h.innerHTML=header();

 const s=document.getElementById("sidebar");
 if(s) s.innerHTML=sidebar();

 const f=document.getElementById("footer");
 if(f) f.innerHTML=footer();

 const p=new URLSearchParams(location.search).get("category");

 if(p){
   document.querySelectorAll(".category-link").forEach(a=>{
      if(a.href.includes("category="+p)){
         a.classList.add("active");
      }
   });
 }

});

})();
