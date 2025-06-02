// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, {FC} from 'react';

const LoginPage: FC = () => {
    return (
        <div className={'page'}>
            <div className={'container'}>
                <div className={'login'}>
                    <form className={'login_form'}>
                        <input className={'input'}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;