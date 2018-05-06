import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }


  render() {
    return(
       <div className="search-bar">
        <input
          value = { this.state.searchTerm }

          // This will not change the value of the input at this point.
          // It calls the event handler which in turn chnages the satate and re-renders
          // which gives us the new value.
          onChange = { event =>  this.onInputChange(event.target.value) } />
       </div>
     );
  }

  onInputChange(term) {
    this.setState({ searchTerm: term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
