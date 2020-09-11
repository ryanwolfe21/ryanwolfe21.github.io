
//Push the text from the text form to the list below
const moviesArr = localStorage.getItem("favoriteMovies")
document.getElementById("save").onclick = function() {
  var text = document.getElementById("favoriteMovies").value;
  var li = document.createElement("li");
  li.textContent = text;
  document.getElementById("movieList").appendChild(li);
}

document.getElementById("save").addEventListener("click", function() {
  alert("Movie Added!");
  }, false);

//Local Storage for Form to enter your favorite movies
if (window.localStorage) {
  var favoriteMovies = document.getElementById("favoriteMovies");

  favoriteMovies.value = localStorage.getItem("favoriteMovies");

  favoriteMovies.addEventListener("input", function () {
      localStorage.setItem("favoriteMovies", favoriteMovies.value);
    },
    false);
}