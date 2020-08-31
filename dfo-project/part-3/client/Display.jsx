//This file displays the Artist's Album list when the user clicks on the Artists name

import React from 'react';
import styled from 'styled-components';

const List = styled.div`
    margin-left: 8%;
`;
const Album = styled.div`
    border: grey 1px solid;
    padding: 10px;
    font-size: 20px;
    width: 45%;
    border: #bfbdbd 1px solid;
    background-color: white;
    margin: 5px;
    display: inline-block;
   `;
const Title = styled.h1`
    font-size: 30px;
    background-color: #d7f5fa;
    color: black;
    margin-top: 0px;
    margin-left: -10px;
    width: 100%;
    padding: 10px;
`;
const Description = styled.p`
    font-size: 10px;
    color: grey;
`;


class Display extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      value: ''
    }
    this.onChange = (e) => this.setState( { value: e.target.value });
    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.findMovie(this.state.value);
      this.setState({ value: ''})
    }

  }
  render() {
    return (
      <List>
          {this.props.albums.map((album) => {
              return (
                  <Album>
                      <Title>{album.strAlbum}</Title>
                      <Description>{album.strGenre}</Description>
                  </Album>
              )
          })}
      </List>
    );
  }
}

export default Display;