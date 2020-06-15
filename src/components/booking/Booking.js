import React, { Component, useCallback, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import ModalMessage from "../commons/ModalMessage";
import Loader from "../commons/Loader";

class Booking extends Component {
  constructor(props) {
    super(props);

    let info = this.props.location.state;

    if (info == undefined) {
      let fecha = new Date();
      let data_storage = localStorage.getItem(
        `DP_${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`
      );

      info = JSON.parse(data_storage);
    }

    this.state = {
      data: info.item,
      idx_selected: 0,
      url_img: info.item.photos[0].url,
      showModal: false,
      showLoader: false,
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

  selectedFoto(item, idx) {
    this.setState({
      idx_selected: idx,
      url_img: item.url,
    });
  }

  render() {
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
              Reservar
            </h3>
          </Col>
        </Row>

        <hr />

        <Row style={styles.body_container} className="show-grid">
          <Col xs={6} md={6}>
            <h5 style={styles.subtitle}>Información de la vivienda</h5>

            <div style={styles.info_container}>
              <div style={styles.info_item_container}>
                <label style={styles.label}>Título de la vivienda: </label>
                <label style={styles.text}>{this.state.data.title}</label>
              </div>

              <div style={styles.info_item_container}>
                <label style={styles.label}>Valor de la vivienda: </label>
                <label style={styles.text}>{this.state.data.price}</label>
              </div>

              <div style={styles.info_item_container}>
                <label style={styles.label}>
                  Datos adicionales de la vivienda:{" "}
                </label>
                <label style={styles.text}>{this.state.data.data}</label>
              </div>
            </div>

            <hr />

            <h5 style={styles.subtitle}>Fecha de la reserva (desde-hasta)</h5>

            <Form style={styles.form}>
              <Form.Group controlId="formBasicPassword">
                <div style={styles.disponibilidad_container}>
                  <Form.Control
                    style={styles.date}
                    type="date"
                    placesholder={"Desde"}
                  />
                  <Form.Control style={styles.date} type="date" />
                </div>
              </Form.Group>

              <Button style={styles.publish_button} variant="info">
                Reservar
              </Button>
            </Form>
          </Col>
          <Col xs={6} md={6}>
            <h5 style={styles.subtitle}>Fotos de la vivienda</h5>

            <div style={styles.image_container}>
              <img
                style={styles.photo}
                src={require(`../../assets/images/${this.state.url_img}`)}
              />
            </div>

            <div style={styles.view_buttons_slider}>
              <div style={styles.view_container_buttons}>
                {this.state.data.photos.map((item, index) => (
                  <div
                    key={index}
                    style={styles.view_btn_slider}
                    onClick={() => {
                      this.selectedFoto(item, index);
                    }}
                  >
                    {this.state.idx_selected == index ? (
                      <div style={styles.btn_slider_selected}></div>
                    ) : (
                      <div style={styles.btn_slider}></div>
                    )}
                  </div>
                ))}
              </div>
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
  info_container: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
  },
  info_item_container: {
    display: "flex",
  },
  label: {
    marginRight: 5,
  },
  text: {
    fontWeight: "bold",
  },
  image_container: {
    width: "100%",
    height: 300,
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  view_buttons_slider: {
    height: "7%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
  },
  view_container_buttons: {
    display: "flex",
    flexDirection: "row",
  },
  view_btn_slider: {
    height: "100%",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn_slider: {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    backgroundColor: "#E5E5E5",
    cursor: "pointer",
  },
  btn_slider_selected: {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    backgroundColor: "#FF3232",
    cursor: "pointer",
  },
  publish_button: {
    padding: "10px 50px",
    marginTop: 20,
  },
};

export default Booking;
