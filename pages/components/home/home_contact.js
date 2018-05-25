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

export class Home_contact extends Component {
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
        <div>
          {/* About */}
          <Segment
            vertical
            style={{ margin: "5em 0em 0em 0em", padding: "0em 0em" }}
          >
            <Image
              src="/static/images/homeImage.jpg"
              fluid
              style={{ opacity: "0.5", maxHeight: 550 }}
            />
            <Container
              text
              style={{
                backgroundColor: "transparent",
                padding: "96px 48px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <Grid textAlign="center">
                <Grid.Row>
                  <Grid.Column>
                    <Header as="h2" icon>
                      <Header.Subheader>
                        Need help for your website?
                      </Header.Subheader>
                      <Responsive
                        minWidth={Responsive.onlyTablet.minWidth}
                        maxWidth={Responsive.onlyWidescreen.maxWidth}
                      >
                        <p style={{ fontSize: 72, textTransform: "uppercase" }}>
                          Hire a web designer
                        </p>
                      </Responsive>
                      <Responsive
                        minWidth={150}
                        maxWidth={Responsive.onlyMobile.maxWidth}
                      >
                        <p style={{ fontSize: 48, textTransform: "uppercase" }}>
                          Hire a web designer
                        </p>
                      </Responsive>
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid>
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    <Link href="/contact" passHref>
                      <Button
                        className="home_buttons"
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
                        <Icon name="mail outline" />
                        Contact me today
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
