angular.module('marvel.models.superheroes', [

])
    .service('SuperHeroesModel', function ($http, $q) {
        var publicKey= "e595fc809950c5ada7424f31ec9c5c2f";

        var model = this,
            URLS = {
                characters:'https://gateway.marvel.com/v1/public/characters',
            };

        model.getCharacters = function(limit,offset, nameStartsWith) {
            //return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
            return $http.get(URLS.characters,{
                params: {limit: limit,
                apikey: publicKey,
                offset: offset*limit,
                nameStartsWith: nameStartsWith
                }
                }).then(function successCallback(response) {
              ;
                    return response.data.data;

                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    console.log(response);
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });;
        };

        model.getCharacter = function(idhero,limit,offset){

            return $http.get(URLS.characters+"/"+idhero,{
                params: {
                apikey: publicKey
                }
                }).then(function successCallback(response) {
                
                    return response.data.data;

                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                  
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });;

        }
    });