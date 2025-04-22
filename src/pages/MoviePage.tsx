import {FC} from "react";
import {useParams} from "react-router-dom";
import batmanPoster from "../assets/batman-poster.png";

type MoviePageParams = {
    id: string
}

const MoviePage: FC = () => {
    const params = useParams<MoviePageParams>()
    console.log(params.id)

    const movie = {
        id: 0,
        title: 'Человек-паук: Через вселенные',
        year: 2018,
        poster: batmanPoster,
        rating: 8.2,
        ageRating: 18,
        country: 'USA',
        movieLength: 183,
    }

    return (
        <div className={'page'}>
            <div className={'container'}>
                <h1>{movie.title}</h1>
                <img src={movie.poster} alt=""/>
            </div>
        </div>
    );
};

export default MoviePage;