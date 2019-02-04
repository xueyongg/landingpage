import React from "react";
import { initGA, logPageView } from "./analytics";
import Head from "next/head";
import PropTypes from "prop-types";

export default class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return (
      <div>
        <Head>
          <meta content="30" http-equiv="Expires" />
        </Head>
        {this.props.children}
      </div>
    );
  }
}

Layout.proptypes = {
  children: PropTypes.children
};
