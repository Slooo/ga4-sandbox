
window.Favorites={
 get(){return JSON.parse(localStorage.getItem("favorites")||"[]");},
 save(v){localStorage.setItem("favorites",JSON.stringify(v));},
 toggle(id){
   let f=this.get();
   if(f.includes(id)) f=f.filter(x=>x!==id);
   else f.push(id);
   this.save(f);
   location.reload();
 }
};
