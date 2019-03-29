const db = require('./conn');

class Movie {

    constructor(id, title, director, genre) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.genre; 
    }

    static getAll() {
        return db.any(`select * from movies`);
    }


    static getMovieById(id) {
        return db.one(`select * from movies where id=$1`, [id])
        .then((movieData) => {
            const newInstance = new Movie(
                movieData.id,
                movieData.title,
                movieData.director,
                movieData.genre
            );
            return newInstance;
        })
    }

}
module.exports = Movie;