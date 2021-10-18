import React from 'react';
import Carousel from 'react-elastic-carousel';

const Corousel = ({items}) => {
    return (
        <div>
            <Carousel>
                { items.map((item) => {
                    return <img width="500px" height="500px" src={item} alt={item}/>
                }) }
            </Carousel>
        </div>
    )
}



export default Corousel;
