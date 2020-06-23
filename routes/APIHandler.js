var fetch = require('node-fetch')

const key='1b5c74dbc286cbaa892f1a459f8e5e36'
const lang= 'fr-FR'

class ApiHandler{

    getMovie(id) {
        
        return fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key='+key+'&language='+lang)
        .then(response => response.json())
        .then(json => json)
        .catch(error => "Erreur : " + error)
        
    }
}

module.exports = new ApiHandler()