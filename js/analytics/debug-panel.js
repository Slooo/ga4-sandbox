
window.DebugPanel={
 init(){
  if(!window.APP_CONFIG||!APP_CONFIG.debug)return;
  const p=document.createElement("div");
  p.className="debug-panel show";
  p.id="debug-panel";
  document.body.appendChild(p);
  this.render();
 },
 render(){
  const el=document.getElementById("debug-panel");
  if(!el)return;
  el.innerHTML="<h6>DataLayer</h6>"+(Analytics.history.length?
   Analytics.history.map(e=>`<details><summary>${e.event}</summary><pre>${JSON.stringify(e,null,2)}</pre></details>`).join("")
   :"<small>Нет событий</small>");
 }
};
document.addEventListener("DOMContentLoaded",()=>DebugPanel.init());
