
function getFav(){return JSON.parse(localStorage.getItem('favorites')||'[]')}
function saveFav(v){localStorage.setItem('favorites',JSON.stringify(v));updateCounters();}
function addToFavorites(id){let f=getFav();f.push(id);saveFav(f);track('add_to_favorites',{item_id:id})}
function removeFromFavorites(id){saveFav(getFav().filter(x=>x!==id));track('remove_from_favorites',{item_id:id})}
