import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../../layout/Header';
import EditForm from "./EditForm";

function EditContainer(props) {
    return (
        <div>
            <Header />
            <EditForm />
        </div>
    )
}

EditContainer.propTypes = {

}

export default EditContainer

