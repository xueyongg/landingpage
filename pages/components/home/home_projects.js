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
  Divider
} from "semantic-ui-react";
import Link from "next/link";
const moment = require("moment");

export class Home_projects extends Component {
  static async getInitialProps({ query }) {
    // console.log(query);
    return true;
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
      borderColor: "#272727",
      borderShadow: "0",
      backgroundColor: "#DDDDDD",
      transition: {
        transitionDuration: 0.3
      }
    },
    hover: false
  };
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

  onHover() {
    let state = this.state;
    state.hover = true;
    this.setState(state);
    console.log("Hoverr");
  }

  offHover() {
    let state = this.state;
    state.hover = false;
    this.setState(state);
    console.log("Not Hoverr");
  }

  render() {
    const testLink =
      "https://react.semantic-ui.com/assets/images/wireframe/image.png";

    const {
      active,
      active1,
      active2,
      active3,
      hover,
      normalStyle
    } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          Title
        </Header>

        <Button primary>Add</Button>
        <Button>View</Button>
      </div>
    );

    return (
      <div>
        <div style={{ backgroundColor: "#DDDDDD", padding: "96px 48px" }}>
          {/* Projects */}
          <Segment vertical>
            <Divider
              as="h2"
              className="header"
              horizontal
              style={{ margin: "3em 0em", textTransform: "uppercase" }}
            >
              Case Studies
            </Divider>
            <Container
              style={{
                marginTop: 0,
                marginLeft: 10,
                marginRight: 10,
                border: 1
              }}
            >
              <Grid stackable>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <Dimmer.Dimmable
                      as={Image}
                      dimmed={active}
                      dimmer={{ active, content }}
                      onMouseEnter={e => {
                        this.handleShow(1);
                      }}
                      onMouseLeave={e => {
                        this.handleHide(1);
                      }}
                      src="https://react.semantic-ui.com/assets/images/wireframe/image.png"
                    />
                    {/* <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" /> */}
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    <Link href="/portfolio" passHref>
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
                        View more projects
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
