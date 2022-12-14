const form = document.getElementById("movie-form");
const movieNameInput = document.getElementById("movie-name");
const directorNameInput = document.getElementById("director-name");
const movieDateInput = document.getElementById("movie-date");
const movieURLInput = document.getElementById("movie-URL");
const movieList = document.getElementById("movie-list");
const clearButton = document.getElementById("clear-movies");
const cardBody = document.getElementById("card-2");
const filter = document.getElementById("filter");

eventListeners();
function eventListeners() {
    document.addEventListener("DOMContentLoaded", defaultMovies);
    form.addEventListener("submit", addMovie);
    clearButton.addEventListener("click", clearAllMovies);
    cardBody.addEventListener("click", deleteMovie);
    cardBody.addEventListener("click", editMovie);
    document.addEventListener("DOMContentLoaded", loadAllMovies);
    filter.addEventListener("keyup", filterMovies);
}

class Movie {
    constructor(name, director, date, URL) {
        this.name = name;
        this.director = director;
        this.date = date;
        this.URL = URL;
    }
}

function defaultMovies() {
    if(localStorage.getItem("movies") == null) {
        Storage.addMovieStorage(
            new Movie(
                "Harry Potter - Felsefe Taşı",
                "Chris Columbus",
                "2001-11-04",
                "https://tr.web.img4.acsta.net/r_1280_720/pictures/bzp/01/29276.jpg"
            )
        );
        Storage.addMovieStorage(
            new Movie(
                "Harry Potter - Sırlar Odası",
                "Chris Columbus",
                "2002-11-03",
                "https://tr.web.img3.acsta.net/r_1280_720/pictures/bzp/01/41245.jpg"
            )
        );
    }
}

function addMovie(e) {
    if ((movieDateInput.value === "") || (directorNameInput.value === "") || (movieDateInput.value === "") || (movieURLInput.value === "")) {
        UI.showAlert("Eksik bilgi girdiniz!!", "danger");
    } else {
        const newMovie = new Movie(movieNameInput.value, directorNameInput.value, movieDateInput.value, movieURLInput.value);
        UI.addMovieUI(newMovie);
        Storage.addMovieStorage(newMovie);
        UI.showAlert("Eklendi.", "success")
    }
    e.preventDefault();
}

function clearAllMovies() {
    while(movieList.firstChild != null) {
        movieList.removeChild(movieList.firstChild);
        localStorage.removeItem("movies");
    }
    UI.showAlert("Koleksiyon temizlendi.", "success");
}

function deleteMovie(e) {
    if(e.target.className === "del btn btn-primary w-100 p-2 mb-3") {
        e.target.parentElement.parentElement.remove();
        Storage.deleteMovieLS(e.target.parentElement.parentElement.children[0].src);
        UI.showAlert("Film silindi", "success");
    }
}

function editMovie(e) {
    if(e.target.className === "btn btn-secondary mb-4 w-100 p-2 mt-3") {
        e.target.parentElement.parentElement.parentElement.remove();
        let movies = Storage.getMoviesFromStorage();
        movies.forEach (function (movie) {
            if (movie.URL == e.target.parentElement.parentElement.parentElement.children[0].src) {
                movieNameInput.value = movie.name;
                directorNameInput.value = movie.director;
                movieDateInput.value = movie.date;
                movieURLInput.value = movie.URL;
            }
            UI.editButton();
        });
        Storage.deleteMovieLS(e.target.parentElement.parentElement.parentElement.children[0].src);
    };
}

function loadAllMovies() {
    let movies = Storage.getMoviesFromStorage();
    movies.forEach(function (movies) {
        UI.addMovieUI(movies);
    })
}

function filterMovies(e) {
    const filterValue = e.target.value.toUpperCase();
    const listItems = document.querySelectorAll("li");
    listItems.forEach(function(listItems) {
        const text = listItems.textContent.toUpperCase();
        if (text.indexOf(filterValue) === -1) {
            listItems.setAttribute("style", "display: none");
        } else {
            listItems.setAttribute("style", "display: flex");
        }
    });
}