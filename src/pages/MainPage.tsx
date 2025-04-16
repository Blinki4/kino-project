import {FC, useRef} from "react";
import batmanPoster from '../assets/batman-poster.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MainPage: FC = () => {
    const ref = useRef<HTMLUListElement>(null);
    const desktopScrollOffset: number = 1130;

    const scroll = (scrollOffset: number) => {
        ref!.current!.scrollLeft += scrollOffset;
    };

    return (
        <div className={'page'}>
            <div className={'container'}>
                <div className={'gallery__header'}>
                    <div className={'gallery__header-title'}>Фильмы-новинки</div>
                    <FontAwesomeIcon className={'gallery__header-icon'} icon={["fas", 'chevron-right']}/>
                </div>
                <div className={'gallery'}>
                    <FontAwesomeIcon className={'gallery__list-icon'} icon={["fas", 'chevron-left']}
                                     onClick={() => scroll(-desktopScrollOffset)}/>
                    <ul ref={ref} className={'gallery__list'}>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен длинное название
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 3
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 4
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 5
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 6
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 7
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 8
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 9
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 10
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 11
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 12
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 7
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 8
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 9
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 10
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 11
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={'gallery__item'}>
                            <div className={'card'}>
                                <img src={batmanPoster} alt="" className={'card__poster'}/>
                                <div className={'card__info'}>
                                    <div className={'card__info-title'}>
                                        Бэтмен 12
                                    </div>
                                    <div className={'card__info-year'}>
                                        2018
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <FontAwesomeIcon className={'gallery__list-icon'} icon={["fas", 'chevron-right']}
                                     onClick={() => scroll(desktopScrollOffset)}/>
                </div>
            </div>
            <div className={'container'}>
                <h2>Карусель</h2>
            </div>
        </div>
    );
};

export default MainPage;


//TODO При наведении на постер затемнять его и сверху отображать оценку, длительность и страну (Use hover)
//TODO Вынести галерею в компонент