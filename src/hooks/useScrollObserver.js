import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useScrollObserver(action) {
    const {ref, inView, entry} = useInView({
        rootMargin: '-50% 0% -50% 0%'
    })
    useEffect(() => {
        if (entry && inView) {
            action(entry.target.id);
        }
    }, [entry])
    return ref
}