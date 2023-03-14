import React, { Component } from 'react';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import ICardData from '../interfaces/ICardData';

interface IMainState {
  items: ICardData[];
}

class Main extends Component<object, IMainState> {
  constructor(props: object) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ items: data });
      });
  }

  render() {
    const items = this.state.items as unknown[];
    return (
      <>
        <Header title="Main" />
        <SearchBar />
        <h2>Main</h2>
        <div className="post-container">
          {items.map((el, index) => (
            <Card key={index} data={el as ICardData} />
          ))}
        </div>
      </>
    );
  }
}

export default Main;
