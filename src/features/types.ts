export interface MovieOMDB {
    poster_path: string;
    id: number;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}

export interface User {
    _id?: string;
    username: string;
    profile_picture: string;
    bio?: string;
    reviews?: Review[];
    watched_movies?: MovieInstance[];
    followers?: MovieInstance[];
    following?: MovieInstance[];
    watch_list?: MovieInstance[];
    favorites?: MovieInstance[];
    lists?: MovieList[];
    liked_movies?: MovieInstance[];
}

export interface userLogInInput {
    username: string;
    password: string;
}

export interface Review {
    _id?: string;
    movie: MovieInstance;
    content: string;
    user: User;
    liked_movie?: boolean;
    likes?: number;
    rating?: number;
    comments: ReviewComment[];
    movieTitle?: string;
}

export interface ReviewComment {
    user: User;
    movie: MovieInstance;
    content: string;
}

export interface MovieInstance {
    _id?: string;
    title: string;
    year: string;
    synopsis: string;
    director: string;
    poster: string;
    reviews: Review[];
    actors: string[];
    likes: number;
    country: string;
    genres: string[];
    language: string;
    run_time: string;
}

export interface MovieList {
    _id?: string;
    title: string;
    description: string;
    movies: MovieInstance[];
    user: User;
}
