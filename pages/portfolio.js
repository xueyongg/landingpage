import React, { Component } from "react";
import {
  Modal,
  Header,
  Grid,
  Image,
  Container,
  List,
  Icon,
  Label
} from "semantic-ui-react";
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
              padding: "2em 0em 2em 0em "
            }}
          >
            <Header as="h2" content="My Projects" textAlign="center" />
            <Grid celled columns={3} stackable textAlign="center">
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
                    <Grid.Column textAlign="left" width={10}>
                      {link !== "" ? (
                        <Header as="h3" content={title} icon textAlign="center">
                          {title}
                          <Header.Subheader as="a" href={link} target="_blank">
                            Check me out
                          </Header.Subheader>
                        </Header>
                      ) : (
                        <Header as="h3" content={title} textAlign="center" />
                      )}

                      <List as="ul" link>
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
                                    centered
                                    closeIcon
                                    style={{ top: "15%" }}
                                    trigger={
                                      <Image
                                        alt={baseurl + screenshot}
                                        bordered
                                        rounded
                                        src={baseurl + screenshot}
                                        style={{ borderWidth: 3 }}
                                      />
                                    }
                                  >
                                    {link ? (
                                      <Header
                                        as="a"
                                        content={title}
                                        href={link}
                                        icon="file outline"
                                      />
                                    ) : (
                                      <Header
                                        content={title}
                                        icon="file outline"
                                      />
                                    )}
                                    <Modal.Content>
                                      <Image
                                        alt={
                                          baseurl +
                                          "large/" +
                                          screenshot.replace("tn_", "")
                                        }
                                        centered
                                        fluid
                                        rounded
                                        src={
                                          baseurl +
                                          "large/" +
                                          screenshot.replace("tn_", "")
                                        }
                                        style={{
                                          width: "100%",
                                          maxHeight: "calc(100vh - 90px)",
                                          // overflowY: "auto",
                                          cursor: "auto"
                                        }}
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
