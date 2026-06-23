
function getCart(){return JSON.parse(localStorage.getItem('cart')||'[]')}
function saveCart(v){localStorage.setItem('cart',JSON.stringify(v));updateCounters();}
function addToCart(id){let c=getCart();c.push(id);saveCart(c);track('add_to_cart',{item_id:id})}
function removeFromCart(id){saveCart(getCart().filter(x=>x!==id));track('remove_from_cart',{item_id:id})}
