// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, {FC} from 'react';
import Button from "../components/ui/Button.tsx";

const RegisterPage: FC = () => {
    return (
        <div className={'page'}>
            <div className={'container'}>
                <div className={'login'}>
                    <form className={'login__form'}>
                        <h2 className={'login__form-header'}>Регистрация</h2>
                        <div>
                            <label htmlFor={'login'}>Логин</label>
                            <input id={'login'} placeholder={'Придумайте логин'} className={'input'}/>
                        </div>
                        <div>
                            <label htmlFor={'password'}>Пароль</label>
                            <input id={'password'} placeholder={'Придумайте пароль'} className={'input'}/>
                        </div>
                        <div>
                            <label htmlFor={'password'}>Подтвердите пароль</label>
                            <input id={'password'} placeholder={'Подтвердите пароль'} className={'input'}/>
                        </div>
                        <Button className={'login__form-button'}>Регистрация</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;