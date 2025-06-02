import Navbar from "./components/Navbar.tsx";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faBookmark, faChevronLeft, faChevronRight,
    faClapperboard,
    faFilm,
    faHouse,
    faLaptop,
    faMagnifyingGlass,
    faS,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {Route, Routes} from "react-router-dom";
import {pageConfig} from "./router/pagesConfig.ts";
import MainPage from "./pages/MainPage.tsx";
import MoviePage from "./pages/MoviePage.tsx";
import FilmsPage from "./pages/FilmsPage.tsx";
import SeriesPage from "./pages/SeriesPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import MyPage from "./pages/MyPage.tsx";

library.add(faS, faClapperboard, faFilm, faBookmark, faLaptop, faUser, faHouse, faMagnifyingGlass, faChevronRight, faChevronLeft)

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={pageConfig.main} element={<MainPage/>}/>
                <Route path={pageConfig.films} element={<FilmsPage/>}/>
                <Route path={pageConfig.series} element={<SeriesPage/>}/>
                <Route path={pageConfig.my} element={<MyPage/>}/>
                <Route path={pageConfig.profile} element={<ProfilePage/>}/>
                <Route path={pageConfig.movie} element={<MoviePage/>}/>
                <Route path={pageConfig.login} element={<>LOGIN PAGE</>}/>
                <Route path={pageConfig.register} element={<>REGISTER PAGE</>}/>
            </Routes>
        </>
    )
}

export default App
