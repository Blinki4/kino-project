interface IMovieRating {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}

interface IMoviePoster {
    url: string;
    previewUrl: string;
}

interface IMovieBackdrop {
    url: string;
    previewUrl: string;
}

interface IMovieTrailers {
    url: string;
    name: string;
    site: string;
    size?: number;
    type: string;
}

interface IMoviePersons {
    id: number;
    photo: string;
    name: string;
    enName: string;
    description: string;
    profession: string;
    enProfession: string;
}

interface IMovieSeasonsInfo {
    number: number;
    episodesCount: number;
}

interface IMovieBudget {
    value: number;
    currency: string;
}

interface IMovieFees {
    world: Fees;
    russia: Fees;
    usa: Fees;
}

interface Fees {
    value: number;
    currency: string;
}

interface IMoviePremiere {
    country: string | null;
    world: Date | null | string;
    russia: Date | null | string;
    digital: string | null;
    cinema: Date | null;
    bluray: string | null;
    dvd: string | null;
}

interface IMovieSimilar {
    id: number;
    name: string;
    alternativeName: string;
    type: string;
    poster: IMoviePoster;
    rating: IMovieRating;
    year: number;
}

interface IMovieReleaseYears {
    start: number;
    end: number;
}

export interface IMovie {
    id: number,
    name: string,
    alternativeName: string,
    enName: string,
    type: string,
    typeNumber: number,
    year: number,
    description: string,
    shortDescription: string,
    slogan: string,
    status: string,
    rating: IMovieRating,
    votes: IMovieRating,
    movieLength: number,
    ratingMpaa: string,
    ageRating: number,
    logo: { url: string },
    poster: IMoviePoster,
    backdrop: IMovieBackdrop,
    videos: { trailers: IMovieTrailers[] },
    genres: { name: string }[],
    countries: { name: string }[],
    persons: IMoviePersons[],
    seasonsInfo?: IMovieSeasonsInfo[],
    budget: IMovieBudget,
    fees: IMovieFees,
    premiere?: IMoviePremiere,
    similarMovies: IMovieSimilar[],
    sequelsAndPrequels: IMovieSimilar[],
    releaseYears: IMovieReleaseYears[],
    top10: number | null,
    top250: number | null,
    isSeries: boolean,
    lists: string[],
}