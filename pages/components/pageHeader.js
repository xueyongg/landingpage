import PropTypes from "prop-types";
import React, { Component } from "react";
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

export class PageHeader extends Component {
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
    hover: false,
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
      borderColor: "black",
      borderShadow: "0",
      backgroundColor: "transparent",
      transition: {
        transitionDuration: 0.3
      }
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
      normalStyle
    } = this.state;
    return (
      <Segment
        inverted
        textAlign="center"
        style={{
          minHeight: 700,
          marginTop: 0,
          padding: "1em 0em",
          backgroundImage: `url(/static/images/${imageName}.jpg), url('https://www.istockphoto.com/photos/grey-background')`,
          backgroundColor: "#ffff",
          backgroundSize: "cover",
          borderRadius: 0,
          width: "100%",
          backgroundRepeat: "no-repeat",
          ...additionalSegmentStyle
        }}
      >
        <Container text>
          <Header
            as="h1"
            content={headerContent ? headerContent : "Imagine-a-company"}
            inverted
            style={{
              fontSize: mobile ? "2em" : "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: mobile ? "1.5em" : "3em",
              textTransform: "uppercase",
              color: headerColor ? headerColor : "white",
              ...additionalHeaderStyle
            }}
          />
          <Header
            as="h4"
            content={
              subHeaderContent
                ? subHeaderContent
                : "Do whatever you want when you want to."
            }
            inverted
            style={{
              fontSize: mobile ? "1.5em" : "1.7em",
              fontWeight: "normal",
              marginTop: mobile ? "0.5em" : "1.5em",
              textTransform: "uppercase",
              color: subHeaderColor ? subHeaderColor : "white",
              ...additionalSubHeaderStyle
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
          ) : (
            ""
          )}
        </Container>
      </Segment>
    );
  }
}
