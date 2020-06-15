import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Button,
  Card,
} from "react-bootstrap";

import BackgroundImage from "../../assets/images/background2.jpg";
import ModalMessage from "../commons/ModalMessage";
import Loader from "../commons/Loader";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      registry: false,
      showLoader: false,
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ showLoader: true });

    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.confirmPassword !== ""
    ) {
      if (this.state.password !== this.state.confirmPassword) {
        this.setState({
          showLoader: false,
          showModal: true,
          typeModal: "error",
          msjModal: "Las constraseñas ingresadas no coinciden.",
        });
      } else {
        this.setState({ registry: true });
        let params = {
          name: this.state.user,
          email: this.state.email,
          pass: this.state.password,
          c_pass: this.state.confirmPassword,
        };

        this.setState({
          showLoader: false,
          showModal: true,
          typeModal: "success",
          msjModal: "Se ha registrado exitosamente.",
        });
      }
    } else {
      this.setState({
        showLoader: false,
        showModal: true,
        typeModal: "error",
        msjModal: "Todos los campos son obligatorios.",
      });
    }
  }

  closeModal() {
    if (this.state.registry) {
      this.props.back();
    } else {
      this.setState({ showModal: false });
    }
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${BackgroundImage}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
          }}
        >
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={10} md={5}>
                <div>
                  <Card
                    border="secondary"
                    className="text-center"
                    style={styles.card_margin}
                  >
                    <Card.Body>
                      <Card.Title style={styles.card_title}>
                        <h3>Registro</h3>
                      </Card.Title>
                      <Card.Text>
                        <Form
                          horizontal
                          style={styles.form_container}
                          onSubmit={this.handleClick.bind(this)}
                        >
                          <Form.Group controlId="formGroupEmail">
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                  <svg
                                    class="bi bi-person-fill"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl
                                type="text"
                                size="sm"
                                placeholder="Nombre completo"
                                value={this.state.name}
                                onChange={(e) =>
                                  this.setState({ name: e.target.value })
                                }
                              />
                            </InputGroup>
                          </Form.Group>

                          <Form.Group controlId="formGroupEmail">
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                  <svg
                                    class="bi bi-envelope-fill"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                                    />
                                  </svg>
                                </InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl
                                type="email"
                                size="sm"
                                placeholder="Correo electronico"
                                value={this.state.email}
                                onChange={(e) =>
                                  this.setState({ email: e.target.value })
                                }
                              />
                            </InputGroup>
                          </Form.Group>

                          <Form.Group controlId="formGroupPassword">
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                  <svg
                                    class="bi bi-lock-fill"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="11"
                                      height="9"
                                      x="2.5"
                                      y="7"
                                      rx="2"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      d="M4.5 4a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl
                                size="sm"
                                type="password"
                                placeholder="Contraseña"
                                value={this.state.password}
                                onChange={(e) =>
                                  this.setState({ password: e.target.value })
                                }
                              />
                            </InputGroup>
                          </Form.Group>

                          <Form.Group controlId="formGroupPassword">
                            <InputGroup className="mb-3">
                              <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                  <svg
                                    class="bi bi-lock-fill"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="11"
                                      height="9"
                                      x="2.5"
                                      y="7"
                                      rx="2"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      d="M4.5 4a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl
                                size="sm"
                                type="password"
                                placeholder="Confirme contraseña"
                                value={this.state.confirmPassword}
                                onChange={(e) =>
                                  this.setState({
                                    confirmPassword: e.target.value,
                                  })
                                }
                              />
                            </InputGroup>
                          </Form.Group>

                          <div style={styles.center}>
                            <Button
                              size="sm"
                              style={styles.form_button}
                              variant="info"
                              type="submit"
                            >
                              Registrarme
                            </Button>
                          </div>
                        </Form>

                        <div style={styles.center}>
                          <p
                            onClick={this.props.back}
                            style={styles.recover_link}
                          >
                            Volver
                          </p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>

            {this.state.showModal && (
              <ModalMessage
                type={this.state.typeModal}
                msj={this.state.msjModal}
                close={this.closeModal.bind(this)}
              />
            )}

            {this.state.showLoader && <Loader />}
          </Container>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "cadetblue",
  },
  card_margin: {
    marginTop: 120,
  },
  card_title: {
    margin: "1rem 0px 1.5rem",
  },
  logo: {
    width: "45%",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form_container: {
    margin: "20px 40px 0px 40px",
  },
  form_button: {
    width: "50%",
    marginTop: 15,
  },
  recover_link: {
    margin: "25px 0px 0px 0px",
    fontSize: "small",
    fontStyle: "oblique",
    cursor: "pointer",
  },
  footer: {
    fontSize: "x-small",
    fontStyle: "italic",
  },
};

export default SignUp;
