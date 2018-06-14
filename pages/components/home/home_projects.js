import React, { Component } from "react";
import {
  Header,
  Button,
  Icon,
  Segment,
  Container,
  Grid,
  Image,
  Dimmer
} from "semantic-ui-react";
import Link from "next/link";

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
    const { active, hover, normalStyle } = this.state;
    const hoverStyle = {
      ...normalStyle,
      color: "white",
      backgroundColor: "black"
    };
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
            content="My projects over the years"
            textAlign="center"
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
                  <Link href="./portfolio" passHref prefetch>
                    <Button
                      icon
                      onMouseOut={() => {
                        this.offHover();
                      }}
                      onMouseOver={() => {
                        this.onHover();
                      }}
                      size="huge"
                      style={hover ? hoverStyle : normalStyle}
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
