import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
    console.log(`Fetching movies: ${Date.now()}`);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    throw new Error("ERROR!");

    // const response = await fetch(`${API_URL}/${id}`);
    // return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return <p></p>;
}
