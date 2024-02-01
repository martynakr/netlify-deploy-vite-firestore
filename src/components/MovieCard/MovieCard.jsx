import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";
import { deleteMovie } from "../../../services/movies";
import { useSyncExternalStore } from "react";
import { useContext, useState } from "react";
import { RefreshContext } from "../../context/RefreshContextProvider";

const MovieCard = ({
    image = "",
    title = "Title not provided",
    director = "",
    yearReleased = "",
    id,
}) => {
    const { setRefresh, refresh } = useContext(RefreshContext);
    const [e, setE] = useState(null);

    const handleClick = async () => {
        try {
            await deleteMovie(id);
            setRefresh(refresh + 1);
        } catch (e) {
            setE(e);
        }
    };

    return (
        <article className={styles.card}>
            <div>
                <button onClick={handleClick}>Delete movie</button>
                {e && <p>{e.message}</p>}
            </div>
            <img className={styles.image} src={image} alt="movie poster" />
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Year released: {yearReleased}</p>
            <p>{id}</p>
            {/* <Link to={`/movies/${title.split(" ").join("-")}-${yearReleased}`}> */}
            <Link to={`/movies/${id}`}>More info</Link>
        </article>
    );
};

export default MovieCard;
