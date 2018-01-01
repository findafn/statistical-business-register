import React from 'react';
import { Button } from 'reactstrap';

class ButtonChange extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onClickChange = this.onClickChange.bind(this);
  }
  onClickChange() {
    this.props.onClickChange();
  }
  render() {
    return (
        <Button color="info" disabled={this.props.enable} onClick={this.onClickChange} className="detail-btn">Ubah</Button>
    );   
  }
}

export default ButtonChange;