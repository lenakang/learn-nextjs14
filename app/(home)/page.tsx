import Link from "next/link";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

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
        <ul>
            {movies.map((movie: any) => (
                <li key={movie.id}>
                    <Link href={`movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    );
}
