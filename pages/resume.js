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
import { TopMenu } from "./components/menu";
import { BottomMenu } from "./components/bottom_menu";
import { PageHeader } from "./components/pageHeader";
const data = require("../static/assets/data.json");

export default class Resume extends Component {
  state = {
    currentPage: "resume"
  };
  render() {
    const { hover, normalStyle } = this.state;
    return (
      <div>
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

        <Container
          style={{
            padding: "96px 16px 24px 16px"
          }}
        >
          {/* Techonology  |  Core |  Experienced*/}
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Header as="h2" textAlign="left">
                  <Image src="../static/images/tech.png" circular />
                  <Header.Content>Technologies</Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3">Core Technology</Header>
                <List bulleted size="huge">
                  {data.resume.technology.core_technology.map(
                    (element, index) => {
                      return <List.Item key={index}>{element.name}</List.Item>;
                    }
                  )}
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3">Experienced with</Header>
                <List bulleted size="huge">
                  {data.resume.technology.experienced_with.map(
                    (element, index) => {
                      return <List.Item key={index}>{element.name}</List.Item>;
                    }
                  )}
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <Container
          style={{
            padding: "96px 16px 24px 16px"
          }}
        >
          {/* Work Experience  |  Description */}

          <Grid>
            <Grid.Column width={5}>
              <Header as="h2" textAlign="left">
                <Icon name="users" />
                <Header.Content>Work Experience</Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={11}>
              <Grid>
                <Grid.Row />
              </Grid>

              <Item.Group divided>
                {data.resume.work_experience.experiences.map(
                  (element, index) => {
                    let {
                      company,
                      companyWebsite,
                      jobTitle,
                      jobDescriptionLink,
                      date,
                      duration,
                      description,
                      skills
                    } = element;
                    return (
                      <Item key={index}>
                        <Item.Content>
                          <Item.Header as="a" href={companyWebsite}>
                            {company}
                          </Item.Header>
                          <Item.Meta>
                            <u>
                              <a href={jobDescriptionLink}>{jobTitle} </a>
                            </u>
                          </Item.Meta>
                          <Item.Meta>{date}</Item.Meta>

                          <Item.Description>
                            <List bulleted size="medium">
                              {description.map((des, i) => {
                                return <List.Item key={i}>{des}</List.Item>;
                              })}
                            </List>
                          </Item.Description>
                          <Item.Extra>
                            {skills.map((skill, i) => {
                              return (
                                <Label
                                  key={skill + "-" + i}
                                  icon={skill.icon}
                                  content={skill.name}
                                />
                              );
                            })}
                          </Item.Extra>
                        </Item.Content>
                        <List.Header />
                        {/* <Item.Description floated="right">
                            {date}
                          </Item.Description> */}
                      </Item>
                    );
                  }
                )}
              </Item.Group>
            </Grid.Column>
          </Grid>
        </Container>
        <Container
          style={{
            padding: "96px 16px 24px 16px"
          }}
        >
          {/* Education  |  Description */}
          <Grid>
            <Grid.Column width={5}>
              <Header as="h2" textAlign="left">
                <Icon name="student" />
                <Header.Content>Education</Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={11}>
              <Item.Group divided>
                {data.resume.education.description.map((element, index) => {
                  let {
                    school,
                    academicFocus,
                    date,
                    description
                  } = element;
                  return (
                    <Item key={index}>
                      <Item.Content>
                        <Item.Header>
                          {school}
                        </Item.Header>
                        <Item.Meta>
                            <p>{academicFocus} </p>
                        </Item.Meta>
                        <Item.Meta>{date}</Item.Meta>
                        <Item.Description>
                          <List size="medium">
                            {description.map((des, i) => {
                              return <List.Item key={i}>{des}</List.Item>;
                            })}
                          </List>
                        </Item.Description>
                        
                      </Item.Content>
                      <List.Header />
                      {/* <Item.Description floated="right">
                            {date}
                          </Item.Description> */}
                    </Item>
                  );
                })}
              </Item.Group>
            </Grid.Column>
          </Grid>
        </Container>
        <BottomMenu currentPage={this.state.currentPage} />
      </div>
    );
  }
}
