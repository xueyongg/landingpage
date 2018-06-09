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
import TopMenu from "./components/menu";
import Home from "./home";
import "../static/styles/main.css";
import Layout from "./utils/layout";

export default class Index extends Component {
  state = {};

  onClickUp = () => {};

  onClickDown = () => {};

  render() {
    return (
      <Layout>
        <div>
          <Head>
            <title>{"Xueyong's Site"}</title>
            <meta name="description" content="Personal site" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width,, maximum-scale=1"
              key="viewport"
            />
            <meta
              name="keywords"
              content="HTML,CSS,XML,JavaScript,Full stack, React, Node, Web development, Website building"
            />
            <meta name="author" content="Phua Xue Yong" />
          </Head>
          <TopMenu currentPage="home" />
          <Home />
          {/* <span style={{ position: "fixed", right: "2em", bottom: "5em" }}>
          <Button icon onClick={this.onClickUp}>
            <Icon name="chevron up" />
          </Button>
        </span>
        <span style={{ position: "fixed", right: "2em", bottom: "2em" }}>
          <Button icon onClick={this.onClickDown}>
            <Icon name="chevron down" />
          </Button>
        </span> */}
        </div>
      </Layout>
    );
  }
}
