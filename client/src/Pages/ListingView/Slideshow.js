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
    let images = props.gallery.splice(0,3)
    return (
        <div style={containerStyle}>
            {
                images.map((each, index) => <img key={index} style={imageStyle} src={each} />)
            }
      </div>
    )
}

const containerStyle={
    marginTop:"20px"
}

const imageStyle = {
    width:"50%",
    maxWidth:"300px",
    height:"200px",
    margin:"10px"
}

Slideshow.propTypes = {

}

export default Slideshow

