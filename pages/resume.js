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
  Container,
  Form,
  Item,
  Label
} from "semantic-ui-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import TopMenu from "./components/menu";
import BottomMenu from "./components/bottom_menu";
import PageHeader from "./components/page/page_header";
import Resume_education from "./components/resume/resume_education";
import Resume_work from "./components/resume/resume_work";
import Resume_technology from "./components/resume/resume_technology";
const data = require("../static/assets/data.json");
import Head from "next/head";

export default class Resume extends Component {
  state = {
    currentPage: "resume"
  };
  render() {
    const { hover } = this.state;
    return (
      <div>
        <Head>
          <title>My Resume</title>
        </Head>
        <TopMenu currentPage={this.state.currentPage} />
        <PageHeader
          mobile={false}
          url={this.state.currentPage}
          headerColor={"black"}
          subHeaderColor={"black"}
          imageName={"resume"}
          headerContent={"resume"}
          subHeaderContent={"Find out what I have accomplished over the years."}
          additionalSegmentStyle={{}}
          additionalHeaderStyle={{ fontWight: 700, zIndex: 1 }}
          additionalSubHeaderStyle={{ zIndex: 1 }}
        />

        {/* Techonology  |  Core |  Experienced*/}
        <Resume_technology />

        {/* Work Experience  |  Description */}
        <Resume_work />

        {/* Education  |  Description */}
        <Resume_education />

        <BottomMenu currentPage={this.state.currentPage} />
      </div>
    );
  }
}
