import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { about: "", readmoreaboutbtn: "false" };

    this.getReadmorebtn = this.getReadmorebtn.bind(this);

    axios.get("http://portfolio.dev/api/example/about").then(
      function(response) {
        this.setState({ about: response.data });
      }.bind(this)
    );
  }

  componentWillMount() {
    this.setState({ readmoreaboutbtn: this.props.readmoreaboutbtn });
  }

  getReadmorebtn() {
    return (
    <Link className="btn btn-lg btn-outline btn-outline-disl" to="/about">
      Read More About Me
    </Link>
    );
  }

  render() {
    return (
      <section className="success about-disl" id="about">
        <div className="container">
          <h2 className="text-center">{this.state.about.about_title}</h2>
          <hr className="star-primary" />
          <div className="row">
            <div className="col-lg-12">
              {this.state.about.about_description}
            </div>

            <div className="col-lg-8 mx-auto text-center">
              {(this.props.readmoreaboutbtn == "true") ? this.getReadmorebtn():''}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
