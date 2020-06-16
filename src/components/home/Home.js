import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import House from "../house/House";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  goToPublish() {
    this.props.history.push({
      pathname: "/publish",
    });
  }

  goToDetail(info) {
    let fecha = new Date();
    let data = {
      item: info,
    };

    localStorage.setItem(
      `DP_${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`,
      JSON.stringify(data)
    );

    this.props.history.push({
      pathname: "/booking",
      state: data,
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
