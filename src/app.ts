namespace SugarComments
{
  export var containers: Container[] = [];
   
  function _init ()
  {
    let elements = document.querySelectorAll('.sugar-comments');
    for (let i = 0; i < elements.length; i++) {
      containers.push(new Container(<HTMLElement>elements.item(i)));
    }
  }
  
  document.readyState != 'loading' ? _init() : document.addEventListener('DOMContentLoaded', _init);
}
