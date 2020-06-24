var express = require('express');
var router = express.Router();
var api = require('./APIHandler')


/*GET homepage */
router.get('/',  async function(req, res, next) {

  let query = req.query.query

  
  let movies = await api.searchMovie(query)
  console.log(movies)

  res.render('index_search', { 
    title: 'Accueil',
    movies:movies.results
    
   });

});

/* GET viewpage. */
router.get('/:id',  async function(req, res, next) {

  let id =req.params.id 
  
  let movieAndCast= await api.getMovie(id)
  

  res.render('movie_view', { 
    title: 'Détails du film', 
    movie: movieAndCast.movie,
    casting: movieAndCast.casting
   });
});

/*Get actorpage*/
router.get('/actor/:id',  async function(req, res, next) {

  let id =req.params.id 
  
  let actorAndFilmo= await api.getActor(id)
  

  res.render('actor_view', { 
    title: 'Détails de l\'acteur', 
    actor:actorAndFilmo.actor,
    filmo:actorAndFilmo.filmo
   });
});

module.exports = router;

