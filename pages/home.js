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
import Home_introduction from "./components/home/home_introduction";
import PageHeader from "./components/page/page_header";
import About_instagram from "./components/about/about_instagram";

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
            additionalHeaderStyle={{ zIndex: 1 }}
            additionalSegmentStyle={{}}
            additionalSubHeaderStyle={{ zIndex: 1 }}
            headerColor={"white"}
            headerContent={"Peek into my life"}
            imageName={"home"}
            mobile={mobile}
            subHeaderColor={"white"}
            subHeaderContent={"Find out more about me here."}
            url={this.state.currentPage}
          />

          {/* Introduction */}
          <Home_introduction />

          {/* Projects */}
          {/* <Home_projects /> */}

          <About_instagram />

          {/* About you */}
          {/* <Home_about /> */}
          {/* Include in an arrow from garysheng.com as reference */}
          <BottomMenu currentPage={this.state.currentPage} />
        </Responsive>
      </div>
    );
  }
}
