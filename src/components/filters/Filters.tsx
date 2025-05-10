import React, {useEffect, useState} from 'react';
import {IGenre} from "../../types/IGenre.ts";
import KinopoiskApi from "../../api/kinopoiskApi.ts";
import Button from "../ui/Button.tsx";

const Filters = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [genre, setGenre] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [rating, setRating] = useState<string>('');

    const fetchGenres = async () => {
        setGenres(await KinopoiskApi.getGenres())
    }

    useEffect(() => {
        fetchGenres()
    }, []);

    // КОРОЧЕ.
    // Нужно вынести стейты фильтров в стор, переделать апи запросы, так чтобы в них можно было запихнуть фильтры.
    // На странице фильмов и сериалов забирать стейты из стора.
    // Создать useEffect, в массив зависимостей добавить genre, year и rating.
    // В запрос по дефолту запихать все эти стейты, так как они изначально будут пустыми, то ломаться ничего не будет.
    // Поэтому даже не надо будет переделывать юз эффект(скорее всего). Просто в параметры функции добавить эти три поля, и забирать их из стейта.
    // МАТ.
    //В итоге нужно создать стор под фильтры и перенести эти функции туда. В сервис скорее всего не получится (либо криво-косо)

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
                        <option className={'filters__option'} value="9">больше 9</option>
                        <option className={'filters__option'} value="8">больше 8</option>
                        <option className={'filters__option'} value="7">больше 7</option>
                        <option className={'filters__option'} value="6">больше 6</option>
                        <option className={'filters__option'} value="5">Меньше 5</option>
                    </select>
                </div>
                <div>
                    <Button>
                        Применить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Filters;