
window.dataLayer=window.dataLayer||[];
window.Analytics={
 history:[],
 push(event,payload={}){
   const data={event,...payload};
   window.dataLayer.push(data);
   this.history.unshift(data);
   this.history=this.history.slice(0,20);
   console.log("[DataLayer]",data);
   if(window.DebugPanel) DebugPanel.render();
 }
};
window.track=(e,p={})=>Analytics.push(e,p);
