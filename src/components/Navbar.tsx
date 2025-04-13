import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Navbar: FC = () => {
    return (
        <nav className={'navbar'}>
            <div className={'navbar__logo-wrapper'}>
                <FontAwesomeIcon className={'navbar__logo'} icon={["fas", 'ticket']}/>
            </div>
            <ul className={'navbar__menu-list'}>
                <li className={'navbar__menu-item'}>
                    <Link to={'/'} className={'navbar__menu-link'}>
                        <p className={'navbar__menu-title'}>Главная</p>
                        <FontAwesomeIcon className={'navbar__menu-icon'} icon={["fas", 'home']}/>
                    </Link>
                </li>
                <li className={'navbar__menu-item'}>
                    <Link to={'/films'} className={'navbar__menu-link'}>
                        <p className={'navbar__menu-title'}>Фильмы</p>
                        <FontAwesomeIcon className={'navbar__menu-icon'} icon={["fas", 'film']}/>
                    </Link>
                </li>
                <li className={'navbar__menu-item'}>
                    <Link to={'/series'} className={'navbar__menu-link'}>
                        <p className={'navbar__menu-title'}>Сериалы</p>
                        <FontAwesomeIcon className={'navbar__menu-icon'} icon={["fas", 'laptop']}/>
                    </Link>
                </li>
                <li className={'navbar__menu-item'}>
                    <Link to={'/my'} className={'navbar__menu-link'}>
                        <p className={'navbar__menu-title'}>Моё</p>
                        <FontAwesomeIcon className={'navbar__menu-icon'} icon={["fas", 'bookmark']}/>
                    </Link>
                </li>
            </ul>
            <div className={'navbar__profile-wrapper'}>
                <Link to={'/profile'}>
                    <FontAwesomeIcon className={'navbar__profile'} icon={["fas", 'user']}/>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;