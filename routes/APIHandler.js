var fetch = require('node-fetch')

const key='1b5c74dbc286cbaa892f1a459f8e5e36'
const lang= 'fr-FR'
const url='https://api.themoviedb.org/3/movie'
class ApiHandler{

     async getMovie(id) {
        
        let movie = await fetch(url+'/'+id+'?api_key='+key+'&language='+lang)
        
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                return json
            }).catch(function(ex) {
               return "error"
            });
        let casting = await fetch(url+'/'+id+'/credits?api_key='+key)
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                return json
            }).catch(function(ex) {
            return "error"
            });

        return {
            movie: movie,
            casting:casting
        }
    }
    searchMovie(query){
        return fetch('https://api.themoviedb.org/3/search/movie?api_key='+key+'&language='+lang+'&query='+query+'&page=1&include_adult=false')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                return json
            }).catch(function(ex) {
            return "error"
            });
        

    }
     async getActor(id){
        let actor =await fetch('https://api.themoviedb.org/3/person/'+id+'?api_key='+key+'&language='+lang)
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                return json
            }).catch(function(ex) {
            return "error"
            });
        let filmo =await fetch('https://api.themoviedb.org/3/person/'+id+'/movie_credits?api_key='+key+'&language='+lang)
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                return json
            }).catch(function(ex) {
            return "error"
            });
        return{
            actor:actor,
            filmo:filmo
        }

    }
}

module.exports = new ApiHandler()
/*choper le cast:https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>*/
/*https://api.themoviedb.org/3/movie/550/credits?api_key=1b5c74dbc286cbaa892f1a459f8e5e36&language=fr-FR*/
/*query les movies: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=vroumm&page=1&include_adult=false*/
/*choper l'acteur: https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US*/
/* choper la filmo:https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key=<<api_key>>&language=en-US*/