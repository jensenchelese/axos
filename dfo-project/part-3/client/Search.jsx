import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.div`
    width: 50%;
    margin-left: 25%;
    padding-bottom: 5px;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      value: ''
    }
    this.onChange = (e) => this.setState( { value: e.target.value });
    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.findArtist(this.state.value);
      this.setState({ value: ''})
    }

  }
  render() {
    return (
        <SearchBar>
            <form onSubmit={this.onSubmit} className="search-bar form-inline">
                <input
                style={{
                width: '75%',
                height: '20px',
                marginRight: "10px"
                }}
                type='text'
                value={this.state.value}
                onChange={this.onChange}/>
                <button style={{
                width: '20%',
                height: '27px'
                }}
                className="btn hidden-sm-down">
                <span className="glyphicon glyphicon-search"></span> Search
                </button>
            </form>
        </SearchBar>
    );
  }
}

export default Search;