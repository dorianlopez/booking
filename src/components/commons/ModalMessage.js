import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ModalMessage extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    return (
      <Modal size="sm" show={true}>
        <Modal.Header style={styles.center}>
          {this.props.type === "error" ? (
            <svg
              class="bi bi-x-circle text-danger"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              class="bi bi-check-circle text-success"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </Modal.Header>
        <Modal.Body style={styles.text_center}>{this.props.msj}</Modal.Body>
        <Modal.Footer style={styles.center}>
          <Button
            style={styles.button}
            size="sm"
            variant={this.props.type === "error" ? "danger" : "success"}
            onClick={this.props.close}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const styles = {
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  text_center: {
    textAlign: "center",
  },
  button: {
    width: "30%",
  },
};

export default ModalMessage;
