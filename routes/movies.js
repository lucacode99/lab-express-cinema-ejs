const express = require('express');
const router = express.Router();
const Movie = require("../Models/Movie.model.js")

router.get('/', (req, res, next) => { Movie
    .find({})
    .then((movies) => {
        for (let index = 0; index < movies.length; index +=1) {
            console.log (movies[index].title)
        }
        res.render('movies', {movies})
    })
    
    
    
    
    });

module.exports = router;




