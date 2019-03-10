import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import Scroll from "../components/Scroll";
import CardArray from "../containers/CardArray";
import SearchBox from "../components/SearchBox";

class AppHandler extends Component {
  constructor(){
      super();
      this.state = {
      }
  }

  render() {
    return (
        <div className="App">
          <h1>STAR WARS</h1>                 
          <SearchBox />        
          <Scroll>
                <CardArray />
          </Scroll>  
        </div>
    );
  }
}


// state to props
const mapStateToProps = (state) => {
  return({
      word: state.word,
  })
}

export const App = connect(
  mapStateToProps,
  // mapDispatchToProps,    
)(AppHandler);

export default App;
