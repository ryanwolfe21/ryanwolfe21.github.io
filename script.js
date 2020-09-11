
const movies = JSON.parse(localStorage.getItem("favoriteMovies")) || []

function renderList () {
       movies.forEach(arr1 => {
           var li = document.createElement("li");
        li.textContent = arr1;
        document.getElementById("movieList").appendChild(li);
       })
      
}

document.getElementById("save").addEventListener("click", function() {
    var favoriteMovies = document.getElementById("favoriteMovies");
    movies.push(favoriteMovies.value)
    localStorage.setItem("favoriteMovies",JSON.stringify(movies));
    window.location.reload()
  });

  document.getElementById("delete").addEventListener('click', function(){
    localStorage.removeItem("favoriteMovies")
  })


  renderList(); 