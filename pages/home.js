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
  Container,
  Image, Message,
  Responsive
} from "semantic-ui-react";
import Link from "next/link";
import { TopMenu } from "./components/menu";
import { Home_projects } from "./components/home/home_projects";
import { Home_about } from "./components/home/home-about";
import { BottomMenu } from "./components/bottom_menu";
import { Todo } from "./components/todo";

const moment = require("moment");

export class Home extends Component {
  static async getInitialProps({ query }) {
    // console.log(query);
    return true;
  }
  state = {};
  handleOnUpdate() {}

  render() {
    const { activeItem } = this.state;
    const mobile = false;
    const HomepageHeading = ({ mobile }) => (
      <Container text>
        <Header
          as="h1"
          content="Imagine-a-Company"
          inverted
          style={{
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: mobile ? "1.5em" : "3em"
          }}
        />
        <Header
          as="h2"
          content="Do whatever you want when you want to."
          inverted
          style={{
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
            marginTop: mobile ? "0.5em" : "1.5em"
          }}
        />
        <Button primary size="huge">
          Get Started
          <Icon name="right arrow" />
        </Button>
      </Container>
    );

    return (
      <div>
        <Responsive onUpdate={this.handleOnUpdate}>
          {/* <HomepageHeading /> */}
          <Image
            src="/static/images/homeImage.jpg"
            fluid
            rounded={true}
            bordered
          />
          <Header as="h1" textAlign="center">
            Welcome Home
          </Header>
          <Message textAlign="center" content="Center"/>

          {/* Projects */}
          <Home_projects />

          {/* About myself*/}
          <Home_about />

          {/* Include in an arrow from garysheng.com as reference */}
          <BottomMenu />
        </Responsive>
      </div>
    );
  }
}
