import React from 'react'
import PropTypes from 'prop-types'
import { withScriptjs } from "react-google-maps";

// Components
import NavSearch from './SearchBar/Container'
import Slideshow from './Slideshow'
import Features from './Features'
import Commute from './Commute'
import Neighborhood from './Neighborhood'
import ElecAnalytics from './ElectricityAnalytics'
import Suggestions from '../../layout/Suggestions'
import Map from './Commute'

function Container(props) {
    const Commute = withScriptjs(Map)
    let listing = props.listing
    let location = listing.location
    let gallery = [listing.thumb[0]]
    let reffPoint = props.reffPoint
    return (
        <div style={containerStyle}>
            <NavSearch />
            <Slideshow 
                gallery={gallery}
            />
            <br/>
            <Features 
                listing={listing}
            />
            <br/>
            <Commute
            // AIzaSyD886ga_vi4Wxi4xWUDDp3h33AClSbZiW4
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD886ga_vi4Wxi4xWUDDp3h33AClSbZiW4"
                loadingElement={<div style={{ height: `100px` }} />}
                
                reffPoint={props.reffPoint}
                from={listing.location}
                listingCoords={listing.coords}
            />
            <Neighborhood
                title="Neighborhood"
                shops={listing.places.shops}
                medics={listing.places.medics}
                restaurants={listing.places.restaurants}
                gyms={listing.places.gyms}
                center={listing.coords}
                location={listing.location}
            />
            <ElecAnalytics 
                location={location}
            />
            <Suggestions />
        </div>
    )
}

const containerStyle = {
    margin:"auto 0",
    textAlign:"center",
}
// /,36.8217003

Container.defaultProps = {
    reffPoint:"CBD",
    listing:{
            "_id": "5d92f3d1e29bfc0d40f07846",
            "title": "executive 2 bedroom apartment all ensuite to let",
            "price": 45000,
            "thumb": ["https://media.jumiadeals.com/ke_live/ddf3008e525d868353183bc.desktop-gallery-large.jpg"],
            "location": "langata",
            "coords":{
                "lat":-1.3641,
                "lng":36.7476
            },
            "url": "https://deals.jumia.co.ke/executive-2-bedroom-apartment-all-ensuite-to-let-pid4705907",
            "origin": "jumia",
            "beds": "2",
            "baths": "0",
            "places": {
                "shops": [
                {
                "name": "Quick Mart Ruaka",
                "rating": 4.1,
                "opened": true,
                "coords": {
                "lat": -1.2068367,
                "lng": 36.7834295
                }
                },
                {
                "name": "Two Rivers Mall",
                "rating": 4.5,
                "opened": true,
                "coords": {
                "lat": -1.210846,
                "lng": 36.7946976
                }
                },
                {
                "name": "ruaka business center",
                "rating": 3.9,
                "opened": "n/a",
                "coords": {
                "lat": -1.211165,
                "lng": 36.785571
                }
                }
                ],
                "medics": [ ],
                "restaurants": [
                {
                "name": "Valley Park Falls -Ruaka Bar, Lounge & Restaurant",
                "rating": 4,
                "opened": true,
                "coords": {
                "lat": -1.2067725,
                "lng": 36.7885337
                }
                },
                {
                "name": "Mayweather Suites",
                "rating": 4,
                "opened": false,
                "coords": {
                "lat": -1.2058764,
                "lng": 36.7775717
                }
                },
                {
                "name": "Pork Pit",
                "rating": 4.4,
                "opened": true,
                "coords": {
                "lat": -1.206473,
                "lng": 36.7832519
                }
                }
                ],
                "gyms": [ ]
                }
        }, 
}

export default Container

