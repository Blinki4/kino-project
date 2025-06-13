import {useEffect, useRef} from "react";

export const useObserver = (ref: { current: any }, canLoad: boolean, isLoading: boolean, callback: () => void) => {
    const observer = useRef<IntersectionObserver>(null);

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        const func = function (entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        }
        observer.current = new IntersectionObserver(func);
        observer.current.observe(ref.current)
    }, [isLoading]);
}