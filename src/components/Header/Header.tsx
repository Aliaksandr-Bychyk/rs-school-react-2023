import React from 'react';

interface IHeaderProps {
  title: string;
}

class Header extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <>
        <h1>{this.props.title}</h1>
      </>
    );
  }
}

export default Header;
