import cards from '../../data/cards';
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
      items: cards,
    };
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
