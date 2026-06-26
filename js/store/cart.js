
window.Cart={
 get(){return JSON.parse(localStorage.getItem("cart")||"[]");},
 save(v){localStorage.setItem("cart",JSON.stringify(v));},
 add(id){
   const c=this.get();
   c.push(id);
   this.save(c);
   if(window.track){
      const p=(window.PRODUCTS||[]).find(x=>x.id===id);
      if(p){
        track("add_to_cart",{
          ecommerce:{
            currency:"RUB",
            value:p.price,
            items:[{item_id:p.id,item_name:p.name,item_category:p.categoryName,price:p.price,quantity:1}]
          }
        });
      }
   }
   location.reload();
 },
 remove(index){
   const c=this.get();
   c.splice(index,1);
   this.save(c);
   location.reload();
 }
};
