angular.module('marvel.services.path', [

])
    .service('SuperHeroesService', function () {
        var Service = {
            lastState: 'marvel.directory',
            url: '/',
            limit: null,
            offset: null,
            search: null
        };
        return Service;
    });