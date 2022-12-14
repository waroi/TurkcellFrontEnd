function UI() {};
const ui = new UI();

UI.prototype.addMovieUI = function (newmovie) {
    movieList.innerHTML += `
    <li class="row mt-5 align-items-center border border-2">
        <img class="col-sm-3 h p-2" src="${newmovie.URL}">
        <div class="col-sm-7 px-4">
            <h5>${newmovie.name} </h5><hr>
            <p>Yönetmen: ${newmovie.director} </p>
            <p>Tarih: ${newmovie.date} </p>
        </div>
        <div class="col-sm-2">
            <button class="btn btn-secondary mb-4 w-100 p-3">Edit</button>
            <button class="del btn btn-primary w-100 p-3">Sil</button>
        </div>
    </li>
    `;
    ui.clearInput(nameinput);
    ui.clearInput(direcinput);
    ui.clearInput(dateinput);
    ui.clearInput(urlinput);
}

UI.prototype.showAlert = function (message, type) {
    const alert = document.createElement("div");
    alert.className = `mt-3 alert alert-${type}`;
    alert.textContent = message;
    form.appendChild(alert);
    setTimeout(function () {
      alert.remove();
    }, 2000);
}

UI.prototype.clearInput = function(e) {
    e.value = "";
}

UI.prototype.editMovieUI = function() {
    console.log("Başarılı")
}
