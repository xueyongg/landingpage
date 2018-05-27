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

export class Page_contact extends Component {
  static async getInitialProps({ query }) {
    // console.log(query);
    return true;
  }
  state = {
    mobile: false,
    url: "/",
    imageName: "",
    headerContent: "",
    subHeaderContent: "",
    headerColor: "",
    subHeaderColor: "",
    additionalSegmentStyle: {},
    additionalHeaderStyle: {},
    additionalSubHeaderStyle: {},
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
      zIndex: 10,
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
      mobile,
      url,
      imageName,
      headerContent,
      subHeaderContent,
      headerColor,
      subHeaderColor,
      additionalSegmentStyle,
      additionalHeaderStyle,
      additionalSubHeaderStyle,
      hover,
      normalStyle
    } = this.state;

    return (
      <div>
        <div>
          {/* About */}
          <Segment
            textAlign="center"
            style={{
              margin: "0em 0em 0em 0em",
              padding: "0em 0em",
              borderRadius: 0,
              borderShadow: 0
            }}
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
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              <Header as="h2" icon>
                <Header.Subheader>Need help for your website?</Header.Subheader>
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
                  <p style={{ fontSize: 24, textTransform: "uppercase" }}>
                    Hire a web designer
                  </p>
                </Responsive>
              </Header>
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
            </Container>
          </Segment>
        </div>
      </div>
    );
  }
}
