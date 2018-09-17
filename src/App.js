import React, { Component } from "react";
import "./App.css";

// for routing
//import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStartingInfo } from "./actions/index";

// for matierial ui and styling
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';

import "./App.css";

// for redux
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// custom component
import Landing from "./components/Landing/Landing";
import Coach from "./components/Coach/Coach";
import PriceFormForAllPolicies from "./components/Price/PriceFormForAllPolicies";
import Quote from "./components/Quote/Quote";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carriers from "./components/Carriers/Carriers";

import { IndexRoute, Link, Router, Route, browserHistory } from "react-router";
import Helmet from "react-helmet";

import createReactAppBlog from "create-react-app-blog";

class App extends Component {
  componentDidMount() {
    this.props.getStartingInfo();
  }

  render() {
    return (
      <div>
        <Header />
        <div class="App-body">
          <Router history={browserHistory}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/coach" component={Coach} />
            <Route exact path="/quote" component={Quote} />
            <Route exact path="/carriers" component={Carriers} />
            <Route
              exact
              path="/policy/coach"
              render={() => <Redirect to="/coach" />}
            />
            <Route
              exact
              path="/policy/:policycode"
              component={PriceFormForAllPolicies}
            />
          </Router>
        </div>

        <div class="d-flex justify-content-center">
          <div className="blog">
            <Router history={browserHistory}>
              <Route exact path="/blog">
                <div>
                  {createReactAppBlog(React, IndexRoute, Link, Route, Helmet)}
                </div>
              </Route>
            </Router>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getStartingInfo }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(App);
