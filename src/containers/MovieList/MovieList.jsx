import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./MovieList.module.scss";

const MovieList = ({ movies }) => {
    return (
        <section className={styles.list}>
            {movies &&
                movies.map((movie) => {
                    return (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            director={movie.director}
                            yearReleased={movie.yearReleased}
                            image={movie.image}
                            id={movie.id}
                        />
                    );
                })}
        </section>
    );
};

export default MovieList;
