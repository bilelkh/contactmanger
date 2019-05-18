import React, { Component } from "react";
import { Consumer } from "../../context";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = (dispatch,e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
  };

  static defaultProps = {
    name: "Fred Smith",
    email: "fred@yahoo.fr",
    phone: "777-777-777"
  };
  render() {
    const { name, email, phone } = this.props;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 mt-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label className="mt-1" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name..."
                      className="form-control form-control-lg"
                      defaultValue={name}
                      ref={this.nameInput}
                    />

                    <label className="mt-1" htmlFor="name">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email..."
                      className="form-control form-control-lg"
                      defaultValue={email}
                      ref={this.emailInput}
                    />

                    <label className="mt-1" htmlFor="name">
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter Phone..."
                      className="form-control form-control-lg"
                      defaultValue={phone}
                      ref={this.phoneInput}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-dark text-uppercase"
                    value="Add Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
