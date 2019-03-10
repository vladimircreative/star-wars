import React from "react";
import { connect } from "react-redux";
import { Component } from "react";
import Card from "./Card"
import "./CardArray.css"

import { fetchPeople } from "../actions/index";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPeople: word => dispatch(fetchPeople(word)),
    };
}

// state to props
const mapStateToProps = (state) => {
    return({
        word: state.word,
        cards: state.cards,
        loading: state.loading,
    })
}

// Presentational
class CardArrayHandler extends Component {
    componentDidMount() {
        this.props.fetchPeople(this.props.word);
    }

    render() {
        console.log("props of card list", this.props);
        if (this.props.loading) {return <h1>Loading</h1>}
        else return (
            <div className="cards">   
                {this.props.cards.map((card, i) => {return (<Card data={card} key = {i} />);})}
            </div>
        )
    }     
}



export const CardArray = connect(
    mapStateToProps,
    mapDispatchToProps,    
)(CardArrayHandler);

export default CardArray;


                    