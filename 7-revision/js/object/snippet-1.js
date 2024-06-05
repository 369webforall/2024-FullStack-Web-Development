// snippet 1
let movie = {
    title: "Fight Club",
    year: 1999,
    genre: ["drama", "thriller"],
    starring: ["Brad Pitt", "Edward Norton"],
  };
  
  let ans = "title"
  console.log(movie.year);
  console.log(movie[ans]);
  console.log(movie.genre); // [][1]
  console.log(movie.genre[0]);
  console.log(movie.genre[1]);
  
  console.log(movie.duration);
  console.log(movie["starring"][1]);
  console.log(movie.starring.length);


  console.log({name1:"Dev"}.name1)