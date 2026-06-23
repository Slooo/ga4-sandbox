
window.dataLayer=window.dataLayer||[];
function track(event,data={}){
dataLayer.push({event,...data});
console.log('DL',event,data);
}
