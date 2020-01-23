"use strict";

const React = require("react");
const h = React.createElement;

class CatchErrors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error == null) {
      return this.props.children;
    }
    return h("p", null, "An error occurred: ", this.state.error.message);
  }
}

exports.catchErrors = CatchErrors;
