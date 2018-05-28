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
            textAlign="center"
            style={{
              margin: "0em 0em 0em 0em",
              padding: "2em 0em 0em 0em ",
              borderRadius: 0,
              borderShadow: 0,
              border: 0
            }}
          >
            <Image
              src="/static/images/homeImage.jpg"
              fluid
              style={{ opacity: "0.5", width: "100%", maxHeight: 500 }}
            />
            <Container
              text
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                top: "60%",
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
                  <p
                    style={{
                      fontSize: 72,
                      textTransform: "uppercase",
                      marginBottom: "0.25em"
                    }}
                  >
                    Hire a web designer
                  </p>
                  <ResponsiveButton />
                </Responsive>

                <Responsive
                  minWidth={150}
                  maxWidth={Responsive.onlyMobile.maxWidth}
                >
                  <p
                    style={{
                      fontSize: 24,
                      textTransform: "uppercase",
                      marginBottom: "0.5em"
                    }}
                  >
                    Hire a web designer
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

const ResponsiveButton = ({ mobile }) => {
  let normalStyle = {
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
  };
  let hover = false;

  let modifiedNormal = mobile
    ? { ...normalStyle, padding: "10px 4.5px" }
    : normalStyle;

  return (
    <Link prefetch href="./contact" passHref>
      <Button
        style={
          hover
            ? {
                ...modifiedNormal,
                color: "white",
                backgroundColor: "black"
              }
            : modifiedNormal
        }
        onMouseOver={() => {
          this.onHover();
        }}
        onMouseOut={() => {
          this.offHover();
        }}
      >
        {/* <Icon name="mail outline" size="small" /> */}
        Contact me today
      </Button>
    </Link>
  );
};
ResponsiveButton.propTypes = {
  mobile: PropTypes.bool
};
