import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

/**
 * This hook will take a function, and returns a ref.
 * ref can be assigned to any JSX element as prop, and
 * when the element reaches 50% of the viewport, the passed
 * in function will be called with the element id as parameter.
 * @param {function} action 
 * @returns {funciton} ref
 */
export default function useScrollObserver(action) {
    const {ref, inView, entry} = useInView({
        rootMargin: '-50% 0% -50% 0%'
    })
    useEffect(() => {
        if (entry && inView) {
            action(entry.target.id);
        }
    }, [entry, action, inView])
    return ref
}