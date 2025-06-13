// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, {FC} from 'react';
import Button from "../components/ui/Button.tsx";
import {useAppStore} from "../store/appStore.ts";
import {useNavigate} from "react-router-dom";

const LoginPage: FC = () => {
    const navigateTo = useNavigate()
    const {setIsAuthorized} = useAppStore(store => store)

    const login = () => {
        setIsAuthorized(true)
        navigateTo('/profile')
    }

    return (
        <div className={'page'}>
            <div className={'container'}>
                <div className={'login'}>
                    <form className={'login__form'}>
                        <h2 className={'login__form-header'}>Вход</h2>
                        <div>
                            <label htmlFor={'login'}>Логин</label>
                            <input id={'login'} placeholder={'Логин'} className={'input'}/>
                        </div>
                        <div>
                            <label htmlFor={'password'}>Пароль</label>
                            <input id={'password'} placeholder={'Пароль'} className={'input'}/>
                        </div>
                        <Button className={'login__form-button'} onClick={login}>Войти</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;