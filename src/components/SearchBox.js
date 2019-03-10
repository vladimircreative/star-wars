import React, { Component } from "react";
import { connect } from "react-redux";
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
    })
  }

class SearchBoxHandler extends Component {
    render() {        
        const handleClick = (e) => {
            e.preventDefault();
            this.props.fetchPeople( e.target[0].value );
            e.target[0].value = "";
        }
        return (
            <div className="searchBox">
                <form onSubmit={handleClick}>                   
                    <input type="text" placeholder="enter" />                                        
                    <input type="submit" value="Submit" />
                </form>
                        
            </div>
        )
    }
    
}

const SearchBox = connect(mapStateToProps, mapDispatchToProps)(SearchBoxHandler);

export default SearchBox