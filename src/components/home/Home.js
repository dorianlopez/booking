import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

import House from "../house/House";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: [
        {
          title: "Casa 1",
          photo: "home1.jpg",
          price: "$100.000",
        },
        {
          title: "Casa 2",
          photo: "home2.jpg",
          price: "$250.000",
        },
        {
          title: "Casa 3",
          photo: "home3.jpg",
          price: "$80.000",
        },
        {
          title: "Casa 4",
          photo: "home1.jpg",
          price: "$130.000",
        },
        {
          title: "Casa 5",
          photo: "home2.jpg",
          price: "300.000",
        },
        {
          title: "Casa 3",
          photo: "home3.jpg",
          price: "$80.000",
        },
        {
          title: "Casa 4",
          photo: "home1.jpg",
          price: "$130.000",
        },
        {
          title: "Casa 5",
          photo: "home2.jpg",
          price: "300.000",
        },
        {
          title: "Casa 1",
          photo: "home1.jpg",
          price: "$100.000",
        },
        {
          title: "Casa 2",
          photo: "home2.jpg",
          price: "$250.000",
        },
        {
          title: "Casa 3",
          photo: "home3.jpg",
          price: "$80.000",
        },
        {
          title: "Casa 4",
          photo: "home1.jpg",
          price: "$130.000",
        },
      ],
    };
  }

  goToPublish() {
    this.props.history.push({
      pathname: "/publish",
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <Row className="show-grid">
          <Col style={styles.header} xs={12} md={12}>
            <div style={styles.title_container}>
              <h3>Bienvenidos</h3>
            </div>
            <div style={styles.button_container}>
              <Button onClick={() => this.goToPublish()} variant="info">
                Publicar
              </Button>
            </div>
          </Col>
        </Row>

        <hr />

        <Row className="show-grid">
          <Col xs={12} md={12} style={styles.houses_container}>
            {this.state.houses.map((item, index) => (
              <House data={item} />
            ))}
          </Col>
        </Row>
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
    width: "100%",
  },
  title_container: {
    width: "80%",
  },
  button_container: {
    width: "20%",
    display: "flex",
    justifyContent: "flex-end",
  },
  houses_container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 30,
  },
};

export default Home;
