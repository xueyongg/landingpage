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
  Input,
  Menu
} from "semantic-ui-react";
import Link from "next/link";
const data = require("../../../static/assets/data.json");

export default class About_resume extends Component {
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
      borderColor: "#272727",
      borderShadow: "0",
      backgroundColor: "#ffff",
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
    const about_resume = data.about.about_resume;

    return (
      <div>
        <Container
          style={{
            padding: "3em 0em",
            margin: 0,
            width: "100%",
            backgroundColor: "#fafafa"
          }}
        >
          <Grid textAlign="center">
            {/* What I've done and what I can do */}
            <Header as="h2">
              <Icon name={about_resume.icon} />
              <Header.Content>{about_resume.header}</Header.Content>
            </Header>
            <Grid.Row>
              <Grid.Column width={12} textAlign="center">
                <h4
                  style={{
                    fontFamily: "proxima-nova",
                    fontSize: 26,
                    lineHeight: "1.4em",
                    fontWeight: 200
                  }}
                >
                  Take a look at what I've accomplished over the years from my University days till now. <br/>Love to learn and collaborate so do check it out!
                </h4>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Link prefetch href="/resume" passHref>
                  <Button
                    icon
                    size="huge"
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
                    <Icon name="clone" />
                    View my resume
                  </Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
