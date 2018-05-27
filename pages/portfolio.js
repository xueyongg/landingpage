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
import { TopMenu } from "./components/menu";
import { BottomMenu } from "./components/bottom_menu";
import { PageHeader } from "./components/page/page_header";
const data = require("../static/assets/data.json");

export default class Portfolio extends Component {
  state = {
    currentPage: "portfolio"
  };

  render() {
    return (
      <div>
        <TopMenu currentPage={this.state.currentPage} />
        <PageHeader
          mobile={false}
          url={this.state.currentPage}
          headerColor={"black"}
          subHeaderColor={"black"}
          imageName={"portfoliotest"}
          subHeaderContent={"Take a look at what I've done"}
          headerContent={"My humble portfolio"}
          additionalSegmentStyle={{}}
          additionalHeaderStyle={{ fontWight: 700, zIndex: 1 }}
          additionalSubHeaderStyle={{ zIndex: 1 }}
        />
        <Container>
          <Grid celled stackable columns={3} textAlign="center" stretched>
            {data.portfolio.projects.map((project, index) => {
              let {
                title,
                link,
                descriptions,
                date,
                skills,
                baseurl,
                screenshots
              } = project;
              return (
                <Grid.Row key={index}>
                  <Grid.Column width={3}>
                    <Header as="h4" content="Date and duration of project" />
                    <p>{date}</p>
                  </Grid.Column>
                  <Grid.Column width={10} textAlign="left">
                    <Header as="h3" content={title} textAlign="center" />
                    {descriptions.map((description, i) => {
                      return <p key={i}>{description}</p>;
                    })}

                    <Grid>
                      <Grid.Row columns={3}>
                        {screenshots.map((screenshot, i) => {
                          if (screenshot)
                            return (
                              <Grid.Column>
                                <Image
                                  src={baseurl + screenshot}
                                  rounded
                                  bordered
                                  style={{ borderWidth: 3 }}
                                  alt={baseurl + screenshot}
                                />
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
    );
  }
}
