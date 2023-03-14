import React from 'react';
import './SearchBar.css';

interface ISearchBarState {
  value: string;
}

class SearchBar extends React.Component<object, ISearchBarState> {
  constructor(props: object) {
    super(props);
    this.state = {
      value: window.localStorage.getItem('search-value') as string,
    };
  }

  componentWillUnmount(): void {
    window.localStorage.setItem('search-value', this.state.value as string);
  }

  handleChange(value: string): void {
    this.setState({ value: value });
  }

  render() {
    return (
      <div className="search-container">
        <input
          className="search-bar"
          type="search"
          placeholder="Type your request here..."
          value={this.state.value}
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <input className="search-bar-button" type="button" value="SEARCH" />
      </div>
    );
  }
}

export default SearchBar;
