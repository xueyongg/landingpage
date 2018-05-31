import React, { Component } from "react";
import {
  Modal,
  Header,
  Segment,
  Grid,
  Image,
  Container,
  Button,
  List,
  Icon,
  Label,
  Input,
  Menu
} from "semantic-ui-react";
import Link from "next/link";
import TopMenu from "./components/menu";
import BottomMenu from "./components/bottom_menu";
import PageHeader from "./components/page/page_header";
import Head from "next/head";
import Layout from "./utils/layout";
const data = require("../static/assets/data.json");

export default class Portfolio extends Component {
  state = {
    currentPage: "portfolio"
  };

  render() {
    return (
      <Layout>
        <div>
          <Head>
            <title>My Portfolio</title>
          </Head>
          <TopMenu currentPage={this.state.currentPage} />
          <PageHeader
            mobile={false}
            url={this.state.currentPage}
            headerColor={"white"}
            subHeaderColor={"white"}
            imageName={"portfoliotest"}
            subHeaderContent={"Take a look at what I've done"}
            headerContent={"My humble portfolio"}
            additionalSegmentStyle={{}}
            additionalHeaderStyle={{ fontWight: 700, zIndex: 1 }}
            additionalSubHeaderStyle={{ zIndex: 1 }}
          />
          <Container
            style={{
              margin: "0em 0em 0em 0em",
              padding: "2em 0em 2em 0em "
            }}
          >
            <Header as="h2" content="My Projects" textAlign="center" />
            <Grid celled stackable columns={3} textAlign="center">
              {data.portfolio.projects.map((project, index) => {
                let {
                  title,
                  link,
                  descriptions,
                  date,
                  duration,
                  skills,
                  baseurl,
                  screenshots
                } = project;
                return (
                  <Grid.Row key={index}>
                    <Grid.Column width={3}>
                      <Header as="h4" content="Date and duration of project" />
                      <p>{date}</p>
                      <p>({duration})</p>
                    </Grid.Column>
                    <Grid.Column width={10} textAlign="left">
                      <Header as="h3" content={title} textAlign="center" />
                      <List as="ul">
                        {descriptions.map((description, i) => {
                          return (
                            <List.Item as="li" key={i}>
                              {description}
                            </List.Item>
                          );
                        })}
                      </List>
                      <Grid>
                        <Grid.Row columns={3}>
                          {screenshots.map((screenshot, i) => {
                            if (screenshot)
                              return (
                                <Grid.Column key={i}>
                                  <Modal
                                    basic
                                    trigger={
                                      <Image
                                        src={baseurl + screenshot}
                                        rounded
                                        bordered
                                        style={{ borderWidth: 3 }}
                                        alt={baseurl + screenshot}
                                      />
                                    }
                                    // style={{ textAlign: "right" }}
                                  >
                                    {/* <Modal.Header>
                                    <Icon name="remove" />
                                  </Modal.Header> */}
                                    <Modal.Content>
                                      <Image
                                        fluid
                                        rounded
                                        alt={
                                          baseurl +
                                          "large/" +
                                          screenshot.replace("tn_", "")
                                        }
                                        src={
                                          baseurl +
                                          "large/" +
                                          screenshot.replace("tn_", "")
                                        }
                                        style={{ width: "100%" }}
                                      />
                                    </Modal.Content>
                                  </Modal>
                                </Grid.Column>
                              );
                          })}
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <List link>
                        <Header as="h4" content="Skills" />
                        {skills.map((skill, i) => {
                          return (
                            <List.Item key={i}>
                              <Label>
                                {skill.icon.includes("devicon") ? (
                                  <i
                                    class={skill.icon}
                                    style={{ paddingRight: 8 }}
                                  />
                                ) : (
                                  <Icon name={skill.icon} />
                                )}
                                {skill.name}
                              </Label>
                            </List.Item>
                          );
                        })}
                      </List>
                    </Grid.Column>
                  </Grid.Row>
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
