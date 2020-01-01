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
            <meta
              content="Joshua's a web developer that strives to produce top quality work in everything that he do. Come and take a look."
              name="description"
            />
            <meta
              content="initial-scale=1.0, width=device-width,, maximum-scale=1"
              key="viewport"
              name="viewport"
            />
            <meta
              content="HTML,CSS,XML,JavaScript,Full stack, React, Vue, Software engineer, Node, Web development, Website building"
              name="keywords"
            />
            <meta
              content="https://phuaxueyong.com/static/images/about/phone/six.JPG"
              property="og:image"
            />
            <meta content="Phua Xue Yong" name="author" />
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
