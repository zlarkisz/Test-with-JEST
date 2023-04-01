import movies from "./movies";

describe("Favorite Movies", () => {
  let myMovies = [];

  beforeEach(() => {
    myMovies = [
      {
        title: "The Matrix",
        rate: null,
      },
    ];
  });

  test.only("can add a movie", () => {
    movies.add(myMovies, "Kung Fu Panda");
    expect(myMovies).toMatchSnapshot();
  });

  test.skip("rate a movie", () => {
    movies.rate(myMovies[0], 5);
    expect(myMovies).toMatchSnapshot();
  });
});
