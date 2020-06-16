import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Loader from "../commons/Loader";

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToDetail(data) {
    this.props.detail(data);
  }

  render() {
    const GET_STATES = gql`
      {
        getRealStates {
          _id
          title
          price
          options {
            name
          }
          photos {
            url_foto
          }
          date_disp {
            date
          }
        }
      }
    `;

    const StatesQuery = () => {
      return (
        <Query query={GET_STATES}>
          {({ loading, error, data }) => {
            if (loading) return <Loader />;
            if (error) return <p>{`Error: ${error}`}</p>;

            console.log(data);

            return data.getRealStates.map((data) => (
              <div key={data._id} style={styles.house_container}>
                <div style={styles.image_container}>
                  <img
                    style={styles.photo}
                    src={require(`../../assets/images/home1.jpg`)}
                  />
                </div>

                <div style={styles.option_container}>
                  <p
                    onClick={() => this.goToDetail(data._id)}
                    style={styles.booking}
                  >
                    Reservar
                  </p>
                </div>
              </div>
            ));
          }}
        </Query>
      );
    };

    return <StatesQuery />;
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
