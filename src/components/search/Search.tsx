import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FC, useState} from "react";
import * as React from "react";
import SearchModal from "./SearchModal.tsx";
import {IMovie} from "../../types/IMovie.ts";
import KinopoiskApi from "../../api/kinopoiskApi.ts";
import {useAppStore} from "../../store/appStore.ts";

const Search: FC = () => {
    const [query, setQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<IMovie[]>([]);
    const {
        isSearchModalVisible,
        setIsSearchModalVisible,
        setError
    } = useAppStore(store => store)

    const hideModal = () => {
        setIsSearchModalVisible(false)
        document.querySelector('.page')?.removeEventListener('click', hideModal)
    }

    const search = async () => {
        if (!query) {
            return
        }
        try {
            setSearchResult(await KinopoiskApi.search(query, 6))
            setIsSearchModalVisible(true)
            document.querySelector('.page')?.addEventListener('click', hideModal)
        } catch (e: unknown) {
            const error = e as Error
            setError(error.message)
        }
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
            {
                isSearchModalVisible
                &&
                <SearchModal searchResult={searchResult}/>
            }
        </div>
    );
};

export default Search;