import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";
import { API_URL } from "../constants";

export const metadata = {
    title: "Home",
};

const getMovies = async () => {
    const json = await fetch(API_URL);
    return json.json();
};

export default async function Home() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie: any) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    );
}
