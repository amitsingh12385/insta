import React, { Component } from "react";
import { connect } from "react-redux";
import Filters from "./InstaDriverComponents/Filters";
import MessagesMain from "./InstaDriverComponents/MessagesMain";
import Navbar from "./InstaDriverComponents/Navbar";
import Plus from "./shared/icons/Plus";

class InstaDriverApp extends Component {
  state = {
    message: this.props.messages ? this.props.messages[0] : null,
  };
  onCardSelected = (index) => {
    this.setState(() => ({ message: this.props.messages[index] }));
  };
  render() {
    return (
      <div className="section-main">
        <div className="major">
          <div className="major__navbar">
            <Navbar />
          </div>
          <div className="major__filters">
            <Filters />
          </div>
          <div className="major__cta-1">
            <button
              className="btn btn--secondary"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Plus />
              <span>Start a new chat</span>
            </button>
          </div>
          <div>
            <MessagesMain
              message={this.state.message}
              messages={this.props.messages}
              onCardSelected={this.onCardSelected}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ messages: state.messages });

export default connect(mapStateToProps)(InstaDriverApp);
