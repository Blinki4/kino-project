import {FC} from "react";
import {useParams} from "react-router-dom";

type MoviePageParams = {
    id: string
}

const MoviePage: FC = () => {
    const params = useParams<MoviePageParams>()

    return (
        <div className={'page'}>
            <h1>{params.id}</h1>
        </div>
    );
};

export default MoviePage;