import React, { Component } from "react";
const Typed = require("typed");
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
    // var typed = new Typed(".element", {
    //   stringsElement: "#typed-strings",
    //   strings: ["First sentence.", "Second sentence."],
    //   typeSpeed: 30
    // });

    return (
      <div>
        <Responsive onUpdate={this.handleOnUpdate}>
          <Image
            src="/static/images/workdesk.jpg"
            fluid
            style={{ opacity: "0.5", maxHeight: 750, width: "100%" }}
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
            {/* <div id="typed-strings">
              <p>
                Typed.js is a <strong>JavaScript</strong> library.
              </p>
              <p>
                It <em>types</em> out sentences.
              </p>
            </div>
            <span id="typed" /> */}
            <Header
              as="h1"
              textAlign="center"
              style={{
                textTransform: "uppercase",
                fontSize: 52,
                fontWight: 700
              }}
            >
              Take a peek into Xueyong's life
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
