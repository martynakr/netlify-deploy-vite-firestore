import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../../services/movies";
import styles from "./MOviePage.module.scss";
import { incrementTimesWatched } from "../../../services/movies";
import { RefreshContext } from "../../context/RefreshContextProvider";

const MoviePage = () => {
    // to access something from the url I have a useParams hook
    const pathVariables = useParams();
    const id = pathVariables.id;

    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const { refresh, setRefresh } = useContext(RefreshContext);

    useEffect(() => {
        setLoading(true);
        getMovieById(id)
            .then((res) => setMovie(res))
            .catch((e) => setError(e))
            .finally(() => setLoading(false));
    }, [id, refresh]);

    console.log(movie);

    const handleIncrement = () => {
        incrementTimesWatched(id)
            .then(() => {
                setRefresh(refresh + 1);
            })
            .catch((e) => console.log(e));
    };

    return (
        <main>
            {loading && <p>Loading...</p>}
            {!loading && error && <p>{error.message}</p>}
            {!loading && movie && (
                <>
                    <h1>{movie.title}</h1>
                    <div className={styles.info}>
                        <img
                            src={movie.image}
                            alt={`Poster for ${movie.title}`}
                        />
                        <div>
                            <p>Directed by {movie.director}</p>
                            <p>Released in {movie.yearReleased}</p>
                            <p>Watched {movie.timesWatched} times</p>
                            <button onClick={handleIncrement}>
                                Increment times watched by 1
                            </button>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
};

export default MoviePage;
