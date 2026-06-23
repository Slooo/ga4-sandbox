
function updateCounters(){
 const c=JSON.parse(localStorage.getItem('cart')||'[]').length;
 const f=JSON.parse(localStorage.getItem('favorites')||'[]').length;
 const ce=document.getElementById('cart-count'); if(ce) ce.textContent=c;
 const fe=document.getElementById('fav-count'); if(fe) fe.textContent=f;
}
document.addEventListener('DOMContentLoaded',()=>{
 const h=document.getElementById('header');
 if(h) h.innerHTML=`<div class="header p-3 d-flex justify-content-between">
 <a href="index.html"><b>Pink Store</b></a>
 <input placeholder="Поиск" onchange="track('search',{term:this.value})">
 <div><a href="favorites.html">❤️ <span id="fav-count">0</span></a>
 <a href="cart.html">🛒 <span id="cart-count">0</span></a></div></div>`;
 const s=document.getElementById('sidebar');
 if(s) s.innerHTML='<div class="sidebar">'+CATEGORIES.map(x=>`<div><a href="category.html?category=${x}">${x}</a></div>`).join('')+'</div>';
 const f=document.getElementById('footer');
 if(f) f.innerHTML='<div class="footer">Pink Store Analytics Sandbox</div>';
 updateCounters();
});
