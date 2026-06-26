
window.Router={
  page(){
    return location.pathname.split('/').pop()||'index.html';
  }
};
