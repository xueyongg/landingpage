import PropTypes from "prop-types";
import React, { Component } from "react";
import Link from "next/link";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

export default class PageHeader extends Component {
  state = {
    mobile: false,
    url: "/",
    imageName: "workdesk",
    headerContent: "",
    subHeaderContent: "",
    headerColor: "",
    subHeaderColor: "",
    additionalSegmentStyle: {},
    additionalHeaderStyle: {},
    additionalSubHeaderStyle: {},
    hover: false,
    normalStyle: {
      padding: "21px 34px",
      textTransform: "uppercase",
      fontSize: "15px",
      fontStyle: "normal",
      fontWeight: "400",
      letterSpacing: ".1em",
      fontFamily: "proxima-nova",
      color: "white",
      border: "2px solid",
      borderColor: "white",
      borderShadow: "0",
      backgroundColor: "transparent",
      transition: {
        transitionDuration: 0.3
      }
    },
    defaultTemplate: {
      minHeight: 700,
      marginTop: 0,
      padding: "1em 0em",
      // backgroundColor: "#ffff",
      backgroundSize: "cover",
      borderRadius: 0,
      width: "100%",
      backgroundRepeat: "no-repeat"
    },
    containerStyle: {
      width: "100%",
      backgroundColor: "#282828",
      padding: "3em 0em",
      marginTop: "8em",
      opacity: 0.7
    }
  };
  componentDidMount() {
    this.setState(this.props);
  }

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
    let {
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
      normalStyle,
      defaultTemplate,
      containerStyle
    } = this.state;
    return (
      <div>
        <Responsive
          minWidth={
            Responsive.onlyTablet.minWidth
              ? Responsive.onlyTablet.minWidth
              : 500
          }
          maxWidth={
            Responsive.onlyWidescreen.maxWidth
              ? Responsive.onlyWidescreen.maxWidth
              : 2500
          }
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              ...defaultTemplate,
              backgroundImage: `url(/static/images/${imageName}.jpg), linear-gradient(rgba(65, 65, 65, 0.50), rgba(65, 65, 65, 1.0))`
            }}
          >
            <Container style={{ ...containerStyle, marginTop: "15em" }}>
              <Header
                as="h4"
                content={
                  subHeaderContent ? subHeaderContent : "Loading, please wait.."
                }
                inverted
                style={{
                  fontSize: mobile ? "1.2em" : "1.7em",
                  fontWeight: "normal",
                  textTransform: "none",
                  position: "relative",
                  zIndex: 1,
                  color: subHeaderColor ? subHeaderColor : "white",
                  ...additionalSubHeaderStyle
                }}
              />
              <Header
                as="h1"
                content={
                  headerContent ? headerContent : "Welcome to Xueyong's site"
                }
                inverted
                style={{
                  fontSize: mobile ? "2em" : "4em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: mobile ? "0.2em" : "0.4em",
                  marginBottom: mobile ? "0.05em" : "0.1em",
                  textTransform: "uppercase",
                  color: headerColor ? headerColor : "white",
                  ...additionalHeaderStyle
                }}
              />

              {url === "resume" ? (
                <a
                  href="/static/assets/resume/Resume - Phua Xue Yong Joshua.pdf"
                  download
                >
                  <Button
                    size="big"
                    icon
                    // class="styled_button"
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
              ) : url === "home" ? (
                <Link prefetch href="./about" passHref>
                  <Button
                    icon
                    size="huge"
                    // class="styledButton"
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
                    <Icon name="user outline" />
                    Learn more about me
                  </Button>
                </Link>
              ) : (
                ""
              )}
            </Container>
          </Segment>
        </Responsive>

        {/* Mobile view */}
        <Responsive minWidth={150} maxWidth={Responsive.onlyMobile.maxWidth}>
          <Segment
            inverted
            textAlign="center"
            style={{
              ...defaultTemplate,
              backgroundImage: `url(/static/images/${imageName}.jpg), url(/static/images/default.jpg)`,
              minHeight: 500,
              ...additionalSegmentStyle
            }}
          >
            <Container
              style={{
                ...containerStyle,
                // backgroundColor: "transparent",
                borderRadius: 3,
                opacity: 0.6,
                filter: "drop-shadow(0 0 0 100px black)"
              }}
            >
              <Header
                as="h4"
                content={
                  subHeaderContent ? subHeaderContent : "Loading, please wait.."
                }
                inverted
                style={{
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  textTransform: "none",
                  color: subHeaderColor ? subHeaderColor : "white",
                  ...additionalSubHeaderStyle
                }}
              />
              <Header
                as="h1"
                content={
                  headerContent ? headerContent : "Welcome to Xueyong's site"
                }
                inverted
                style={{
                  fontSize: "2em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: "0.2em",
                  marginBottom: "0.05em",
                  textTransform: "uppercase",
                  color: headerColor ? headerColor : "white",
                  ...additionalHeaderStyle
                }}
              />

              {url === "resume" ? (
                <a
                  href="/static/assets/resume/Resume - Phua Xue Yong Joshua.pdf"
                  download
                >
                  <Button
                    size="big"
                    icon
                    // class="styled_button"
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
              ) : url === "home" ? (
                <Link prefetch href="./about" passHref>
                  <Button
                    icon
                    size="huge"
                    // class="styledButton"
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
                    <Icon name="user outline" />
                    Learn more about me
                  </Button>
                </Link>
              ) : (
                ""
              )}
            </Container>
          </Segment>
        </Responsive>
      </div>
    );
  }
}
