import {
    collection,
    doc,
    getDoc,
    getDocs,
    deleteDoc,
    addDoc,
    updateDoc,
    increment,
    onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const getAllMovies = async () => {
    const querySnapshot = await getDocs(collection(db, "movies"));
    // console.log(querySnapshot, "query snapshot");
    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id, doc.data());
    // });

    const dataToReturn = querySnapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data(),
        };
    });
    console.log(dataToReturn);

    return dataToReturn;
};

export const getMovieById = async (id) => {
    const docRef = doc(db, "movies", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error("Movie not found");
    }

    return { id: docSnap.id, ...docSnap.data() };
};

export const deleteMovie = async (id) => {
    // remember about error handling

    const docRef = doc(db, "movies", id);

    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error("Movie not found, could not delete");
        // return false
    }

    await deleteDoc(docRef);
    // return true
};

export const addNewMovie = async (data) => {
    const newMovie = { ...data, timesWatched: 0 };

    try {
        const docRef = await addDoc(collection(db, "movies"), newMovie);
        return docRef.id;
    } catch (e) {
        throw e;
    }
};

export const incrementTimesWatched = async (id) => {
    try {
        const docRef = doc(db, "movies", id);
        await updateDoc(docRef, {
            timesWatched: increment(1),
        });
    } catch (e) {
        throw e;
    }
};

export const subscribeToMovies = (callback) => {
    const collectionRef = collection(db, "movies");
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
        // I don't want to just log stuff to the console
        // I want an array of data I can set my state to
        // querySnapshot.forEach((doc) => {
        //     console.log(doc.id, doc.data());
        // });

        // Let's map to have an array of movies
        const movieData = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        callback(movieData);
    });
    return unsubscribe;
};
