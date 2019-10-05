import React, { Component } from 'react'
import ItemsCarousel from 'react-items-carousel'

// Components
import LocationStep from './Location'
import BedStep from './Beds'
import BudgetStep from './Budget'
import InterestStep from './Intrests'

class SearchContainer extends Component {

    state = {
        activeItemIndex:0
    }

    setActiveItemIndex = (index) =>{
        this.setState({
            activeItemIndex:index
        })
    }
    render(){
        const chevronWidth = "10";
        return (
            <div style={containerStyle}>
                <h1 style={logoStyle}>House Hunt</h1>
                <p style={sloganStyle}>Find Your Next Home</p>
                <div style={{margin:"auto", maxWidth:"500px", paddingLeft: `${chevronWidth}`}}>
                    <ItemsCarousel
                        requestToChangeActive={this.setActiveItemIndex}
                        activeItemIndex={this.state.activeItemIndex}
                        numberOfCards={1}
                        slidesToScroll={1}
                        gutter={12}
                        showSlither={false}
                        alwaysShowChevrons={true}
                        firstAndLastGutter={false}
                        outsideChevron={true}
                        chevronWidth={chevronWidth}
                    >
                        <LocationStep />
                        <BedStep />
                        <BudgetStep />
                        <InterestStep />
                    </ItemsCarousel>
                    </div>
                {/* <SearchForm
                    updateSearchParams={props.updateSearchParams}  ----- (Pass To New Search)
                />
                <RangeSelector /> */}
                {/* <Link to="/search"><button onClick={props.listingSearch} style={btnStyle}>Search</button></Link> */}
            </div>
        )
    }
}

const containerStyle = {
    margin:"0 auto 25px auto",
    height:"80vh",
    background:"url(/images/landing5.png)",
    backgroundPosition:"bottom",
    backgroundRepeat:"none",
    backgroundSize:"cover",
    padding:"10px 0 50px 0",
}

const logoStyle={
    margin:"15vh auto 10px auto",
    textAlign:"center",
    color:"#fff",
    fontWeight:"600",
    fontSize:"2.2em",
}

const sloganStyle={
    textAlign:"center",
    color:"#fff",
    fontWeight:"500",
}

const btnStyle = {
    color:"#333",
    border:"solid 1px",
    fontSize:"2em"
}

SearchContainer.propTypes = {

}

export default SearchContainer

