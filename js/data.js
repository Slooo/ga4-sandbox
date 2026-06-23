
const CATEGORIES=['jeans','sundress','dresses','skirts','tops','blouses','pants','lingerie'];
const PRODUCTS=Array.from({length:24},(_,i)=>({
 id:i+1,
 name:'Product '+(i+1),
 category:CATEGORIES[i%8],
 price:20+i
}));
