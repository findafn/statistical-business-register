import React from 'react';
import { Button } from 'reactstrap';

class ButtonHistory extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('id ',this.props.idSBR);
  }
  render() {
    return (
        <Button color="info" onClick={this.handleClick} className="loc-center">Lihat Detail History Perubahan</Button>
    );   
  }

}

export default ButtonHistory;