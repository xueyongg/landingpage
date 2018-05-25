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
            <Container>
              <Divider
                as="h2"
                className="header"
                horizontal
                style={{ margin: "3em 0em", textTransform: "uppercase" }}
              >
                <a href="#">My life as a developer</a>
              </Divider>
              <Responsive
                minWidth={Responsive.onlyTablet.minWidth}
                maxWidth={Responsive.onlyWidescreen.maxWidth}
              >
                <Grid>
                  <Grid.Row columns={5}>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={5}>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Responsive>

              <Responsive
                minWidth={150}
                maxWidth={Responsive.onlyMobile.maxWidth}
              >
                <Grid style={{ padding: 0 }}>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Responsive>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Link href="/about" passHref>
                      <Button
                        icon
                        size="huge"
                        color="black"
                        inverted
                        style={
                          hover
                            ? { ...normalStyle, color: "white" }
                            : normalStyle
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
