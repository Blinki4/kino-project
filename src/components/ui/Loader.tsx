import {Ring} from "ldrs/react";

const Loader = () => {
    return (
        <div className={'loader'}>
            <Ring
                size="50"
                stroke="6"
                bgOpacity="0"
                speed="2"
                color="white"
            />
        </div>
    );
};

export default Loader;