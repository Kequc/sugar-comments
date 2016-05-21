declare namespace SugarComments {
    var containers: Container[];
}
declare namespace SugarComments {
    class Container {
        element: HTMLElement;
        id: string;
        url: string;
        page: number;
        constructor(element: HTMLElement);
    }
}
declare namespace SugarComments {
    namespace Url {
        function get(): string;
    }
}
