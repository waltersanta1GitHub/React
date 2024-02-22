// Fetch api
// existe un metodo que tiene todos los exploradores 
// llamado fetch() que impleneta promesas  por lo cual se pues usar then(). catch()

async function logMovies() {
    let url = "http://localhost:8080/tasks";
    const response = await fetch(url);
    const movies = await response.json();
    console.log(movies);
  }

logMovies();
