import React, { Component } from "react";
import {
  Modal,
  Header,
  Button,
  List,
  Icon,
  Input,
  Menu,
  Segment,
  Container,
  Grid,
  Image,
  Dimmer,
  Divider,
  Responsive
} from "semantic-ui-react";
import Link from "next/link";
const data = require("../../../static/assets/data.json");

export default class Home_introduction extends Component {
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

  handleShow = num => {
    let state = this.state;
    state[`active${num}`] = true;
    this.setState({ active: true, active1: true });
  };
  handleHide = num => {
    let state = this.state;
    state[`active${num}`] = false;
    this.setState({ active: false, active1: false });
  };

  render() {
    const { hover, normalStyle } = this.state;

    return (
      <div>
        <div>
          {/* About */}
          <Segment vertical>
            <Container
              style={{
                padding: "2em 0em 2em 0em",
                margin: 0,

                backgroundColor: "#ffff"
              }}
            >
              <Header
                as="h2"
                content="My life as a developer"
                size="huge"
                textAlign="center"
              />

              <Grid stackable style={{ padding: 0 }} textAlign="center">
                <Grid.Row columns={3}>
                  {data.home.introduction.map((element, i) => {
                    let { icon, icon_size, header, description } = element;
                    return (
                      <Grid.Column key={i}>
                        <Header as="h2" icon>
                          <Icon name={icon} size={icon_size} />
                          {header}
                        </Header>
                        <p style={{ fontSize: "1.33em" }}>{description}</p>
                      </Grid.Column>
                    );
                  })}
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    <Link href="/resume" passHref prefetch>
                      <Button
                        className="home_buttons"
                        icon
                        onMouseOut={() => {
                          this.offHover();
                        }}
                        onMouseOver={() => {
                          this.onHover();
                        }}
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
                      >
                        <Icon name="file text outline" />
                        View my resume
                      </Button>
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </div>
      </div>
    );
  }
}
