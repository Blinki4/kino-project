import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import batmanPoster from "../../assets/batman-poster.png";
import {useRef} from "react";

const GalleryList = () => {
    const galleryListRef = useRef<HTMLUListElement>(null);

    const galleryScroll = (direction: string) => {
        let width = window.innerWidth
        let scrollOffset = 1135
        if (width <= 1080) {
            scrollOffset = 935
        }
        if (direction === 'left') {
            galleryListRef!.current!.scrollLeft -= scrollOffset;
        }
        if (direction === 'right') {
            galleryListRef!.current!.scrollLeft += scrollOffset;
        }
    };

    return (
        <div className={'gallery'}>
            <FontAwesomeIcon className={'gallery__list-icon'} icon={["fas", 'chevron-left']}
                             onClick={() => galleryScroll('left')}/>
            <ul ref={galleryListRef} className={'gallery__list'}>
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
                             onClick={() => galleryScroll('right')}/>
        </div>
    );
};

export default GalleryList;