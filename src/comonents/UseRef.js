import React, { useRef } from 'react'

const UseRef = () => {
    const imgRef = useRef(null);
    return (
        <div>
            <img 
            width="30%" src="images/pic1.jpg" alt="pic1" 
            ref={imgRef}
            onMouseOver={ () => {
                imgRef.current.src="images/pic2.jpg";
            }}
            onMouseOut={()=>{
                imgRef.current.src="images/pic1.jpg";
            }}
            />
        </div>
    )
}


export default UseRef;
