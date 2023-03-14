import React from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';

class Main extends React.Component {
  render() {
    return (
      <>
        <Header title="Main" />
        <SearchBar />
        <h2>Main</h2>
      </>
    );
  }
}

export default Main;
