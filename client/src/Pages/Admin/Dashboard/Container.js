import React from 'react'
import Header from '../../../layout/Header';
import PropTypes from 'prop-types'
import ListingContainer from './ListingContainer';
import NoResults from '../../../layout/NoResults';

function Container(props) {
  console.log(props)
    return (
        <React.Fragment>
          <Header title="Admin Dashboard"/>
          {props.listings.length !== 0 ? <ListingContainer listings={props.listings} listingOnClick={props.listingOnClick}/> : <NoResults error={props.networkError}/>}
        </React.Fragment>
    )
}


export default Container;