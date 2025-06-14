import React, {FC, useEffect, useState} from 'react';
import {IGenre} from "../../types/IGenre.ts";
import KinopoiskApi from "../../api/kinopoiskApi.ts";
import Button from "../ui/Button.tsx";
import {useFiltersStore} from "../../store/filtersStore.ts";

interface FiltersProps {
    clickHandler: () => void;
}

const Filters: FC<FiltersProps> = ({clickHandler}) => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const {
        genre,
        year,
        rating,
        setGenre,
        setYear,
        setRating
    } = useFiltersStore(state => state);

    const fetchGenres = async () => {
        setGenres(await KinopoiskApi.getGenres())
    }

    useEffect(() => {
        fetchGenres()
    }, []);

    const selectGenre = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGenre(event.target.value)
    } //Вынести в сервис

    const selectYear = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYear(event.target.value.toString())
    } //Вынести в сервис

    const selectRating = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRating(event.target.value)
    } //Вынести в сервис

    return (
        <div className={'filters'}>
            <div className={'filters__inner'}>
                <div className={'filters__genres'}>
                    <select
                        className={'filters__select'}
                        value={genre}
                        onChange={(event) => selectGenre(event)}
                        name="genres"
                        id="genres">
                        <option value="" defaultChecked>Жанр</option>
                        {genres.map(genre =>
                            <option key={genre.slug} className={'filters__option'}
                                    value={genre.name}>{genre.name}</option>
                        )}
                    </select>
                </div>
                <div>
                    <input
                        className={'filters__input'}
                        value={year}
                        onChange={(event) => selectYear(event)}
                        type="number"
                        placeholder={'Год'}/>
                </div>
                <div>
                    <select
                        className={'filters__select'}
                        value={rating}
                        onChange={(event) => selectRating(event)}
                        name="rating"
                        id="rating">
                        <option className={'filters__option'} value="" defaultChecked>Любой рейтинг</option>
                        <option className={'filters__option'} value="9-10">больше 9</option>
                        <option className={'filters__option'} value="8-8.9">больше 8</option>
                        <option className={'filters__option'} value="7-7.9">больше 7</option>
                        <option className={'filters__option'} value="6-6.9">больше 6</option>
                        <option className={'filters__option'} value="1-5">Меньше 5</option>
                    </select>
                </div>
                <div>
                    <Button onClick={clickHandler}>
                        Применить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Filters;