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
        const chevronWidth = "300";
        return (
            <div style={containerStyle}>
                <h1 style={logoStyle}>House Hunt</h1>
                <p style={sloganStyle}>Find Your Next Home</p>
                <div style={{ padding: `0 ${chevronWidth}` }}>
                    <ItemsCarousel
                        requestToChangeActive={this.setActiveItemIndex}
                        activeItemIndex={this.state.activeItemIndex}
                        numberOfCards={1}
                        slidesToScroll={1}
                        gutter={20}
                        leftChevron={<button>{'<'}</button>}
                        rightChevron={<button>{'>'}</button>}
                        outsideChevron
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
    display:"block",
    width:"80%",
    margin:"50px auto 20px auto",
    fontSize:"1.1em",
    padding:"10.5px",
    border:"none",
    backgroundColor:"#49306B",
    color:"#fff",
}

SearchContainer.propTypes = {

}

export default SearchContainer

