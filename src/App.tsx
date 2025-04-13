import Navbar from "./components/Navbar.tsx";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBookmark, faFilm, faHouse, faLaptop, faS, faTicket, faUser} from "@fortawesome/free-solid-svg-icons";
import {Route, Routes} from "react-router-dom";

function App() {
    library.add(faS, faTicket, faFilm, faBookmark, faLaptop, faUser, faHouse)

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<>MAIN PAGE</>}/>
                <Route path={'/films'} element={<>FILMS PAGE</>}/>
                <Route path={'/series'} element={<>SERIES PAGE</>}/>
                <Route path={'/my'} element={<>MY PAGE</>}/>
                <Route path={'/profile'} element={<>PROFILE PAGE</>}/>
            </Routes>
        </>
    )
}

export default App
