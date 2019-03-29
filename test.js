const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();


const User = require('./movie');

describe('Movies model', () => {
    it('should be able to retreive by id', async () => {
        const theMovie = await Movie.getMovieById(3);
        theMovie.should.be.an.instanceOf(Movie);
    });
});