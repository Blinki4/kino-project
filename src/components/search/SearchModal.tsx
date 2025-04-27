import {FC, useEffect} from "react";
import {IMovie} from "../../types/IMovie.ts";
import {useNavigate} from "react-router-dom";

interface SearchModalProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    searchResult: IMovie[];
}

const SearchModal: FC<SearchModalProps> = ({visible, setVisible, searchResult}) => {
    const navigate = useNavigate()

    const navigateToMovie = (id: number) => {
        navigate(`/movie/${id}`)
        location.reload()
    }

    console.log(visible);
    console.log(setVisible)

    useEffect(() => {
        console.log('useEffect')
    }, []);

    return (
        <div className={'search__modal'}>
            <ul className={'search__modal-list'}>
                {searchResult.map(movie =>
                    <li onClick={() => navigateToMovie(movie.id)} key={movie.id} className={'search__modal-item'}>
                        <div className={'search-card'}>
                            <img className={'search-card__poster'} src={movie.poster.url} alt={movie.name}/>
                            <div className={'search-card__info'}>
                                <div className={'search-card__name'}>{movie.name}</div>
                                <span className={'search-card__info-row'}>
                                    <div className={'search-card__rating'}>
                                        {movie.rating.kp.toFixed(1)}
                                    </div>
                                    <div className={'search-card__gray-text'}>
                                        {`${movie.alternativeName}, ${movie.year}`}
                                    </div>
                                </span>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default SearchModal;