import {FC} from "react";
import * as React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({children}) => {
    return (
        <button className={'button'} type={'button'}>
            {children}
        </button>
    );
};

export default Button;