import React, { useState, useEffect, useRef, useContext, useReducer } from 'react';
import { ConfigContext } from './ImageScrollList';

const UseEffectImageScroll = (props) => {
    const [isInView, setInView] = useState(false);

    const imageRef = useRef(null);

    const value = useContext(ConfigContext);

    const setArrayReducer = (state, action) => {
        switch (action.type) {
            case "setArrayList":
                return action.data;
            default:
                return state;
        }
    }

    const [arrayOfNos, dispatchCustom] = useReducer(setArrayReducer, [])


    useEffect(() => {
        console.log('use Effect');
        setInView(getInView());
        window.addEventListener('scroll', scrollHandler);
        dispatchCustom({
            type: "setArrayList",
            data: [1, 2, 3, 4, 5]
        });
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
            {console.log("render")}
            <h1>{value.name}</h1>
            {arrayOfNos.map((no) => <h3>{no}</h3>)}
        </div>
    )
}


export default UseEffectImageScroll;
