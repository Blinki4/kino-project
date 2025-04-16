import {FC} from "react";
import Gallery from "../components/gallery/Gallery.tsx";

const MainPage: FC = () => {

    return (
        <div className={'page'}>
            <Gallery/>
            <div className={'container'}>
                <h2>Карусель</h2>
            </div>
        </div>
    );
};

export default MainPage;

//TODO При наведении на постер затемнять его и сверху отображать оценку, длительность и страну (Use hover)
