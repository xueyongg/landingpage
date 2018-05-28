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

export default class Home_projects extends Component {
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
  }

  offHover() {
    let state = this.state;
    state.hover = false;
    this.setState(state);
  }

  render() {
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
    const testLink =
      "https://react.semantic-ui.com/assets/images/wireframe/image.png";

    return (
      <div>
        {/* Projects */}
        <Segment
          
          style={{
            backgroundColor: "#D3D3D3",
            padding: "96px 48px",
            margin: 0,
            borderRadius: 0,
            borderShadow: 0,
            border: 0
          }}
        >
          <Header
            as="h2"
            textAlign="center"
            content="My projects over the years"
          />
          <Container>
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
    );
  }
}
