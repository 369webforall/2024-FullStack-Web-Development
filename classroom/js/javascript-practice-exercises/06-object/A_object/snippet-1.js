// snippet 1
let movie = {
    title: "Fight Club",
    year: 1999,
    genre: ["drama", "thriller"],
    starring: ["Brad Pitt", "Edward Norton"],
  };
  
  console.log(movie.year);
  console.log(movie["title"]);
  console.log(movie.genre);
  console.log(movie.genre[0]);
  console.log(movie.genre[1]);
  
  console.log(movie.duration);
  console.log(movie["starring"][1]);
  console.log(movie.starring.length);