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
          photos: [
            {
              url: "home1.jpg",
            },
            {
              url: "home2.jpg",
            },
          ],
          photo: "home1.jpg",
          price: "$100.000",
          data: "Wifi, se permiten mascotas.",
        },
        {
          title: "Casa 2",
          photo: "home2.jpg",
          price: "$250.000",
          data: "Wifi, se permiten mascotas.",
        },
        {
          title: "Casa 3",
          photo: "home3.jpg",
          price: "$80.000",
          data: "Wifi, se permiten mascotas.",
        },
        {
          title: "Casa 4",
          photo: "home1.jpg",
          price: "$130.000",
          data: "Wifi, se permiten mascotas.",
        },
        {
          title: "Casa 5",
          photo: "home2.jpg",
          price: "300.000",
          data: "Wifi, se permiten mascotas.",
        },
        {
          title: "Casa 3",
          photo: "home3.jpg",
          price: "$80.000",
          data: "Wifi, se permiten mascotas.",
        },
        {
          title: "Casa 4",
          photo: "home1.jpg",
          price: "$130.000",
          data: "Wifi, se permiten mascotas.",
        },
        {
          title: "Casa 5",
          photo: "home2.jpg",
          price: "300.000",
          data: "Wifi, se permiten mascotas.",
        },
        {
          title: "Casa 1",
          photo: "home1.jpg",
          price: "$100.000",
          data: "Wifi, se permiten mascotas.",
        },
        {
          title: "Casa 2",
          photo: "home2.jpg",
          price: "$250.000",
          data: "Wifi, se permiten mascotas.",
        },
        {
          title: "Casa 3",
          photo: "home3.jpg",
          price: "$80.000",
          data: "Wifi, se permiten mascotas.",
        },
        {
          title: "Casa 4",
          photo: "home1.jpg",
          price: "$130.000",
          data: "Wifi, se permiten mascotas.",
        },
      ],
    };
  }

  goToPublish() {
    this.props.history.push({
      pathname: "/publish",
    });
  }

  goToDetail(info) {
    console.log(info);
    // let fecha = new Date();
    // let data = {
    //   item: info,
    // };

    // localStorage.setItem(
    //   `DP_${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`,
    //   JSON.stringify(data)
    // );

    // this.props.history.push({
    //   pathname: "/booking",
    //   state: data,
    // });
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
            <House detail={this.goToDetail.bind(this)} />
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
