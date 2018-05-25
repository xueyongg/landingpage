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
  Image,
  Message,
  Responsive
} from "semantic-ui-react";
import Link from "next/link";
import { TopMenu } from "./components/menu";
import { Home_projects } from "./components/home/home_projects";
import { Home_about } from "./components/home/home-about";
import { BottomMenu } from "./components/bottom_menu";
import { Todo } from "./components/todo";
import { Home_introduction } from "./components/home/home_introduction";
import { Home_contact } from "./components/home/home_contact";

const moment = require("moment");

export class Home extends Component {
  // static async getInitialProps({ currentPage }) {
  //   console.log(currentPage);
  //   return true;
  // }
  state = {};
  handleOnUpdate() {}

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Responsive onUpdate={this.handleOnUpdate}>
          <Image
            src="/static/images/homeImage.jpg"
            fluid
            style={{ opacity: "0.5", maxHeight: 750 }}
          />

          <Container
            text
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <Header as="h1" textAlign="center">
              Welcome Home
            </Header>
          </Container>

          {/* Introduction */}
          <Home_introduction />

          {/* Projects */}
          <Home_projects />

          {/* Include in an arrow from garysheng.com as reference */}
          <BottomMenu />
        </Responsive>
      </div>
    );
  }
}
