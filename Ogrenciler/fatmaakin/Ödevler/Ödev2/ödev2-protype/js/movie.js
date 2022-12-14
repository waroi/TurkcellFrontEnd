const form = document.getElementById("movie-form");
const nameinput = document.getElementById("mov-name");
const direcinput = document.getElementById("mov-director");
const dateinput = document.getElementById("mov-date");
const urlinput = document.getElementById("mov-url");
const pagelistinput = document.getElementById("movie-list");
const deleteAllButon = document.getElementById("clear-all");


eventListeners();
function eventListeners() {
    form.addEventListener("submit", addMovie);
    deleteAllButon.addEventListener("click", deleteAllMovie);
    cardBody.addEventListener("click", deleteMovie);
    cardBody.addEventListener("click", editMovie);
    document.addEventListener("DOMContentLoaded", AllMovieList);
}

let Movie = function (name, director, date, URL) {
    this.name = name;
    this.director = director;
    this.date = date;
    this.URL = URL;
    
}

function addMovie(e) {
    if ((dateinput.value === "") || (direcinput.value === "") || (dateinput.value === "") || (urlinput.value === "")) {
        ui.showAlert("Eksik bilgi girdiniz!!", "danger");
    } else {
        const newmovie = new Movie(nameinput.value, direcinput.value, dateinput.value, urlinput.value);
        ui.addMovieUI(newmovie);
        ui.addstorage(newmovie);
        ui.showAlert("Eklendi.", "success")
    }
    e.preventDefault();
}

function deleteAllMovie() {
    while(pagelistinput.firstChild != null) {
        pagelistinput.removeChild(pagelistinput.firstChild);
        localStorage.removeItem("movies");
    }
    ui.showAlert("Tüm filmler silindi.", "success");
}


function editMovie(e) {
    if(e.target.className === "btn btn-secondary w-100") {
        ui.editMovieUI(e);
        ui.showAlert("Düzenlendi", "success");
    }
}
function deleteMovie(e) {
    if(e.target.className === "del btn btn-primary w-100") {
        e.target.parentElement.parentElement.remove();
        ui.deletemovi(e.target.parentElement.parentElement.children[0].src);
        ui.showAlert("Seçilen Film Silindi", "success");
    }
}



function AllMovieList() {
    let movies = ui.getstorage();
    movies.forEach(function (movies) {
        ui.addMovieUI(movies);
    })
}

