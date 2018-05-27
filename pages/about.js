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
import { PageHeader } from "./components/pageHeader";

export default class About extends Component {
  static async getInitialProps({ pathname, query }) {
    return { query };
  }
  state = {
    currentPage: "about"
  };

  render() {
    let mobile = false;
    let { currentPage } = this.state;

    return (
      <div>
        <TopMenu currentPage={this.state.currentPage} />
        <PageHeader
          mobile={false}
          url={this.state.currentPage}
          headerColor={"white"}
          subHeaderColor={"white"}
          imageName={"about"}
          headerContent={"about me"}
          subHeaderContent={"discover more about my personhood"}
          additionalSegmentStyle={{}}
          additionalHeaderStyle={{ fontWight: 700, zIndex: 1 }}
          additionalSubHeaderStyle={{ zIndex: 1 }}
        />

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

        <BottomMenu currentPage={this.state.currentPage} />
      </div>
    );
  }
}
