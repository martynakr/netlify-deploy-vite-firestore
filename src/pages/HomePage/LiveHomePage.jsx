import { useEffect, useState } from "react";
import MovieList from "../../containers/MovieList/MovieList";
import { subscribeToMovies } from "../../../services/movies";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebase";

const LiveHomePage = () => {
    const [liveMovies, setLiveMovies] = useState(null);

    // useEffect(() => {
    //     const unsubscribeFunction = subscribeToMovies(setLiveMovies);

    //     return () => unsubscribeFunction();
    // }, []);

    console.log(liveMovies);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "movies"),
            (querySnapshot) => {
                const dataFromDatabase = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });

                setLiveMovies(dataFromDatabase);
            }
        );

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <main>
            <h1>Live movies page</h1>
            {liveMovies && <MovieList movies={liveMovies} />}
        </main>
    );
};

export default LiveHomePage;
