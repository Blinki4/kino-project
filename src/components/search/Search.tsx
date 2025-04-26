import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Search = () => {
    return (
        <div className={'search'}>
            <input className={'search__input'} type="text" placeholder={'Фильмы, сериалы'}/>
            <FontAwesomeIcon className={'search__icon'} icon={["fas", 'magnifying-glass']}/>
        </div>
    );
};

export default Search;