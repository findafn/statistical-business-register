import React from 'react';
import { Button } from 'reactstrap';

class ButtonSave extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('id ',this.props.idSBR);
  }
  render() {
    return (
        <Button color="info" disabled onClick={this.handleClick} className="detail-btn">Simpan</Button>
    );   
  }

}

export default ButtonSave;