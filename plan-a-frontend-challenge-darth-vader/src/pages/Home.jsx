import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchMovies } from "../store/actions/movieActions";
import Loader from "../components/Loader";
import "./Home.css";

const Home = ({
  movie = { latestMovie: null, loading: false, error: null },
  fetchMovies = () => {},
}) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const { latestMovie, loading, error } = movie;

  return (
    <div className="container home">
      <div className="movie-container">
        {loading && <Loader />}
        {error && <div className="error">{error}</div>}
        {latestMovie && (
          <table className="movie-table">
            <tbody>
              <tr>
                <td className="movie-poster">
                  {latestMovie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${latestMovie.poster_path}`}
                      alt={`${latestMovie.title} poster`}
                    />
                  ) : (
                    <div className="not-found-poster">
                      <img
                        src={
                          require("../assets/images/poster-not-found.jpg")
                            .default
                        }
                        alt={`${latestMovie.title} poster not found`}
                      />
                    </div>
                  )}
                </td>
                <td className="movie-details">
                  <h2>
                    <span className="movie-title">{latestMovie.title}</span> (
                    {new Date(latestMovie.release_date).getFullYear()})
                  </h2>
                  <p>
                    {new Date(latestMovie.release_date).toLocaleDateString()} |{" "}
                    {latestMovie.genres
                      ? latestMovie.genres.map((genre) => genre.name).join(", ")
                      : ""}{" "}
                    | {latestMovie.runtime} min
                  </p>
                  <p>
                    <span className="movie-overview">
                      {latestMovie.overview}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  movie: PropTypes.shape({
    latestMovie: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  fetchMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps, { fetchMovies })(Home);
