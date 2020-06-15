import React, { Component } from "react";

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    return (
      <div style={styles.modal}>
        <div style={styles.loader_container}>
          <div style={styles.loader_gif_container}>
            <img
              src={require("../../assets/images/loader.gif")}
              style={styles.gif}
              alt="loader"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  modal: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    Zindex: 1050,
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  loader_container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loader_gif_container: {
    borderRadius: "100px",
  },
  gif: {
    width: 50,
    height: 50,
  },
};

export default Loader;
