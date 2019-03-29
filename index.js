const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const Movie = require('./movie')

const server = http.createServer(async (req, res) => {
    console.log(req);

    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain');

    const allMovies = await Movie.getAll();
    const movieJSON = JSON.stringify(allMovies);
    res.end(movieJSON);

    
})


server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
});