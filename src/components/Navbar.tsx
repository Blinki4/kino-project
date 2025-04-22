import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {pageConfig} from "../router/pagesConfig.ts";

const Navbar: FC = () => {
    return (
        <nav className={'navbar'}>
            <div className={'navbar__logo-wrapper'}>
                <Link to={pageConfig.main}>
                    <FontAwesomeIcon className={'navbar__logo'} icon={["fas", 'clapperboard']}/>
                </Link>
            </div>
            <div className={'navbar__menu-wrapper'}>
                <ul className={'navbar__menu-list'}>
                    <li className={'navbar__menu-item'}>
                        <Link to={pageConfig.main} className={'navbar__menu-link'}>
                            <p className={'navbar__menu-title hidden-mobile'}>Главная</p>
                            <FontAwesomeIcon className={'navbar__menu-icon'} icon={["fas", 'home']}/>
                        </Link>
                    </li>
                    <li className={'navbar__menu-item'}>
                        <Link to={pageConfig.films} className={'navbar__menu-link'}>
                            <p className={'navbar__menu-title hidden-mobile'}>Фильмы</p>
                            <FontAwesomeIcon className={'navbar__menu-icon'} icon={["fas", 'film']}/>
                        </Link>
                    </li>
                    <li className={'navbar__menu-item'}>
                        <Link to={pageConfig.series} className={'navbar__menu-link'}>
                            <p className={'navbar__menu-title hidden-mobile'}>Сериалы</p>
                            <FontAwesomeIcon className={'navbar__menu-icon'} icon={["fas", 'laptop']}/>
                        </Link>
                    </li>
                    <li className={'navbar__menu-item'}>
                        <Link to={pageConfig.my} className={'navbar__menu-link'}>
                            <p className={'navbar__menu-title hidden-mobile'}>Моё</p>
                            <FontAwesomeIcon className={'navbar__menu-icon'} icon={["fas", 'bookmark']}/>
                        </Link>
                    </li>
                </ul>
                <div className={'search'}>
                    <input className={'search__input'} type="text" placeholder={'Фильмы, сериалы'}/>
                    <FontAwesomeIcon className={'search__icon'} icon={["fas", 'magnifying-glass']}/>
                </div>
            </div>
            <div className={'navbar__profile-wrapper'}>
                <Link to={pageConfig.profile}>
                    <FontAwesomeIcon className={'navbar__profile'} icon={["fas", 'user']}/>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;