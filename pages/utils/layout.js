import React from "react";
import { initGA, logPageView } from "./analytics";
import Head from "next/head";

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
          <meta http-equiv="Expires" content="30" />
        </Head>
        {this.props.children}
      </div>
    );
  }
}
