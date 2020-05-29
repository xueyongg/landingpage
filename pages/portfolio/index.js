import React, { Component } from "react";
import { Header, Grid, Container } from "semantic-ui-react";
import TopMenu from "../components/menu";
import BottomMenu from "../components/bottom_menu";
import PageHeader from "../components/page/page_header";
import Portfolio_table from "./project-table";
import Head from "next/head";
import Layout from "../utils/layout";

const data = require("../../static/assets/data.json");

export default class Portfolio extends Component {
  state = {
    currentPage: "portfolio",
  };
  render() {
    const projects = data.portfolio.projects;

    return (
      <Layout>
        <div>
          <Head>
            <title>My Portfolio</title>
          </Head>
          <TopMenu currentPage={this.state.currentPage} />
          <PageHeader
            additionalHeaderStyle={{ fontWight: 700, zIndex: 1 }}
            additionalSegmentStyle={{}}
            additionalSubHeaderStyle={{ zIndex: 1 }}
            headerColor={"white"}
            headerContent={"My humble portfolio"}
            imageName={"portfoliotest"}
            mobile={false}
            subHeaderColor={"white"}
            subHeaderContent={"Take a look at what I've done."}
            url={this.state.currentPage}
          />
          <Container
            style={{
              margin: "0em 0em 0em 0em",
              padding: "2em 0em 2em 0em ",
            }}
          >
            <Header as="h2" content="My Projects" textAlign="center" />
            <Grid celled columns={3} stackable textAlign="center">
              {projects.map((project, index) => {
                return (
                  <Portfolio_table index={index} key={index} project={project} />
                );
              })}
            </Grid>
          </Container>
          <BottomMenu currentPage={this.state.currentPage} />
        </div>
      </Layout>
    );
  }
}
