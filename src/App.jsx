import { useEffect } from "react";
import "./App.css";
import { getAllMovies } from "../services/movies";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMoviePage from "./pages/AddMoviePage/AddMoviePage";
import Nav from "./components/Nav/Nav";
import MoviePage from "./pages/MoviePage/MoviePage";
import RefreshContextProvider from "./context/RefreshContextProvider";
import LiveHomePage from "./pages/HomePage/LiveHomePage";

function App() {
    return (
        <RefreshContextProvider>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<LiveHomePage />} />
                    <Route path="/add-movie" element={<AddMoviePage />} />
                    <Route path="/movies/:id" element={<MoviePage />} />
                </Routes>
            </BrowserRouter>
        </RefreshContextProvider>
    );
}

export default App;

// A HomePage with a list of movies
// A dedicated page for each movie
// A page with a form to add a movie to the database
