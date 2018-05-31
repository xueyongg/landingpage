import _ from "lodash";
import React, { Component } from "react";
import {
  Modal,
  Header,
  Segment,
  Grid,
  Image,
  Container,
  Button,
  List,
  Icon,
  Input,
  Menu,
  Divider,
  Visibility,
  Dropdown,
  Responsive,
  Sidebar
} from "semantic-ui-react";
import Link from "next/link";
import { PropTypes } from "prop-types";
import Router from "next/router";

export default class TopMenu extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    visible: false,
    normalStyle: {}
  };

  componentDidMount() {
    // console.log(this.props);
    this.setState({
      activeItem: this.props.currentPage
    });
  }

  handleOnUpdate() {
    this.setState({});
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  handleOverlayRef = c => {
    const { overlayRect } = this.state;
    if (!overlayRect)
      this.setState({
        overlayRect: _.pick(c.getBoundingClientRect(), "height", "width")
      });
  };

  stickOverlay = () => {
    this.setState({ overlayFixed: true });
  };

  stickTopMenu = () => {
    this.setState({ menuFixed: true });
    // console.log("stickTopMenu: menufixed is true");
  };

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => {
    this.setState({ menuFixed: false });
    // console.log("unStickTopMenu: menufixed is false");
  };

  static async getInitialprops({}) {
    let activeLink = "home";
    return activeLink;
  }
  render() {
    const {
      menuFixed,
      overlayFixed,
      overlayRect,
      activeItem,
      visible
    } = this.state;

    let menuStyle = {
      border: "none",
      borderRadius: 0,
      boxShadow: "none",
      marginBottom: "1em",
      marginTop: "1em",
      transition: "box-shadow 0.5s ease, padding 0.5s ease",
      position: "fixed",
      backgroundColor: "transparent",
      left: "0",
      right: "0",
      paddingLeft: "5%",
      paddingRight: "5%",
      zIndex: 1,

      fontWeight: 400,
      fontSize: 16,
      letterSpacing: ".15em"
    };

    const fixedMenuStyle = {
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
      opacity: "0.9",
      left: "0",
      right: "0",
      paddingLeft: "5%",
      paddingRight: "5%",
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: ".15em",
      textTransform: "uppercase"
    };

    return (
      <div>
        <Responsive
          // {...Responsive.onlyComputer}
          minWidth={Responsive.onlyTablet.minWidth}
          maxWidth={Responsive.onlyWidescreen.maxWidth}
        >
          <Visibility
            onBottomPassed={this.stickTopMenu}
            onBottomVisible={this.unStickTopMenu}
            once={false}
          >
            <Menu
              secondary={!menuFixed}
              pointing={!menuFixed}
              fixed={menuFixed ? "top" : false}
              style={menuFixed ? fixedMenuStyle : menuStyle}
              size="large"
            >
              <Menu.Menu>
                <Menu.Item>
                  <Link prefetch href="/" passHref>
                    <Image
                      size="mini"
                      src="https://78.media.tumblr.com/81fcb39644fef1ff91fd5db001a86743/tumblr_nttd5mxlym1rjoj3ho2_r1_500.jpg"
                      // src="/static/images/about/protrait.JPG"
                      circular
                    />
                  </Link>
                </Menu.Item>
              </Menu.Menu>

              <Menu.Menu position="right">
                <Link prefetch href={{ pathname: "/" }} passHref>
                  <Menu.Item name="home" active={activeItem === "home"}>
                    <p>Home</p>
                  </Menu.Item>
                </Link>
                <Link prefetch href={{ pathname: "/portfolio" }} passHref>
                  <Menu.Item
                    name="portfolio"
                    active={activeItem === "portfolio"}
                  >
                    <p>Portfolio</p>
                  </Menu.Item>
                </Link>
                <Link prefetch href={{ pathname: "/about" }} passHref>
                  <Menu.Item name="about" active={activeItem === "about"}>
                    <p>About</p>
                  </Menu.Item>
                </Link>
                <Link prefetch href={{ pathname: "/resume" }} passHref>
                  <Menu.Item name="resume" active={activeItem === "resume"}>
                    <p>Resume</p>
                  </Menu.Item>
                </Link>
                {/* <Link prefetch href={{ pathname: "/contact" }} passHref>
                  <Menu.Item name="contact" active={activeItem === "contact"}>
                    <p>Contact</p>
                  </Menu.Item>
                </Link> */}
              </Menu.Menu>
            </Menu>
          </Visibility>
        </Responsive>

        {/* Mobile view */}
        <Responsive minWidth={150} maxWidth={Responsive.onlyMobile.maxWidth}>
          <Sidebar.Pushable as={Segment} style={{ borderRadius: 0 }}>
            <Sidebar
              as={Menu}
              animation="overlay"
              width="very thin"
              visible={visible}
              icon
              direction="top"
              inverted
              style={{
                height: "100%",
                overflowX: "hidden",
                overflowY: "hidden"
              }}
            >
              <Menu.Item
                name="toggle"
                onClick={() => {
                  this.toggleVisibility();
                }}
              >
                <Icon name="sidebar" size="large" />
              </Menu.Item>

              <Link prefetch href="./" passHref>
                <Menu.Item name="home">
                  <Icon name="home" size="large" />
                </Menu.Item>
              </Link>
              <Link href={{ pathname: "/portfolio" }} passHref>
                <Menu.Item name="portfolio">
                  <Icon name="folder open outline" size="large" />
                </Menu.Item>
              </Link>
              <Link href={{ pathname: "/about" }} passHref>
                <Menu.Item name="about">
                  <Icon name="user outline" size="large" />
                </Menu.Item>
              </Link>
              <Link href={{ pathname: "/resume" }} passHref>
                <Menu.Item name="resume">
                  <Icon name="file text outline" size="large" />
                </Menu.Item>
              </Link>
              {/* <Link href={{ pathname: "/contact" }} passHref>
                <Menu.Item name="contact" link>
                  {<Icon name="mail outline" size="large" />}
                </Menu.Item>
              </Link> */}
            </Sidebar>
            <Sidebar.Pusher width="very thin">
              <Menu
                borderless
                fluid
                icon
                style={{ border: 0, borderRadius: 0 }}
              >
                <Menu.Menu position="left">
                  <Menu.Item
                    name="mobile-home"
                    onClick={() => {
                      this.toggleVisibility();
                    }}
                  >
                    <Icon name="sidebar" size="large" link />
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
      </div>
    );
  }
}

TopMenu.prototypes = {
  currentPage: PropTypes.string
};
