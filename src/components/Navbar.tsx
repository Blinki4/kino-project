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
                    <Link to={'/'} className={'navbar__menu-link'}>Главная</Link>
                    <FontAwesomeIcon className={'navbar__logo'} icon={["fas", 'home']}/>
                </li>
                <li className={'navbar__menu-item'}>
                    <Link to={'/films'} className={'navbar__menu-link'}>Фильмы</Link>
                    <FontAwesomeIcon className={'navbar__logo'} icon={["fas", 'film']}/>
                </li>
                <li className={'navbar__menu-item'}>
                    <Link to={'/series'} className={'navbar__menu-link'}>Сериалы</Link>
                    <FontAwesomeIcon className={'navbar__logo'} icon={["fas", 'laptop']}/>
                </li>
                <li className={'navbar__menu-item'}>
                    <Link to={'/my'} className={'navbar__menu-link'}>Моё</Link>
                    <FontAwesomeIcon className={'navbar__logo'} icon={["fas", 'bookmark']}/>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;