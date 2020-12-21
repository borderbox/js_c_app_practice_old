const numberOfFilms = +prompt('Сколько фильмов вы уде помиотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

const askMovies1 = prompt('Один из последних просмотренных фильмов?', ''),
     askMark1 = prompt('На сколько оцените его?', ''),
     askMovies2 = prompt('Один из последних просмотренных фильмов?', ''),
     askMark2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[askMovies1] = askMark1;
personalMovieDB.movies[askMovies2] = askMark2;

console.log(personalMovieDB);