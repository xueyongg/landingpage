import React, { Component } from "react";
import {
  Modal,
  Header,
  Segment,
  Grid,
  Image,
  Button,
  List,
  Icon,
  Input,
  Menu,
  Container
} from "semantic-ui-react";
import Link from "next/link";
import { TopMenu } from "./components/menu";
import { BottomMenu } from "./components/bottom_menu";
import { About_instagram } from "./components/about/about_instagram";
import { About_photos } from "./components/about/about_photos";
import { About_resume } from "./components/about/about_resume";
import { About_funfact } from "./components/about/about_funfact";
import { About_understand } from "./components/about/about_whoiam";

export default class About extends Component {
  static async getInitialProps({ pathname, query }) {
    return { query };
  }

  render() {
    let mobile = false;
    return (
      <div>
        <style>{`
          html, body {
            background: #fff;
          }
        `}</style>
        <TopMenu />

        <Image
          src="/static/images/about.jpg"
          fluid
          bordered
          style={{
            opacity: "0.5",
            maxHeight: 750
          }}
        />
        <Container
          text
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Header
            as="h4"
            textAlign="center"
            style={{ textTransform: "uppercase" }}
          >
            Discover more about me and my personhood
          </Header>
          <Header
            as="h1"
            textAlign="center"
            style={{
              textTransform: "uppercase",
              fontSize: 52,
              fontWight: 700
            }}
          >
            About me
          </Header>
        </Container>

        {/* Fun fact about myself*/}
        <About_funfact />

        <div
          style={{
            padding: "150 10 10 100",
            border: 1
          }}
        >
          <Container
            style={{
              marginTop: 150,
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 80,
              border: 1
            }}
          />
        </div>
        {/* Some photos of Canada and nature */}
        <About_photos />

        {/* Understand who I am as a person */}
        <About_understand />

        {/* Instagram Feed */}
        <About_instagram />

        {/* Resume segment */}
        <About_resume />

        <BottomMenu />
      </div>
    );
  }
}
