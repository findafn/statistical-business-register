// import React from 'react';
// import {
//   Modal,
//   ModalHeader,
//   ModalTitle,
//   ModalClose,
//   ModalBody,
//   ModalFooter
// } from 'react-modal-bootstrap';


// export default class View extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false
//     };
//   }

//   openModal = () => {
//     this.setState({
//       isOpen: true
//     });
//   };

//   hideModal = () => {
//     this.setState({
//       isOpen: false
//     });
//   };

//   render() {
//     return (
//       <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
//         <ModalHeader>
//           <ModalClose onClick={this.hideModal} />
//           <ModalTitle>Modal title</ModalTitle>
//         </ModalHeader>
//         <ModalBody>
//           <p>Ab ea ipsam iure perferendis! Ad debitis dolore excepturi
//             explicabo hic incidunt placeat quasi repellendus soluta,
//             vero. Autem delectus est laborum minus modi molestias
//             natus provident, quidem rerum sint, voluptas!</p>
//         </ModalBody>
//         <ModalFooter>
//           <button className='btn btn-default' onClick={this.hideModal}>
//             Close
//           </button>
//           <button className='btn btn-primary'>
//             Save changes
//           </button>
//         </ModalFooter>
//       </Modal>
//     );
//   }
// }


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Modal from 'react-responsive-modal';
// import { Input } from 'reactstrap';

// class View extends React.Component {
//   state = {
//     open: false,
//   };

//   onOpenModal = () => {
//     this.setState({ open: true });
//   };

//   onCloseModal = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { open } = this.state;
//     return (
//       <div className="example">
//         <button className="btn btn-action" onClick={this.onOpenModal}>
//           Buat Snapshot
//         </button>{' '}
//         <a
//           href="https://github.com/pradel/react-responsive-modal/blob/master/docs/src/examples/css.js"
//           target="_blank"
//         >
//         </a>
//         <div className="dialog-bx">
//           <Modal open={open} onClose={this.onCloseModal} little>
//             <h2>Buat Snapshot</h2>
//             <p>Masukkan nama Snapshot:</p>
//             <div className="col-xs-8">
//               <Input placeholder="Nama Snapshot" type="text" />
//             </div>
//             <p>Tanggal snapshot: </p><br />
//             <p>Creator </p><br />
//           </Modal>
//         </div>
//       </div>
//     );
//   }
// }

// export default View;







import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

class View extends React.PureComponent {
  render() {
    return (
      <Modal trigger={<Button>Buat Snapshot</Button>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}


export default View;