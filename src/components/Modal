class Modal extends React.Component {
    constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
       <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Abous Us
        </Button>
      <Modal show={this.state.show} onHide={this.handleClose}
        bsSize="small"
        aria-labelledby="contained-modal-title-sm"
      >
      <Modal.Header closeButton>
      	<Modal.Title id="contained-modal-title-sm">About us</Modal.Title>
  	</Modal.Header>
  	<Modal.Body>
  		<p>Codeuino-An Open Source Non-Profit Organisation, founded by Jaskirat Singh an Open Source maniac. Codeuino develops various Open Source Softwares that tends to benefit all the people around. The organisation acts as a guiding hand in the process and provides resources and infrastructure.</p>
		</Modal.Body>
		</Modal>
		);
	}
}