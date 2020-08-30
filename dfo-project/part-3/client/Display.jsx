import React from 'react';
import styled from 'styled-components';

const Album = styled.div`
    border: grey 1px solid;
    padding: 20px;
    font-size: 20px;
    width: 50%;
    margin-left: 25%;
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
      <div>
          {this.props.albums.map((album) => {
              return (
                  <Album>
                      <h1>{album.strAlbum}</h1>
                      <p>{album.strDescriptionEN}</p>
                  
                  </Album>
              )
          })}
      </div>
    );
  }
}

export default Display;