import React, { Component } from "react";
import {
  Modal,
  Header,
  Button,
  List,
  Icon,
  Input,
  Menu,
  Segment,
  Image
} from "semantic-ui-react";
import Link from "next/link";
import Head from "next/head";
import { TopMenu } from "./components/menu";

import { Home } from "./home";
// import '../static/semantic/out/semantic.min.css';

export default class extends Component {
  state = {};

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Head>
          <title>My own page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <TopMenu />
        <Home />
      </div>
    );
  }
}
