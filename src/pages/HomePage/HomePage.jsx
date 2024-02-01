import { useContext, useEffect, useState } from "react";
import { getAllMovies } from "../../../services/movies";
import MovieList from "../../containers/MovieList/MovieList";
import { RefreshContext } from "../../context/RefreshContextProvider";

const HomePage = () => {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const { refresh } = useContext(RefreshContext);

    useEffect(() => {
        setLoading(true);
        getAllMovies().then((response) => {
            setLoading(false);
            setMovies(response);
        });
    }, [refresh]);

    return (
        <main>
            <h1>Firestore movie collection</h1>
            {loading && <p>Loading...</p>}
            {!loading && movies && <MovieList movies={movies} />}
        </main>
    );
};

export default HomePage;
