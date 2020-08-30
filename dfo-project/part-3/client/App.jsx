import React from 'react';
import Search from './Search.jsx';
import Display from './Display.jsx';
import History from './History.jsx';
import $ from 'jquery';
import styled from 'styled-components';

const Back = styled.div`
    font-family: Arial;
   `;
const Header = styled.div`
    background-color: #4a4948;
    margin-left: -1%;
    margin-right: -1%;
    color: white;
    text-align: center;
   `;
const Title = styled.h1`
   padding-top: 20px;
  `;

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
        searches: [],
        artist: [],
        view: 'main'
    }
    this.findArtist = this.findArtist.bind(this)
    this.addArtist = this.addArtist.bind(this)
  }
  addArtist(name) {
    this.state.searches.push(name)
    this.setState({searches: this.state.searches})
    console.log(this.state.searches)
  }
  findArtist (name) {
    $.ajax({
        method: 'GET',
        url: 'https://theaudiodb.com/api/v1/json/1/searchalbum.php?s=' + name,
        success: function(result) {
          console.log(result)
          this.setState({artist: result.album})
        }.bind(this)
      }) 
      this.setState({view: 'display'})
  }
  render() {
    if (this.state.view === 'main') {
        return (
            <Back>
                <Header>
                    <Title>ARTIST SEARCH</Title>
                    <p>Search Artist by Name</p>
                    <Search findArtist={this.addArtist}/>
                </Header>
              <History artists={this.state.searches} findArtist={this.findArtist}/>
            </Back>
          );
    } else {
        return (
            <Back>
                <Header>
                    <Title>Artist Search</Title>
                    <Search findArtist={this.addArtist}/>
                </Header>
              <Display albums={this.state.artist}/>
            </Back>
          );
    }
  }
};

export default App;