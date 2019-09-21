import React from 'react'
import PropTypes from 'prop-types'

function HelpModal(props) {
    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Areas Of Interest</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    To provide you with the best results, select a facility/service you would like to be located near your next home.<br/><br/> The time represents your preffered walking distance from the selected service to your next home.
                </div>
                <div class="modal-footer">
                    <button type="button"  data-dismiss="modal" class="btn btn-primary">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

HelpModal.propTypes = {

}

export default HelpModal

