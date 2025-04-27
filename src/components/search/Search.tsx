import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FC, useState} from "react";
import * as React from "react";
import SearchModal from "./SearchModal.tsx";
import {IMovie} from "../../types/IMovie.ts";
import KinopoiskApi from "../../api/kinopoiskApi.ts";

const Search: FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<IMovie[]>([]);

    const search = async () => {
        if (!query) {
            return
        }
        setSearchResult(await KinopoiskApi.search(query))
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    return (
        <div className={'search'}>
            <div className={'search__wrapper'}>
                <input
                    className={'search__input'}
                    type="text"
                    placeholder={'Фильмы, сериалы'}
                    value={query}
                    onChange={changeHandler}
                />
                <FontAwesomeIcon onClick={search} className={'search__icon'} icon={["fas", 'magnifying-glass']}/>
            </div>
            <SearchModal visible={visible} setVisible={setVisible} searchResult={searchResult}/>
        </div>
    );
};

export default Search;