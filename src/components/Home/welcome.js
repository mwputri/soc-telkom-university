import React from 'react';

import header1 from "assets/corosel/header1.png"
import header2 from "assets/corosel/header2.jpg"
import header3 from "assets/corosel/header3.jpg"
import header4 from "assets/corosel/header4.png"


import AliceCarousel from "react-alice-carousel";

const Welcome = () => {


    const responsive = {
        0: {items: 1},
        568: {items: 1},
        1024: {items: 1},
    };

    let items = []
    let Listitems = [
        header1,
        header2,
        header3,
        header4,

    ]


    for (let i = 0; i < Listitems.length; i++) {
        items.push(
            <img
                className={"w-100"}
                src={Listitems[i]}
                alt="image description"/>
        )
    }
    return (
        <>
            <AliceCarousel
                autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={4000}
                animationDuration={1000}
                animationType="fadeout"
                infinite
                mouseTracking
                items={items}
                responsive={responsive}
                disableSlideInfo={true}
                disableDotsControls
                controlsStrategy={"responsive"}
                disableButtonsControls
            />
        </>
    )
}


export default Welcome