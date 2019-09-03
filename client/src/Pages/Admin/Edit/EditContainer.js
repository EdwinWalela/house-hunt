import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../../layout/Header';
import EditForm from "./EditForm";

function EditContainer(props) {
    return (
        <div>
            <Header title="Admin Dashboard"/>
            <EditForm listing={props.listing}/>
        </div>
    )
}

EditContainer.propTypes = {

}

export default EditContainer

