import React, { Component } from "react";
import PropTypes from "prop-types";
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

export default class Page_contact extends Component {
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
    additionalSubHeaderStyle: {}
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
            style={{
              margin: "0em 0em 0em 0em",
              padding: "0em 0em 0em 0em ",
              borderRadius: 0,
              borderShadow: 0,
              border: 0
            }}
            textAlign="center"
          >
            <Image
              fluid
              src="/static/images/homeImage.jpg"
              style={{ opacity: "0.5", width: "100%", maxHeight: 500 }}
            />
            <Container
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
              text
            >
              <Header as="h2" icon>
                <Header.Subheader>Need help for your website?</Header.Subheader>

                {/* Computer view */}
                <Responsive
                  maxWidth={Responsive.onlyWidescreen.maxWidth}
                  minWidth={Responsive.onlyTablet.minWidth}
                >
                  <p
                    style={{
                      fontSize: 72,
                      textTransform: "uppercase",
                      marginBottom: "0.25em"
                    }}
                  >
                    Hire a web developer
                  </p>
                  <ResponsiveButton />
                </Responsive>

                {/* Mobile view */}
                <Responsive
                  maxWidth={Responsive.onlyMobile.maxWidth}
                  minWidth={150}
                >
                  <p
                    style={{
                      fontSize: 24,
                      textTransform: "uppercase",
                      marginBottom: "0.5em"
                    }}
                  >
                    Hire a web developer
                  </p>
                  <ResponsiveButton mobile />
                </Responsive>
              </Header>
            </Container>
          </Segment>
        </div>
      </div>
    );
  }
}

class ResponsiveButton extends Component {
  getInitialProps({ mobile }) {
    return { mobile };
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
      maxWidth: 250,
      zIndex: 10,
      transition: {
        transitionDuration: 0.3
      }
    },
    hover: false,
    mobile: this.props.mobile
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
    let { normalStyle, hover, mobile } = this.state;

    let modifiedNormal = mobile
      ? { ...normalStyle, padding: "1em 1em" }
      : normalStyle;
    return (
      <Link href="mailto:xueyongjoshua@gmail.com" passHref>
        <Button
          onMouseOut={() => {
            this.offHover();
          }}
          onMouseOver={() => {
            this.onHover();
          }}
          style={
            hover
              ? {
                ...modifiedNormal,
                color: "white",
                backgroundColor: "black"
              }
              : modifiedNormal
          }
        >
          {/* <Icon name="mail outline" size="small" /> */}
          Contact me today
        </Button>
      </Link>
    );
  }
}
ResponsiveButton.propTypes = {
  mobile: PropTypes.bool
};
