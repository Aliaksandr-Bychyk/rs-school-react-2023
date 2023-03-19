import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import ICardData from '../../interfaces/ICardData';
import './Main.css';

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
    fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=20')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ items: data });
      });
  }

  render() {
    const items = this.state.items as unknown[];
    return (
      <>
        <Header title="Main" />
        <SearchBar />
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
