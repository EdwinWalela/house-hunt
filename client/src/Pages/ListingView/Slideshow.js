import React from 'react'
import { Zoom } from 'react-slideshow-image';

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
}

function Slideshow(props) {
    let images = props.gallery
    return (
        <div className="slide-container">
            <Zoom {...zoomOutProperties}>
            {
                images.map((each, index) => <img key={index} style={imageStyle} src={each} />)
            }
            </Zoom>
      </div>
    )
}


const imageStyle = {
    width:"90%",
    maxWidth:"450px",
    height:"350px",
    margin:"20px auto 30px auto"
}

Slideshow.propTypes = {

}

export default Slideshow

