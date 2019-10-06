import React, { Component } from 'react'
import ItemsCarousel from 'react-items-carousel'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// Components
import LocationStep from './Location'
import BedStep from './Beds'
import BudgetStep from './Budget'
import InterestStep from './Intrests'
import StepsNavigator from './StepNavigator'

class SearchContainer extends Component {

    state = {
        activeItemIndex:-1
    }

    setActiveItemIndex = (activeItemIndex) =>{
        this.setState({ activeItemIndex })
    }
    render(){
        const chevronWidth = "10";
        return (
            <div style={containerStyle}>
                <h1 style={logoStyle}>House Hunt</h1>
                <p style={sloganStyle}>Find Your Next Home</p>
                <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionName="slide"
                    component="div"    
                >
                    <div className="search-carousel" style={{margin:"auto", maxWidth:"500px", paddingLeft: `${chevronWidth}`}}>
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
                </ReactCSSTransitionGroup>
                <StepsNavigator  
                    active={this.state.activeItemIndex}
                    updateActiveStep={this.setActiveItemIndex} 
                />
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
    margin:"-30px auto 0px auto",
    height:"110vh",
    minHeight:"600px",
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

