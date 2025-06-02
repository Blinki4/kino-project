// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, {FC} from 'react';
import {useAppStore} from "../store/appStore.ts";
import Button from "../components/ui/Button.tsx";
import {useNavigate} from "react-router-dom";

const ProfilePage: FC = () => {
    const navigateTo = useNavigate()
    const {isAuthorised} = useAppStore(state => state)

    const navigateToLogin = () => {
        navigateTo('/login')
    }

    const navigateToRegister = () => {
        navigateTo('/register')
    }

    return (
        <div className={'page'}>
            <div className={'container'}>
                {isAuthorised ?
                    <div className={'profile'}>PROFILE</div>
                    :
                    <div className={'profile__authorize'}>
                        <p>Чтобы пользоваться всеми возможностями авторизуйтесь или зарегистрируйтесь</p>
                        <div className={'profile__authorize-buttons'}>
                            <Button onClick={navigateToLogin}>
                                Вход
                            </Button>
                            <Button onClick={navigateToRegister}>
                                Регистрация
                            </Button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProfilePage;