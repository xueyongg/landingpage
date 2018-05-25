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
  Dimmer
} from "semantic-ui-react";
import Link from "next/link";

export class Home_about extends Component {
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
    const {
      active,
      active1,
      active2,
      active3,
      hover,
      normalStyle
    } = this.state;

    const testLink =
      "https://react.semantic-ui.com/assets/images/wireframe/image.png";
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
        <div style={{ backgroundColor: "#ffff" }}>
          {/* About */}
          <Segment vertical>
            <Header as="h2" textAlign="center" style={{ marginTop: 50 }}>
              My life as a developer
            </Header>
            <Container
              style={{
                marginTop: 0,
                marginLeft: "auto",
                marginRight: "auto",
                border: 1
              }}
            >
              <Image.Group size="small">
                <Image
                  src={testLink}
                  fluid
                  style={{ width: "45%", maxWidth: 222 }}
                />
                <Image
                  src={testLink}
                  fluid
                  style={{ width: "45%", maxWidth: 222 }}
                />
                <Image
                  src={testLink}
                  fluid
                  style={{ width: "45%", maxWidth: 222 }}
                />
                <Image
                  src={testLink}
                  fluid
                  style={{ width: "45%", maxWidth: 222 }}
                />
                <Image
                  src={testLink}
                  fluid
                  style={{ width: "45%", maxWidth: 222 }}
                />
                <Image
                  src={testLink}
                  fluid
                  style={{ width: "45%", maxWidth: 222 }}
                />
                <Image
                  src={testLink}
                  fluid
                  style={{ width: "45%", maxWidth: 222 }}
                />
                <Image
                  src={testLink}
                  fluid
                  style={{ width: "45%", maxWidth: 222 }}
                />
              </Image.Group>
              <Link href="/about" passHref>
                <Button
                  icon
                  size="huge"
                  color="black"
                  inverted
                  style={
                    hover ? { ...normalStyle, color: "white" } : normalStyle
                  }
                  onMouseOver={() => {
                    this.onHover();
                  }}
                  onMouseOut={() => {
                    this.offHover();
                  }}
                >
                  <Icon name="user outline" />
                  Learn more about me
                </Button>
              </Link>
            </Container>
          </Segment>
        </div>
      </div>
    );
  }
}
