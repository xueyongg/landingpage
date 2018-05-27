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
import { PageHeader } from "./components/page/page_header";
const moment = require("moment");

export class Home extends Component {
  state = {
    currentPage: "home"
  };
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
          <PageHeader
            mobile={false}
            url={this.state.currentPage}
            headerColor={"black"}
            subHeaderColor={"black"}
            imageName={"workdesk"}
            subHeaderContent={"Find out more about me here."}
            headerContent={"Peek into my life"}
            additionalSegmentStyle={{}}
            additionalSubHeaderStyle={{ zIndex: 1 }}
            additionalHeaderStyle={{ zIndex: 1 }}
          />

          {/* Introduction */}
          <Home_introduction />

          {/* Projects */}
          {/* <Home_projects /> */}

          {/* About you */}
          {/* <Home_about /> */}
          {/* Include in an arrow from garysheng.com as reference */}
          <BottomMenu currentPage={this.state.currentPage} />
        </Responsive>
      </div>
    );
  }
}
