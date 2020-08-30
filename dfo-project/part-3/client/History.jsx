import React from 'react';
import styled from 'styled-components';

const Previous = styled.div`
    font-family: Arial;
    border: #bfbdbd 1px solid;
    margin: 10px;
    padding: 5px;
    text-align: center;
    background-color: white;
`;
const Artist = styled.div`
    border: #bfbdbd 1px solid;
    padding: 5px;
    margin: 10px;
    font-size: 20px;
    width: 20%;
    display: inline-block;
   `;

class History extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      console.log('something', this.props.artists)
    return (
      <Previous>
          <h2>Previous Searches</h2>
          <p>Select name to view Albums</p>
          {this.props.artists.map((artist) => {
              return (
                  <Artist>
                      <p onClick={() => {this.props.findArtist(artist)}}>{artist}</p>
                  </Artist>
              )
          })}
      </Previous>
    );
  }
}

export default History;