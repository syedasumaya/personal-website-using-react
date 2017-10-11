import React, { Component } from "react";
import ProjectListHome from "./project_list_home";
import PortfolioModal from "./portfolio_modal";

//import { loadMorePortfolio } from '../actions/load_more_portfolio';

import { connect } from "react-redux";
import { fetchPortfolio } from "../actions/load_more_portfolio";
import { deletePortfolio } from "../actions/load_more_portfolio";
import SweetAlert from "sweetalert-react";
import Sweetalertbox from "./sweet_alert_box";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      limit: 12,
      load: "Load More",
      show: false,
      deleteId: null
    };
    this.openPortfolioEditPage = this.openPortfolioEditPage.bind(this);
    this.displayAlert = this.displayAlert.bind(this);
    this.onDeleteBlog = this.onDeleteBlog.bind(this);
    this.onStateChangeForAlert = this.onStateChangeForAlert.bind(this);
  }

  componentWillMount() {
    this.props.fetchPortfolio();
  }

  loadMore() {
    return (
      <button
        type="button"
        className="btn btn-success"
        onClick={() =>
          this.props
            .fetchPortfolio(this.state.start, this.state.limit)
            .then(() => {
              var newstart = this.state.start;
              var newlimit = this.state.limit + 6;
              this.setState({ start: newstart, limit: newlimit });
            })}
      >
        {this.state.load}
      </button>
    );
  }

  projectList() {
    return this.props.portfolio.map(project => {
      return (
        <ProjectListHome
          key={project.project_id}
          project={project}
          onDisplayAlert={this.displayAlert}
        />
      );
    });
  }

  displayAlert(e) {
    this.setState({
      show: e.alertdisplay,
      deleteId: e.pid
    });
  }

  onStateChangeForAlert(display) {
    this.setState({ show: display });
  }

  onDeleteBlog() { console.log('id ',this.state.deleteId);
    this.props.deletePortfolio(this.state.deleteId);
   // this.props.fetchBlog();
  }
  projectModal() {
    return this.props.portfolio.map((project, index) => {
      return (
        <PortfolioModal
          onModalEdit={this.openPortfolioEditPage}
          key={project.project_id}
          keyindex={index}
          project={project}
          props={this.props}
        />
      );
    });
  }

  openPortfolioEditPage(projectid) {
    console.log("portfolio id ", projectid);
  }

  render() {
    var loadMore = "";
    if (this.props.route) {
      var loadMore = this.loadMore(this.props);
    }

    return (
      <div>
        <section id="portfolio">
          <div className="container">
            <h2 className="text-center">Portfolio</h2>
            <hr className="star-primary" />
            <div className="row">{this.projectList()}</div>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12 load-more-center">
                {loadMore}
              </div>
            </div>
          </div>
        </section>
        {this.projectModal()}
        <Sweetalertbox
          state={this.state}
          onDeleteBlog={this.onDeleteBlog}
          onStateChangeForAlert={this.onStateChangeForAlert}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    portfolio: state.portfolio
  };
}

export default connect(mapStateToProps, { fetchPortfolio,deletePortfolio })(Portfolio);
