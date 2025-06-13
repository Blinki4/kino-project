import {
    FILMS_PAGE,
    LOGIN_PAGE,
    MAIN_PAGE,
    MOVIE_PAGE,
    MY_PAGE,
    PROFILE_PAGE,
    REGISTER_PAGE,
    SERIES_PAGE
} from "./routes.ts";

class PageConfig {
    main = MAIN_PAGE;
    films = FILMS_PAGE;
    series = SERIES_PAGE;
    my = MY_PAGE;
    profile = PROFILE_PAGE;
    movie = MOVIE_PAGE;
    login = LOGIN_PAGE;
    register = REGISTER_PAGE;
}

export const pageConfig = new PageConfig();