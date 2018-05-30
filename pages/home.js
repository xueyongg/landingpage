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
import TopMenu from "./components/menu";
import Home_projects from "./components/home/home_projects";
import Home_about from "./components/home/home-about";
import BottomMenu from "./components/bottom_menu";
import Todo from "./components/todo";
import Home_introduction from "./components/home/home_introduction";
import PageHeader from "./components/page/page_header";
const moment = require("moment");

export default class Home extends Component {
  state = {
    currentPage: "home",
    mobile: false
  };
  handleOnUpdate(data) {
    let width = data.width;

    let currentState = this.state;
    if (Number(width) < 691) {
      currentState.mobile = true;
    } else {
      currentState.mobile = false;
    }
    this.setState(currentState);
  }

  render() {
    const { mobile } = this.state;
    // var typed = new Typed(".element", {
    //   stringsElement: "#typed-strings",
    //   strings: ["First sentence.", "Second sentence."],
    //   typeSpeed: 30
    // });

    return (
      <div>
        <Responsive
          onUpdate={(e, data) => {
            this.handleOnUpdate(data);
          }}
        >
          <PageHeader
            mobile={mobile}
            url={this.state.currentPage}
            headerColor={"white"}
            subHeaderColor={"white"}
            imageName={"home"}
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
