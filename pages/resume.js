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

export default class Resume extends Component {
  static async getInitialProps({ pathname, query }) {
    return { query };
  }

  state = {
    normalStyle: {
      padding: "21px 34px",
      textTransform: "uppercase",
      fontSize: "15px",
      fontStyle: "normal",
      fontWeight: "400",
      letterSpacing: ".1em",
      fontFamily: "proxima-nova",
      color: "black",
      border: "2px solid",
      borderColor: "black",
      borderShadow: "0",
      backgroundColor: "transparent",
      transition: {
        transitionDuration: 0.3
      }
      
    },
    hover: false
  };

  onHover() {
    let state = this.state;
    state.hover = true;
    this.setState(state);
  }

  offHover() {
    let state = this.state;
    state.hover = false;
    this.setState(state);
  }

  render() {
    const { hover, normalStyle } = this.state;
    return (
      <div>
        <TopMenu currentPage="resume" />
        <Image
          src="/static/images/resume.jpg"
          fluid
          style={{ opacity: "0.6", maxHeight: 750 }}
        />
        <Container
          text
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Grid textAlign="center">
            <Grid.Row>
              <Grid.Column>
                <Header as="h4" textAlign="center">
                  Find out what I have accomplished over the years
                </Header>
                <Header
                  as="h1"
                  textAlign="center"
                  style={{
                    textTransform: "uppercase",
                    fontSize: 52,
                    fontWight: 700
                  }}
                >
                  Resume
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <a
                  href="/static/assets/resume/Resume - Phua Xue Yong Joshua.pdf"
                  download
                >
                  <Button
                    size="big"
                    icon
                    style={
                      hover
                        ? {
                            ...normalStyle,
                            color: "white",
                            backgroundColor: "black"
                          }
                        : normalStyle
                    }
                    onMouseOver={() => {
                      this.onHover();
                    }}
                    onMouseOut={() => {
                      this.offHover();
                    }}
                  >
                    <Icon name="download" />
                    Download Resume
                  </Button>
                </a>
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
        <BottomMenu currentPage="resume" />
      </div>
    );
  }
}
