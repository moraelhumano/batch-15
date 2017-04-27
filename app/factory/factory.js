(function() {
    'use strict'

    angular
        .module('newsApp')
        .factory('newsJson', newsJson);

    function newsJson($resource) {
        return $resource("./app/assets/json/news_mock.json")
    }
})();