const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
/* console.log(personalMovieDB); */

const questionFilm1 = prompt("Один из последних просмотренных фильмов?", "");
const questionMark1 = prompt("На сколько оцените его?", "");
const questionFilm2 = prompt("Один из последних просмотренных фильмов?", "");
const questionMark2 = prompt("На сколько оцените его?", "");

/* const answers = {
    movie1: questionFilm1, questionMark1,
    movie2: questionFilm2, questionMark2
}; */

personalMovieDB.movies[questionFilm1] = questionMark1;
personalMovieDB.movies[questionFilm2] = questionMark2;

console.log(personalMovieDB);