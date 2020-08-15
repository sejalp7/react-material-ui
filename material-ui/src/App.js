import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Components/Layouts';
import DataStore from './Components/Exercises/DataStore';

export default class App extends Component {
  render() {
    return (
      <Fragment>
          <Header />
          <DataStore />
          <Footer />
      </Fragment>
    )
  }
}
