import React, { Component } from "react";
import propTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 mt-2">
              <h4>
                {name}{" "}
                <i
                  onClick={
                    (this.onShowClick = () =>
                      this.setState({
                        showContactInfo: !this.state.showContactInfo
                      }))
                  }
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-trash-alt float-right "
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                <i
                  className="fas fa-edit float-right mr-2"
                  style={{ cursor: "pointer", color: "red" }}>
                </i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item ">Email:{email}</li>
                  <li className="list-group-item ">Phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: propTypes.object.isRequired
};

export default Contact;
