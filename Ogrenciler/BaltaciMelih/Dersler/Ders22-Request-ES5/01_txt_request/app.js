document.getElementById("btn").addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.status == 200 && this.readyState == 4) {
      console.log(this.responseText);
    }
  };
  xhr.onload = function () {
    if (this.status == 200) {
      document.getElementById("veri").textContent = this.responseText;
    }
  };
  xhr.open("GET", "example.txt", true);
  xhr.send();
});
