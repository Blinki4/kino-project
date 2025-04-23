import {FC} from "react";
import {useParams} from "react-router-dom";
import {IMovie} from "../types/IMovie.ts";
import MoviePageItem from "../components/movie-page-item/MoviePageItem.tsx";

type MoviePageParams = {
    id: string
}

const MoviePage: FC = () => {
    const params = useParams<MoviePageParams>()
    console.log(params.id)

    const movie: IMovie = {
        "id": 666,
        "name": "Форсаж",
        "alternativeName": "The Fast and the Furious",
        "enName": "The Fast and the Furious: The Original",
        "type": "movie",
        "typeNumber": 1,
        "year": 2001,
        "description": "Его зовут Брайан, и он — фанатик турбин и нитроускорителей. Его цель — быть принятым в автобанду легендарного Доминика Торетто, чемпиона опасных и незаконных уличных гонок. Но это лишь часть правды… Брайан также полицейский, имеющий задание войти в доверие к Торетто, подозреваемому в причастности к дерзким грабежам трейлеров, совершенным прямо «с колес».Но чем больше доверяет нахальному новичку харизматичный Доминик, тем больше проникается герой идеалами «ангелов дорог». И тем меньше ему хочется выполнять свою миссию. И вот, наступает момент, когда Брайану придется выбирать между дружбой и долгом. И выбирать на скорости в 200 километров в час…",
        "shortDescription": "Коп под прикрытием внедряется в банду стритрейсеров и становится одним из них. Первая часть гоночной франшизы",
        "slogan": "",
        "status": '',
        "rating": {
            "kp": 7.824,
            "imdb": 6.8,
            "tmdb": 8.12,
            "filmCritics": 5.4,
            "russianFilmCritics": 0,
            "await": 0,
        },
        "votes": {
            "kp": 427244,
            "imdb": 436817,
            "tmdb": 23232,
            "filmCritics": 155,
            "russianFilmCritics": 0,
            "await": 0
        },
        "movieLength": 106,
        "ratingMpaa": "pg13",
        "ageRating": 18,
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/6201401/8277905e-aa09-465d-b0de-7c389a42f215/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/6201401/8277905e-aa09-465d-b0de-7c389a42f215/x1000"
        },
        "backdrop": {
            "url": "https://image.openmoviedb.com/tmdb-images/original/jY9ef5nqY4xIIMu3yzW3qamUCoi.jpg",
            "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/jY9ef5nqY4xIIMu3yzW3qamUCoi.jpg"
        },
        "genres": [
            {
                "name": "боевик"
            },
            {
                "name": "триллер"
            },
            {
                "name": "криминал"
            }
        ],
        "countries": [
            {
                "name": "США"
            },
            {
                "name": "Германия"
            }
        ],
        "persons": [
            {
                "id": 6317,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6317.jpg",
                "name": "Пол Уокер",
                "enName": "Paul Walker",
                "description": "Brian O'Conner",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 11437,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_11437.jpg",
                "name": "Вин Дизель",
                "enName": "Vin Diesel",
                "description": "Dominic Toretto",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 2318,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2318.jpg",
                "name": "Мишель Родригес",
                "enName": "Michelle Rodriguez",
                "description": "Letty",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 47679,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_47679.jpg",
                "name": "Джордана Брюстер",
                "enName": "Jordana Brewster",
                "description": "Mia Toretto",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 16059,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_16059.jpg",
                "name": "Мэтт Шульце",
                "enName": "Matt Schulze",
                "description": "Vince",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 29366,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_29366.jpg",
                "name": "Рик Юн",
                "enName": "Rick Yune",
                "description": "Johnny Tran",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 22695,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_22695.jpg",
                "name": "Чэд Линдберг",
                "enName": "Chad Lindberg",
                "description": "Jesse",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 47429,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_47429.jpg",
                "name": "Джонни Стронг",
                "enName": "Johnny Strong",
                "description": "Leon",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 532,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_532.jpg",
                "name": "Тед Левайн",
                "enName": "Ted Levine",
                "description": "Sgt. Tanner",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 7189,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7189.jpg",
                "name": "Том Бэрри",
                "enName": "Thom Barry",
                "description": "Agent Bilkins",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 12801,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_12801.jpg",
                "name": "Джа Рул",
                "enName": "Ja Rule",
                "description": "Edwin",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 28017,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_28017.jpg",
                "name": "Вито Руджинис",
                "enName": "Vyto Ruginis",
                "description": "Harry",
                "profession": "актеры",
                "enProfession": "actor"
            },
        ],
        "budget": {
            "currency": "$",
            "value": 38000000
        },
        "top10": null,
        "top250": null,
        "isSeries": false,
        "lists": [
            "top500",
            "popular-films",
            "hd-blockbusters",
            "hd-revise",
            "box-usa-all-time",
            "box-total"
        ],
        "videos": {
            "trailers": [
                {
                    "url": "https://www.youtube.com/embed/_Oi9Ma7nxK8",
                    "name": "Форсаж (2001) - Дублир трейлер2 Open Matte HD",
                    "site": "youtube",
                    "type": "TRAILER"
                },
                {
                    "url": "https://www.youtube.com/embed/m_jWcyfjFGw",
                    "name": "Legacy Trailer",
                    "site": "youtube",
                    "type": "TRAILER"
                },
                {
                    "url": "https://www.youtube.com/embed/HRe0LVDO9zE",
                    "name": "Trailer 2",
                    "site": "youtube",
                    "type": "TRAILER"
                },
                {
                    "url": "https://www.youtube.com/embed/ZsJz2TJAPjw",
                    "name": "Official Trailer",
                    "site": "youtube",
                    "type": "TRAILER"
                }
            ]
        },
        "fees": {
            "usa": {
                "value": 144533925,
                "currency": "$"
            },
            "world": {
                "value": 207283925,
                "currency": "$"
            },
            "russia": {
                "value": 203022029,
                "currency": "$"
            },
        },
        logo: {
            url: ""
        },
        premiere: {
            "country": null,
            "digital": null,
            "cinema": null,
            "bluray": "2009-08-04T00:00:00.000Z",
            "dvd": "2009-03-10T00:00:00.000Z",
            "russia": "2001-10-18T00:00:00.000Z",
            "world": "2001-06-18T00:00:00.000Z"
        },
        similarMovies: [],
        sequelsAndPrequels: [],
        releaseYears: []
    };

    return (
        <div className={'page'}>
            <div className={'container'}>
                <MoviePageItem movie={movie}/>
            </div>
        </div>
    );
};

export default MoviePage;