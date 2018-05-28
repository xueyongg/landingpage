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
import TopMenu from "./components/menu";
import BottomMenu from "./components/bottom_menu";
import About_instagram from "./components/about/about_instagram";
import About_photos from "./components/about/about_photos";
import About_resume from "./components/about/about_resume";
import About_funfact from "./components/about/about_funfact";
import About_understand from "./components/about/about_whoiam";
import PageHeader from "./components/page/page_header";
import Head from "next/head";
export default class About extends Component {
  state = {
    currentPage: "about"
  };

  render() {
    let mobile = false;
    let { currentPage } = this.state;

    return (
      <div>
        <Head>
          <title>About me</title>
        </Head>
        <TopMenu currentPage={this.state.currentPage} />
        <PageHeader
          mobile={false}
          url={this.state.currentPage}
          headerColor={"white"}
          subHeaderColor={"white"}
          imageName={"about"}
          headerContent={"About me"}
          subHeaderContent={"Discover more about my personhood."}
          additionalSegmentStyle={{}}
          additionalHeaderStyle={{ fontWight: 700, zIndex: 1 }}
          additionalSubHeaderStyle={{ zIndex: 1 }}
        />

        {/* Fun fact about myself*/}
        <About_funfact />
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
