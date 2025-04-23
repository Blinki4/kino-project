import {FC} from "react";
import * as React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button: FC<ButtonProps> = ({children, onClick, className}) => {
    return (
        <button className={'button ' + className} type={'button'} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;