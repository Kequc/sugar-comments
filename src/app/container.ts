namespace SugarComments
{
  export class Container
  {
    element: HTMLElement;
    id: string;
    url: string;
    page: number;
    
    constructor (element: HTMLElement)
    {
      this.element = element;
      this.id = this.element.dataset['id'];
      this.url = Url.get();
      this.page = parseInt(this.element.dataset['page']) || 0;
    }
  }
}
