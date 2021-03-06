var express = require('express');
var router = express.Router();
var api = require('./APIHandler')

/*GET home */
router.get('/',   function(req, res, next) {

  

  res.render('index', { 
    title: 'Accueil'
   
    
   });

});


/*GET searchMovie */
router.get('/search/movie',  async function(req, res, next) {

  let query = req.query.query
  if(!query){
      query = 'Kill'
    }
  
  let movies = await api.searchMovie(query)
  

  res.render('movie_search', { 
    title: 'Recherche de films',
    movies:movies.results
    
   });

});
/*GET searchActor */
router.get('/search/actor',  async function(req, res, next) {

  let query = req.query.query
  if(!query){
    query = 'jolie'
  }

  
  let actors = await api.searchActor(query)
  

  res.render('actor_search', { 
    title: 'Recherche d\'acteur',
    actors:actors.results
    
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

