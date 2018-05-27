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
  Form
} from "semantic-ui-react";
import Link from "next/link";
import { TopMenu } from "./components/menu";
import { BottomMenu } from "./components/bottom_menu";
import { PageHeader } from "./components/pageHeader";

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
            padding: "96px 48px"
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
                <List bulleted>
                  <List.Item>Gaining Access</List.Item>
                  <List.Item>Inviting Friends</List.Item>
                  <List.Item>Benefits</List.Item>
                  <List.Item>Warranty</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3">Experienced with</Header>
                <List bulleted>
                  <List.Item>Gaining Access</List.Item>
                  <List.Item>Inviting Friends</List.Item>
                  <List.Item>Benefits</List.Item>
                  <List.Item>Warranty</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <Container
          style={{
            marginTop: 150,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 80,
            border: 1
          }}
        >
          {/* Work Experience  |  Description */}

          <Grid>
            <Grid.Column width={6}>
              <Header as="h2" textAlign="left">
                <Icon name="users" />
                <Header.Content>Work Experience</Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={10}>
              <Image src="https://react.semantic-ui.com/assets/images/wireframe/paragraph.png" />
            </Grid.Column>
          </Grid>
        </Container>
        <Container
          style={{
            marginTop: 150,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 100,
            border: 1
          }}
        >
          {/* Education  |  Description */}
          <Grid>
            <Grid.Column width={6}>
              <Header as="h2" textAlign="left">
                <Icon name="student" />
                <Header.Content>Education</Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={10}>
              <Image src="https://react.semantic-ui.com/assets/images/wireframe/paragraph.png" />
            </Grid.Column>
          </Grid>
        </Container>
        <BottomMenu currentPage={this.state.currentPage} />
      </div>
    );
  }
}
