import React from 'react';
import UseEffectImageScroll from './UseEffectImageScroll';

export const ConfigContext = React.createContext();

var universe = {
    "name":"Anil Rapuru"
}

const ImageScrollList = () => {
    return (
        <ConfigContext.Provider value={universe}>
        <div>
            <UseEffectImageScroll primary="images/pic1.jpg" secondary="images/pic2.jpg"/>
            <UseEffectImageScroll primary="images/pic1.jpg" secondary="images/pic2.jpg"/>
            <UseEffectImageScroll primary="images/pic1.jpg" secondary="images/pic2.jpg"/>
            <UseEffectImageScroll primary="images/pic1.jpg" secondary="images/pic2.jpg"/>
            <UseEffectImageScroll primary="images/pic1.jpg" secondary="images/pic2.jpg"/>
            <UseEffectImageScroll primary="images/pic1.jpg" secondary="images/pic2.jpg"/>
            <UseEffectImageScroll primary="images/pic1.jpg" secondary="images/pic2.jpg"/>
            <UseEffectImageScroll primary="images/pic1.jpg" secondary="images/pic2.jpg"/>
            <UseEffectImageScroll primary="images/pic1.jpg" secondary="images/pic2.jpg"/>
            <UseEffectImageScroll primary="images/pic1.jpg" secondary="images/pic2.jpg"/>
        </div>
        </ConfigContext.Provider>
    )
}


export default ImageScrollList;
