import React, { Component, useCallback, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";
import { Mutation } from "react-apollo";

import ModalMessage from "../commons/ModalMessage";
import Loader from "../commons/Loader";

const GET_OPTIONS = gql`
  {
    getOptions {
      name
    }
  }
`;

const ADD_TODO = gql`
  mutation createRealState(
    $title: String
    $price: String
    $photos: [Photo]
    $options: [Option]
    $date_disp: [Disponibility]
  ) {
    createRealState(
      title: $title
      price: $price
      photos: $photos
      options: $options
      date_disp: $date_disp
    ) {
      title
    }
  }
`;

class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      title: "",
      price: "",
      photos: [],
      fotos: [],
      options: [],
      date: [],
      cantidad: 0,
      showModal: false,
      showLoader: false,
      ready: false,
    };
  }

  back() {
    this.props.history.goBack();
  }

  deleteImage(index) {
    let arr = this.state.fotos;
    arr.splice(index, 1);

    this.setState({ fotos: arr, cantidad: arr.length });
  }

  addOption(data) {
    let options = this.state.options;
    let option = { name: data };

    options.push(option);
    this.setState(options);
    console.log(options);
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { title, price, options, photos, date } = this.state;

    const OptionsQuery = () => {
      return (
        <Query query={GET_OPTIONS}>
          {({ loading, error, data }) => {
            if (loading) return <Loader />;
            if (error) return <p>{`Error: ${error}`}</p>;

            return data.getOptions.map((data) => (
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label={data.name}
                  onChange={() => this.addOption(data.name)}
                />
              </Form.Group>
            ));
          }}
        </Query>
      );
    };

    const MyDropzone = () => {
      const maxSize = 5242880;
      const [files, setFiles] = useState([]);

      const onDrop = useCallback((acceptedFiles) => {
        let data = this.state.fotos;
        let photos = this.state.photos;
        let cantidad = this.state.cantidad + acceptedFiles.length;
        let file = "";

        this.setState({
          cantidad: cantidad,
        });

        if (this.state.cantidad > 4) {
          this.setState({
            cantidad: 0,
            showLoader: false,
            showModal: true,
            typeModal: "error",
            msjModal:
              "Solo es permitido cargar maximo 4 fotos de tu propiedad.",
          });
        } else {
          setFiles(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );

          acceptedFiles.map((file, index) => {
            file = acceptedFiles[index];
            const reader = new FileReader();

            reader.onload = (event) => {
              Object.assign(file, {
                base64: event.target.result,
              });

              let obj = { url_foto: event.target.result };
              photos.push(obj);
            };

            data.push(file);
            reader.readAsDataURL(file);
          });

          this.setState({
            fotos: data,
            photos,
          });
        }
      }, []);

      const {
        isDragActive,
        getRootProps,
        getInputProps,
        isDragReject,
        acceptedFiles,
        rejectedFiles,
      } = useDropzone({
        onDrop,
        accept: "image/png, image/jpeg",
        minSize: 0,
        maxSize,
      });

      return (
        <div style={styles.fotos_container}>
          <div style={styles.input_drop_fotos} {...getRootProps()}>
            <input {...getInputProps()} />
            {!isDragActive && (
              <p style={styles.label_input_drop_fotos}>
                <span
                  style={styles.icon_label_input_drop_fotos}
                  className="icon_foto"
                ></span>
                Haz clic aquí o arrastra la foto de tu vivienda
              </p>
            )}
            {isDragActive && !isDragReject && (
              <p style={styles.label_input_drop_fotos}>
                Suelta tus fotos ahora!
              </p>
            )}
            {isDragReject && (
              <p style={styles.label_input_drop_fotos}>
                Lo sentimos, solo se permiten archivos tipo png y jpg!
              </p>
            )}
          </div>
        </div>
      );
    };

    return (
      <div style={styles.container}>
        <Row className="show-grid" style={styles.header}>
          <Col xs={12} md={12}>
            <h3 style={styles.title}>
              <svg
                onClick={() => this.back()}
                style={styles.icon}
                class="bi bi-arrow-left-short"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              Nueva Publicación
            </h3>
          </Col>
        </Row>

        <hr />

        <Row style={styles.body_container} className="show-grid">
          <Col xs={6} md={6}>
            <h5 style={styles.subtitle}>Información de la vivienda</h5>

            <Form style={styles.form}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Título:</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Precio:</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.price}
                  onChange={(e) => this.setState({ price: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Disponibilidad (desde-hasta):</Form.Label>
                <div style={styles.disponibilidad_container}>
                  <Form.Control
                    style={styles.date}
                    type="date"
                    placesholder={"Desde"}
                  />
                  <Form.Control style={styles.date} type="date" />
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Adicionales:</Form.Label>
                <div style={styles.options_container}>
                  <OptionsQuery />
                </div>
              </Form.Group>

              <Col style={styles.button_container}>
                <Mutation
                  mutation={ADD_TODO}
                  variables={{ title, price, options, photos, date }}
                >
                  {(addTodo) => (
                    <Button
                      type="submit"
                      style={styles.publish_button}
                      variant="info"
                      onClick={addTodo}
                    >
                      Publicar
                    </Button>
                  )}
                </Mutation>
              </Col>
            </Form>
          </Col>

          <hr />

          <Col xs={6} md={6}>
            <h5 style={styles.subtitle}>Fotos de la vivienda</h5>

            <MyDropzone />

            {this.state.fotos.length > 0 && (
              <div style={styles.image_preview_container}>
                <div style={styles.previews_container}>
                  {this.state.fotos.map((file, index) => (
                    <div key={index}>
                      <span
                        onClick={() => this.deleteImage(index)}
                        style={styles.icon_image_preview}
                      >
                        <svg
                          class="bi bi-x"
                          width="1.3em"
                          height="1.3em"
                          viewBox="0 0 16 16"
                          fill="#FFF"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                          />
                        </svg>
                      </span>
                      <img
                        alt="Preview"
                        key={file.preview}
                        src={file.preview}
                        style={styles.image_preview}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
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
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100%",
    padding: "25px 15px",
    margin: "0px 8%",
  },
  header: {
    display: "flex",
  },
  icon: {
    marginRight: 5,
    cursor: "pointer",
  },
  title: {
    display: "flex",
    alignItems: "center",
    margin: 0,
  },
  body_container: {
    marginTop: 30,
  },
  subtitle: {
    marginBottom: 25,
  },
  form: {
    width: "90%",
  },
  disponibilidad_container: {
    display: "flex",
    justifyContent: "space-between",
  },
  date: {
    width: "47%",
  },
  options_container: {
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
    marginTop: 5,
  },
  fotos_container: {
    width: "90%",
    height: "180px",
    display: "flex",
    marginTop: "35px",
    marginBottom: "10px",
  },
  input_drop_fotos: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    cursor: "pointer",
  },
  label_input_drop_fotos: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    fontSize: 13,
  },
  label_input_drop_fotos_error: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    fontSize: 13,
    color: "#FF3232",
  },
  icon_label_input_drop_fotos: {
    marginBottom: 5,
  },
  image_preview_container: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
  },
  title_preview: {
    margin: 0,
    fontSize: "15px",
    color: "#000",
    textAlign: "center",
  },
  previews_container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  icon_image_preview: {
    position: "relative",
    padding: 5,
    borderRadius: 50,
    fontSize: 10,
    backgroundColor: "#FF3232",
    bottom: 40,
    left: 100,
    cursor: "pointer",
  },
  image_preview: {
    display: "inline",
    width: 80,
    height: 80,
    margin: "8px 10px",
  },
  button_container: {
    display: "flex",
    marginTop: 35,
    padding: 0,
  },
  publish_button: {
    padding: "10px 50px",
  },
};

export default Publish;
