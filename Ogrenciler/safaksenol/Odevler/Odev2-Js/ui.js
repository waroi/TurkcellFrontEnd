function UI() { }

UI.prototype.addMovieToUI=function(name, pic, type, visiondate) {
  const listItem = document.createElement("tr");
  const movPoster = document.createElement("td");
  const movName = document.createElement("td");
  const movType = document.createElement("td");
  const movVisionDate = document.createElement("td");
  const linkTd = document.createElement("td");
  const linkEditTd = document.createElement("td");
  const link = document.createElement("a");
  const editBtn = document.createElement("a");

  movPoster.innerHTML = `<img src="${pic}" width="100">`;
  movName.textContent = name;
  movType.textContent = type;
  movVisionDate.textContent = visiondate;
  movName.classList = "name";
  movType.classList = "type";
  movVisionDate.classList = "visiondate";

  movPoster.setAttribute("scope", "row");

  link.href = "#";
  link.classList = "delete-item";
  link.innerHTML = '<i class = "fa fa-remove"></i>';

  editBtn.href = "#";
  editBtn.classList = "edit";
  editBtn.innerHTML = '<i class = "fa fa-edit"></i>';


  linkTd.appendChild(link);
  linkEditTd.appendChild(editBtn);
  listItem.appendChild(movPoster);
  listItem.appendChild(movName);
  listItem.appendChild(movType);
  listItem.appendChild(movVisionDate);
  listItem.appendChild(linkTd);
  listItem.appendChild(linkEditTd);
  movielist.appendChild(listItem);
}

UI.prototype.showAlert=function(type, message) {
  const alert = document.createElement("div");

  alert.classList = `alert alert-${type}`;
  alert.textContent = message;

  firstCardbody.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 2000);
}