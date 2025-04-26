import {FC, useEffect, useRef} from 'react';

interface KinoboxPlayerProps {
    kpId: string
}

const KinoboxPlayer: FC<KinoboxPlayerProps> = ({kpId}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://kinobox.tv/kinobox.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (containerRef.current) {
                //@ts-expect-error
                window.kbox(containerRef.current, {search: {kinopoisk: kpId}});
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [kpId]);

    return (
        <div ref={containerRef} className="kinobox-player"></div>
    );
};

export default KinoboxPlayer;