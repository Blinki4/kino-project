import {useEffect, useState} from "react";

export default function useHover(ref: { current: any }) {

    const [hover, setHover] = useState(false)

    const on = () => setHover(true)
    const off = () => setHover(false)


    useEffect(() => {

        const node = ref.current

        node.addEventListener('mouseover', on)
        node.addEventListener('mousemove', on)
        node.addEventListener('mouseout', off)


        return function () {
            node.removeEventListener('mouseover', on)
            node.removeEventListener('mousemove', on)
            node.removeEventListener('mouseout', off)
        }
    }, []);


    return hover
}