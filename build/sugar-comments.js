var SugarComments;
(function (SugarComments) {
    SugarComments.containers = [];
    function _init() {
        var elements = document.querySelectorAll('.sugar-comments');
        for (var i = 0; i < elements.length; i++) {
            SugarComments.containers.push(new SugarComments.Container(elements.item(i)));
        }
    }
    document.readyState != 'loading' ? _init() : document.addEventListener('DOMContentLoaded', _init);
})(SugarComments || (SugarComments = {}));
var SugarComments;
(function (SugarComments) {
    var Container = (function () {
        function Container(element) {
            this.element = element;
            this.id = this.element.dataset['id'];
            this.url = SugarComments.Url.get();
            this.page = parseInt(this.element.dataset['page']) || 0;
        }
        return Container;
    }());
    SugarComments.Container = Container;
})(SugarComments || (SugarComments = {}));
var SugarComments;
(function (SugarComments) {
    var Url;
    (function (Url) {
        function get() {
            return window.location.hostname + window.location.pathname + _query();
        }
        Url.get = get;
        function _query() {
            var result = [];
            if (document.location.search) {
                var params = document.location.search.substr(1).split('&');
                var ignored = [];
                for (var i = 0; i < params.length; i++) {
                    if (ignored.indexOf(params[i].split("=")[0]) <= -1)
                        result.push(params[i]);
                }
            }
            return (result.length > 0) ? "?" + result.sort().join("&") : "";
        }
    })(Url = SugarComments.Url || (SugarComments.Url = {}));
})(SugarComments || (SugarComments = {}));
