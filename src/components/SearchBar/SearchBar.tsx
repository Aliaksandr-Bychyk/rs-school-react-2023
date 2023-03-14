import React from 'react';

interface ISearchBarProps {
  id?: string;
}

interface ISearchBarState {
  value: string;
}

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
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
      <div>
        <input
          type="search"
          placeholder="Type your request here..."
          value={this.state.value}
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <input type="button" value="search" />
      </div>
    );
  }
}

export default SearchBar;
