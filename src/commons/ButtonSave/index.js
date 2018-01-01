import React from 'react';
import { Button } from 'reactstrap';

class ButtonSave extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClickSave();
  }
  render() {
    return (
        <Button color="info"  disabled={!this.props.enable} onClick={this.handleClick} className="detail-btn">Simpan</Button>
    );   
  }

}

export default ButtonSave;