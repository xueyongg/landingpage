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
  Dropdown
} from "semantic-ui-react";
import Link from "next/link";
import { Clock } from "./clock";
// import '../static/semantic/out/semantic.min.css';

export class TopMenu extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false
  };

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
    console.log("stickTopMenu: menufixed is true");
  };

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => {
    this.setState({ menuFixed: false });
    console.log("unStickTopMenu: menufixed is false");
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  static async getInitialprops({}) {
    return activeLink;
  }
  render() {
    const { menuFixed, overlayFixed, overlayRect, activeItem } = this.state;
    let menuStyle = {
      border: "none",
      borderRadius: 0,
      boxShadow: "none",
      marginBottom: "1em",
      marginTop: "1em",
      transition: "box-shadow 0.5s ease, padding 0.5s ease"

      // marginTop: '1em',
      // borderRadius: 0,
      // boxShadow: 'none',
      // transition: 'box-shadow 0.5s ease, padding 0.5s ease',

      // marginRight: 0,
      // marginBottom: 0,
      // marginLeft: 0,
      // paddingTop: 6.18,
      // paddingRight: 0,
      // paddingBottom: 6.18,
      // paddingLeft: 0,
      // border: 'none',
    };

    const fixedMenuStyle = {
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
    };

    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Menu
          borderless
          fixed={menuFixed ? "top" : ""}
          style={menuFixed ? fixedMenuStyle : menuStyle}
          stackable
        >
          <Container text>
            <Menu.Item>
              <Link href="/" passHref>
                <Image
                  size="mini"
                  src="https://78.media.tumblr.com/81fcb39644fef1ff91fd5db001a86743/tumblr_nttd5mxlym1rjoj3ho2_r1_500.jpg"
                  circular
                />
              </Link>
            </Menu.Item>

            <Menu.Menu position="right">
              <Link href={{ pathname: "/" }} passHref>
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                >
                  <p>Home</p>
                </Menu.Item>
              </Link>
              <Link href={{ pathname: "/portfolio" }} passHref>
                <Menu.Item
                  name="portfolio"
                  active={activeItem === "portfolio"}
                  onClick={this.handleItemClick}
                >
                  <p>Portfolio</p>
                </Menu.Item>
              </Link>
              <Link href={{ pathname: "/about" }} passHref>
                <Menu.Item
                  name="about"
                  active={activeItem === "about"}
                  onClick={this.handleItemClick}
                >
                  <p>About</p>
                </Menu.Item>
              </Link>
              <Link href={{ pathname: "/resume" }} passHref>
                <Menu.Item
                  name="resume"
                  active={activeItem === "resume"}
                  onClick={this.handleItemClick}
                >
                  <p>Resume</p>
                </Menu.Item>
              </Link>
              <Link href={{ pathname: "/contact" }} passHref>
                <Menu.Item
                  name="contact"
                  active={activeItem === "contact"}
                  onClick={this.handleItemClick}
                >
                  <p>Contact</p>
                </Menu.Item>
              </Link>
            </Menu.Menu>
          </Container>
        </Menu>
      </Visibility>
    );
  }
}
