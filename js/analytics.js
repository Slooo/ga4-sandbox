
window.dataLayer=window.dataLayer||[];
function track(event,data={}){
 dataLayer.push({event,...data});
 console.log('DataLayer',event,data);
}
