var express = require('express');
var router = express.Router();
var api = require('./APIHandler')

/* GET home page. */
router.get('/:id?',  async function(req, res, next) {

  let id =req.params.id
  if(id === undefined){
    id=550
  }
  let movie= await api.getMovie(id)

  res.render('index', { 
    title: 'API + Node', 
    movie:'movie'
  });
});

module.exports = router;
