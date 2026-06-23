
function getCart(){return JSON.parse(localStorage.getItem('cart')||'[]')}
function addToCart(id){const c=getCart();c.push(id);localStorage.setItem('cart',JSON.stringify(c));track('add_to_cart',{item_id:id});alert('Добавлено');}
function renderCart(el){document.getElementById(el).innerHTML=getCart().map(i=>PRODUCTS.find(p=>p.id===i)?.name).join('<br>')}
