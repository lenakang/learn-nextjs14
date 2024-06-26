"use client";

import { useRouter } from "next/navigation";
import styles from "../styles/movie.module.css";
import Link from "next/link";

interface IMovieProps {
    id: string;
    poster_path: string;
    title: string;
}

export default function Movie({ id, poster_path, title }: IMovieProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    };
    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick} />
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    );
}
