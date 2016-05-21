namespace SugarComments
{
  export class Container
  {
    element: HTMLElement;
    id: string;
    page: number;
    
    constructor (element: HTMLElement)
    {
      this.element = element;
      this.id = this.element.dataset['id'] || window.location.pathname;
      this.page = parseInt(this.element.dataset['page']) || 0;
    }
  }
}
