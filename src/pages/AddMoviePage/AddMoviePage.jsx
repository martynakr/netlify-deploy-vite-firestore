import { useNavigate } from "react-router-dom";
import { addNewMovie } from "../../../services/movies";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";

const AddMoviePage = () => {
    const navigate = useNavigate();

    const submitHandler = (data) => {
        // console.log(data);
        addNewMovie(data)
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((e) => console.error(e));
    };

    return (
        <main>
            <h1>Add a new movie</h1>
            <AddMovieForm submitHandler={submitHandler} />
        </main>
    );
};

export default AddMoviePage;
