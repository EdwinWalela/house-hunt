import React from 'react'
import PropTypes from 'prop-types'

function HelpModal(props) {
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    {/* <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Areas Of Interest</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div> */}
                    <div className="modal-body">
                    We will use this information to provide you with traffic data to enable you to make the right decision. 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" style={closeBtnStyle}  data-dismiss="modal" >Close</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

const closeBtnStyle = {
    background:"#1B98E0 !important"
}

HelpModal.propTypes = {

}

export default HelpModal

