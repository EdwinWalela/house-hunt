import React from 'react'
import PropTypes from 'prop-types'
import ResultItem from './ResultItem';
import Suggestions from './Suggestions'

function SearchList(props) {
    let listings = props.listings;
    let suggestions = props.suggestions;
    return (
        <React.Fragment>
            <div id="results" style={containerStyle}>
                {listings.length === 0 ?
                    <p style={countStyleNF}>No Results Found</p>
                :
                    <p style={countStyle}>Showing {listings.length} results</p>
                }

                    {listings.map((listing,i)=>(
                        <ResultItem 
                            index={i}
                            data={listing}
                            setActiveListing={props.setActiveListing}
                        />
                        
                    ))
                    
                    }
            </div>
            <Suggestions listings={props.suggestions}/>
        </React.Fragment>
    )
}

const containerStyle = {
    minHeight:"50vh",
}

const countStyle = {
    marginTop:"20px",
    textAlign:"center",
    color:"#D3424E"
}

const countStyleNF = {
    ...countStyle,
    marginTop:"50px"
}

SearchList.propTypes = {

}

SearchList.defaultProps = {
    suggestions:[{"coords":{"lat":-1.310117,"lng":36.704254},"thumb":["https://media.jumiadeals.com/ke_live/7893ab9a4c5db20c92e93c9.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/37ea036cdb5db20c98153cb.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/6e932dff5c5db20c9e626d6.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/a599b659015db20ca51dd76.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/3c172dd5405db20caabd6e9.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/c9b8e9f1e95db20cb0e8c2b.desktop-gallery-large.jpg"],"_id":"5db87ead4cbb4126c090f9c2","title":"3 bedroom apartment for rent in Karen.","price":90000,"location":"karen","url":"https://deals.jumia.co.ke/3-bedroom-apartment-for-rent-in-karen--pid4894401","origin":"jumia","beds":"3","baths":"NaN"},{"coords":{"lat":-1.260362,"lng":36.817918},"thumb":["https://media.jumiadeals.com/ke_live/b195969aae5db1e6fa68d0d.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/892bb68f6a5db1e6fee2564.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/c76f3c21f95db1e70239e93.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/177ac89ef95db1e707141d6.desktop-gallery-large.jpg"],"_id":"5db87ead4cbb4126c090f9c1","title":"3 BEDROOM APARTMENT IN PARKLANDS","price":150000,"location":"parklands","url":"https://deals.jumia.co.ke/3-bedroom-apartment-in-parklands-pid4893710","origin":"jumia","beds":"3","baths":"NaN"},{"coords":{"lat":-1.288307,"lng":36.799101},"thumb":["https://media.jumiadeals.com/ke_live/2ff58289495db69eb1eb17f.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/48ecd01f455db69ec30640c.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/743088784e5db69f02c6b36.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/d14923a4df5db69f1545b2a.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/6e5d9699505db69f28695aa.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/0bf027bf6d5db69f4c5d52c.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/bc24e125565db69f5d3832f.desktop-gallery-large.jpg"],"_id":"5db87ead4cbb4126c090f9bf","title":"Brand new 3 Bedroom Master Ensuite Plus SQ In Kilimani","price":90000,"location":"kilimani","url":"https://deals.jumia.co.ke/brand-new-3-bedroom-master-ensuite-plus-sq-in-kilimani-pid4909449","origin":"jumia","beds":"3","baths":"NaN"},{"coords":{"lat":-1.269686,"lng":36.793625},"thumb":["https://media.jumiadeals.com/ke_live/e015b656ea5db1c7ba2d4fa.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/b163f26d4d5db1c7c25ecb4.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/aae23c52d75db1c7ce8b2d1.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/e6b1e8d6545db1c78a1e0fa.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/25efc7ad5c5db1c7980e04d.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/1b71c5e23a5db1c7a2aa819.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/d2ba94b32f5db1c7ae12173.desktop-gallery-large.jpg"],"_id":"5db87ead4cbb4126c090f9c5","title":"A 3 bedroom apartment to Let in Riverside","price":85000,"location":"riverside","url":"https://deals.jumia.co.ke/a-3-bedroom-apartment-to-let-in-riverside-pid4893044","origin":"jumia","beds":"3","baths":"NaN"},{"coords":{"lat":-1.277787,"lng":36.77773},"thumb":["https://media.jumiadeals.com/ke_live/44647407f85db10f9bc8ea9.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/6b98c6b44a5db10fbd5c18a.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/6b98c6b44a5db10fbdb743f.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/731f1ce65f5db10fbf7f789.desktop-gallery-large.jpg","https://media.jumiadeals.com/ke_live/c8a79b0ffb5db10fc087ac9.desktop-gallery-large.jpg"],"_id":"5db87ead4cbb4126c090f9c6","title":"3 Bedroom Plus Dsq Apartment to Let Lavington","price":75000,"location":"lavington","url":"https://deals.jumia.co.ke/3-bedroom-plus-dsq-apartment-to-let-lavington-pid4889270","origin":"jumia","beds":"3","baths":"NaN"}]
}

export default SearchList

