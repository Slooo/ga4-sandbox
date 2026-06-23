
function getFav(){return JSON.parse(localStorage.getItem('favorites')||'[]')}
function addToFavorites(id){const f=getFav();f.push(id);localStorage.setItem('favorites',JSON.stringify(f));track&&track('add_to_favorites',{item_id:id});alert('Добавлено');}
function renderFavorites(el){document.getElementById(el).innerHTML=getFav().map(i=>PRODUCTS.find(p=>p.id===i)?.name).join('<br>')}
