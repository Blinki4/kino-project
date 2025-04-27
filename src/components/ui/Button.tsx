import {FC} from "react";
import * as React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    height?: number;
    width?: number;
}

const Button: FC<ButtonProps> = ({height, width, children, onClick, className}) => {
    return (
        <button style={{height: height, width: width}} className={'button ' + className} type={'button'}
                onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;