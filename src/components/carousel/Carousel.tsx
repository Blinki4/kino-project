import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import spiderPoster from "../../assets/spider-man-bg.webp";

const Carousel: FC = () => {
    return (
        <div className={'container'}>
            <h2 className={'carousel__header'}>Новинки</h2>
            <div className="carousel">
                <FontAwesomeIcon className={'carousel__icon'} icon={["fas", 'chevron-left']}/>
                <ul className={'carousel__list'}>
                    <li className={'carousel__item'}>
                        <img className={'carousel__poster'} src={spiderPoster} alt={''}/>
                    </li>
                    <li className={'carousel__item'}>
                        <img className={'carousel__poster'} src={spiderPoster} alt={''}/>
                    </li>
                    <li className={'carousel__item'}>
                        <img className={'carousel__poster'} src={spiderPoster} alt={''}/>
                    </li>
                </ul>
                <FontAwesomeIcon className={'carousel__icon'} icon={["fas", 'chevron-right']}/>
            </div>
        </div>
    );
};

export default Carousel;