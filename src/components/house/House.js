import React, { Component } from "react";
import { Button } from "react-bootstrap";

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.house_container}>
        <div style={styles.image_container}>
          <img
            style={styles.photo}
            src={require(`../../assets/images/${this.props.data.photo}`)}
          />
        </div>

        <div style={styles.option_container}>
          <p style={styles.booking}>Reservar</p>
        </div>
      </div>
    );
  }
}

const styles = {
  house_container: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    width: 250,
    height: 230,
    borderRadius: 3,
    margin: "5px 10px",
    border: "1px solid #CCC",
  },
  image_container: {
    height: "85%",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  option_container: {
    display: "flex",
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  booking: {
    display: "flex",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    backgroundColor: "aquamarine",
    color: "darkcyan",
    borderRadius: 3,
    fontSize: "small",
    padding: "2px 0px",
    cursor: "pointer",
  },
};

export default House;
