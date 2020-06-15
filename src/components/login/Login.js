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
import { DATA_SESSION } from "../../config/global";
import { wrap, getTag, unwrap } from "../../utils/Utils";

import ModalMessage from "../commons/ModalMessage";
import Loader from "../commons/Loader";
import Principal from "../principal/Principal";
import SignUp from "../signup/SignUp";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
      is_loggin: false,
      showSignUp: false,
      showLoader: false,
    };

    this.endSession = this.endSession.bind(this);
  }

  componentDidMount() {
    let ss = this.validateSession();
    this.setState({ is_loggin: ss });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ showLoader: true });

    if (this.state.user !== "" && this.state.pass !== "") {
      let params = {
        us_log: this.state.user,
        secret: this.state.pass,
      };
      console.log("Entra");

      let tag = getTag();
      let dev_session = wrap(JSON.stringify(params), tag);
      localStorage.setItem(DATA_SESSION, dev_session);

      console.log("TAG: ", tag);
      let ss = this.validateSession();
    } else {
      this.setState({
        showLoader: false,
        showModal: true,
        typeModal: "error",
        msjModal: "Todos los campos son obligatorios.",
      });
    }
  }

  validateSession() {
    console.log("Entra validate session");
    let session = localStorage.getItem(DATA_SESSION);
    let obj = [];

    if (session !== undefined && session !== null) {
      try {
        let rsp = unwrap(session, getTag());
        //obj = rsp.RSP;
        obj = rsp;

        if (obj !== undefined) {
          this.setState({
            showLoader: false,
            is_loggin: true,
          });
        } else {
          this.setState({ showLoader: false, is_loggin: false });
        }
      } catch (error) {
        this.endSession();
      }
    }
    return session !== undefined && session !== null;
  }

  endSession() {
    localStorage.removeItem(DATA_SESSION);
    let ss = this.validateSession();
    this.setState({ is_loggin: ss });
    window.location.href = "/";
  }

  hideSignUpForm() {
    this.setState({ showSignUp: false });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        {!this.state.is_loggin ? (
          this.state.showSignUp ? (
            <SignUp back={this.hideSignUpForm.bind(this)} />
          ) : (
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
                            <h3>Booking</h3>
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
                                    placeholder="Usuario"
                                    value={this.state.user}
                                    onChange={(e) =>
                                      this.setState({ user: e.target.value })
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
                                    value={this.state.pass}
                                    onChange={(e) =>
                                      this.setState({ pass: e.target.value })
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
                                  Ingresar
                                </Button>
                              </div>
                            </Form>

                            <div style={styles.center}>
                              <p
                                onClick={() =>
                                  this.setState({ showSignUp: true })
                                }
                                style={styles.recover_link}
                              >
                                Registrarme
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
          )
        ) : (
          <Principal
            endSession={this.endSession.bind(this)}
            menus={this.state.menus}
          />
        )}
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

export default Login;
