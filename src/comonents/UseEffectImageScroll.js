import React, { useState, useEffect, useRef } from 'react';

const UseEffectImageScroll = (props) => {
    const [isInView, setInView] = useState(false);

    const imageRef = useRef(null);


    useEffect(() => {
        setInView(getInView());
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const getInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    const scrollHandler = () => {
        setInView(getInView());
    }

    return (
        <div className="container">
            <img
                ref={imageRef}
                width="20%" height="20%" src={isInView ? props.primary : props.secondary} alt="anil" />
        </div>
    )
}


export default UseEffectImageScroll;
