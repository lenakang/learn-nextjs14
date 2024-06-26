import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

interface IParams {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params: { id } }) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function Movie({ params: { id } }: IParams) {
    console.log(id);
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
