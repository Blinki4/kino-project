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


    return (
        <div className={'filters'}>
            <div className={'filters__inner'}>
                <div className={'filters__genres'}>
                    <select className={'filters__select'} name="genres" id="genres">
                        <option value="" defaultChecked>Жанр</option>
                        {genres.map(genre =>
                            <option key={genre.slug} className={'filters__option'}
                                    value={genre.name}>{genre.name}</option>
                        )}
                    </select>
                </div>
                <div>
                    <input className={'filters__input'} type="number" placeholder={'Год'}/>
                </div>
                <div>
                    <select className={'filters__select'} name="rating" id="">
                        <option className={'filters__option'} value="" defaultChecked>Любой рейтинг</option>
                        <option className={'filters__option'} value="9">больше 9</option>
                        <option className={'filters__option'} value="8">8</option>
                        <option className={'filters__option'} value="7">7</option>
                        <option className={'filters__option'} value="6">6</option>
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