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

export default class extends Component {
  state = {};

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Head>
          <link
            rel="shortcut icon"
            href="/static/images/favicon/favicon.ico?v=2"
          />
          <title>Xueyong's Site</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <TopMenu currentPage="home" />
        <Home />
      </div>
    );
  }
}
