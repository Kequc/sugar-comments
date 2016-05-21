namespace SugarComments
{
  export namespace Url
  {
    export function get ()
    {
      return window.location.hostname + window.location.pathname + _query();
    }
    
    function _query (): string
    {
      // alphabetical sans ignored
      let result: string[] = [];
      if (document.location.search) {
        let params: string[] = document.location.search.substr(1).split('&');
        let ignored: string[] = [];
        for (let i = 0; i < params.length; i++) {
          if (ignored.indexOf(params[i].split("=")[0]) <= -1)
            result.push(params[i]);
        }
      }
      return (result.length > 0) ? "?" + result.sort().join("&") : "";
    }
  }
}
