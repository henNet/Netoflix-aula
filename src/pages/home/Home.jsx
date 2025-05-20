import { useEffect } from "react";
import Header from "../../components/header/Header";
import MovieContainer from "../../components/movieContainer/MovieContainer";
import "./Home.css";

function Home() {
  async function getRatedMovies() {
    const url = "https://api.themoviedb.org/3/discover/movie?language=pt-BR";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN_TMDB,
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    getRatedMovies();
  }, []);

  return (
    <>
      <Header />
      <MovieContainer />
    </>
  );
}

export default Home;
