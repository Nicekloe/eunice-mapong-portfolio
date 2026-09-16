(function(){
  var root=document.documentElement, btn=document.getElementById('themer');
  var saved=null;
  try{ saved=localStorage.getItem('theme'); }catch(e){}
  if(saved) root.setAttribute('data-theme',saved);
  btn.addEventListener('click',function(){
    var cur=root.getAttribute('data-theme')||'dark';  // dark is the default
    var next=cur==='light'?'dark':'light';
    root.setAttribute('data-theme',next);
    try{ localStorage.setItem('theme',next); }catch(e){}
  });
  document.getElementById('yr').textContent=new Date().getFullYear();
})();
