(function() {
    'use strict'

    var myNews = {
        templateUrl: './app/components/myNews.html',
        controller: newsCtrl,
    };

    angular
        .module('newsApp')
        .component('myNews', myNews);

    newsCtrl.$inject = ["newsJson"];

    function newsCtrl(newsJson) {
        var vm = this;

        vm.$onInit = onInit;

        $('.collapsible').collapsible();

        function onInit() {
            vm.noteData = null;

            vm.noteData = newsJson.query()
            console.log(vm.noteData)
        }
    }
})();