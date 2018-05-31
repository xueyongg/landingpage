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
  Divider
} from "semantic-ui-react";
import Link from "next/link";
import Page_contact from "./page/page_contact";
const data = require("../../static/assets/data.json");

export default class BottomMenu extends Component {
  state = {
    footerStyle: {
      fontWeight: 400,
      fontFamily: "adobe-garamond-pro",
      fontStyle: "normal",
      lineHeight: "1em",
      fontSize: 25
    },
    currentPage: ""
  };

  componentDidMount() {
    // console.log(this.props);
    let currentState = this.state;
    currentState.currentPage = this.props.currentPage;
    this.setState(currentState);
  }
  render() {
    const { activeItem, currentPage, footerStyle } = this.state;
    let bottom_menu = data.bottom_menu;
    return (
      <div>
        {/* Footnote */}
        {currentPage !== "contact" ? <Page_contact /> : ""}

        <Segment
          inverted
          style={{
            padding: "2em 0em 2em 0em",
            position: "relative"
          }}
          vertical
        >
          <Container textAlign="center">
            <p style={{ marginBottom: "0.025em", fontColor: "white" }}>
              {bottom_menu.verse}
            </p>
            <br />
            <List horizontal inverted link>
              <List.Item as="a" href="https://github.com/xueyongg">
                <Icon name="github" size="large" />
              </List.Item>
              <List.Item
                as="a"
                href="https://www.linkedin.com/in/xueyongjoshua/"
              >
                <Icon name="linkedin" size="large" />
              </List.Item>
              <List.Item
                as="a"
                href="https://www.instagram.com/xueyongg/?hl=en"
              >
                <Icon name="instagram" size="large" />
              </List.Item>
              <List.Item as="a" href="https://www.facebook.com/joshuaphua">
                <Icon name="facebook f" size="large" />
              </List.Item>
              <List.Item as="a" href="https://www.twitter/soGonnaOwnYou">
                <Icon name="twitter" size="large" />
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}
