import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Components/Layouts';
import DataStore from './Components/Exercises/DataStore';
import { genre, genreDetails } from './store';

export default class App extends Component {
  state = {
    genreDetails
  }

  getGenreDeatilsbyName() {
    return Object.entries(this.state.genreDetails.reduce((genreDetails,  genreDetail) => {
      const { genre } = genreDetail;
      genreDetails[genre] = genreDetails[genre] ? [...genreDetails[genre], genreDetail] : [genreDetail];
      return genreDetails;
    }, {})
    )}

    handleGenreSelect = category => {
      this.setState({
        category
      })
    }
  
  render() {
    const genreDetail = this.getGenreDeatilsbyName();
    const category = this.state;
    return (
      <Fragment>
          <Header />
          <DataStore genreDetail = { genreDetail }/>
          <Footer 
          category= { category }
          onSelect = { this.handleGenreSelect }
          genre={genre}/>
      </Fragment>
    )
  }
}
