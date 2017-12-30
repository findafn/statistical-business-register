import React from "react";
import Dialog from 'react-dialog'

class DialogModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false
    }
    this.openDialog = this.openDialog.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  openDialog = () => this.setState({ isDialogOpen: true })

  handleClose = () => this.setState({ isDialogOpen: false })

  render() {

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };
    return (
      <div className="container">
        <button type="button" onClick={this.openDialog}>Open Dialog</button>
        {
          this.state.isDialogOpen &&
          <Dialog
            title="Dialog Title"
            modal={true}
            onClose={this.handleClose}
            style={modalStyle}
            buttons={
              [{
                text: "Close",
                onClick: () => this.handleClose()
              }]
            }>
            <h1>Dialog Content</h1>
            <p>More Content. Anything goes here</p>
          </Dialog>
        }
      </div>
    );
  }
}

export default DialogModal;