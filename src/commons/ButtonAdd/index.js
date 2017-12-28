import React from 'react';
import { Button } from 'reactstrap';

class ButtonAdd extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('id ',this.props.idSBR);
  }
  render() {
    return (
        <Button color="info" onClick={this.handleClick} className="detail-btn">Tambah</Button>
    );   
  }

}

export default ButtonAdd;