const express = require('express');

const underscore = require('underscore')

const router = express.Router();



router.get('/movies',function(req, res){
    let movies = ['Rang de basanti', 'The shining' , 'Lord of the rings',  'Batman begins']
    res.send(movies)
})

router.get('/movies/:indexNumber' , function(req,res){
    let movies = ['Rang de basanti', 'The shining' , 'Lord of the rings',  'Batman begins']
    let displayMovie
    if(req.params.indexNumber < movies.length){
        displayMovie = movies[req.params.indexNumber]
    }else{
        displayMovie = "use a valid index number"
    }
    
    res.send(displayMovie)
})

router.get('/films', function(req,res){
  const films =  [ {
        "id": 1,
        "name": "Shinchan"
       }, {
        "id": 2,
        "name": "Doraemon"
       }, {
        "id": 3,
        "name": "Tom and Jerry"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
    res.send(films)      
})

router.get('/films/:filmId', function(req,res){
    const films =  [ {
        "id": 1,
        "name": "The Godfather"
       }, {
        "id": 2,
        "name": "Forrest Gump"
       }, {
        "id": 3,
        "name": "The Truman Show"
       }, {
        "id": 4,
        "name": "The Test"
       }]
    let film
    if(req.params.filmId <= films.length && req.params.filmId != 0){
        for(index = 0; index< films.length; index++){
            if(req.params.filmId == films[index].id){
                film = films[index].name
                break
            }
        }
    }else{
        film = "No movie exists with this id"


    }
    

    res.send(film)
})





module.exports = router;
// adding this comment for no reason