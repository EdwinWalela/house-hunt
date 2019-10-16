import React from 'react'
import PropTypes from 'prop-types'

function HelpModal(props) {
    let data = {
        src:props.src,
        desc:props.description
    }
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div  className="modal-dialog modal-dialog-centered" role="document">
                    <div style={modalContainer} className="modal-content">
                    <div style={textStyle} className="modal-body">
                        <img style={trafficStyle} src={data.src}/>
                        {data.desc}.
                    </div>
                    <div style={{border:"none"}} className="modal-footer">
                        <button type="button" className="btn" style={closeBtnStyle}  data-dismiss="modal" >Close</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

const modalContainer = {
    background:"rgba(255,255,255,0.95)",
    border:"none",
    width:"90%",
    margin:"auto"
}

const closeBtnStyle = {
    color:"#1B98E0 !important"
}

const textStyle = {
    textAlign:"center",
    fontSize:"1.1em",
}

const trafficStyle = {
    height:"150px",
    width:"150px",
    display:"block",
    textAlign:"center",
    margin:"20px auto",  
    color:"#F3A712"
}

HelpModal.propTypes = {

}

export default HelpModal

