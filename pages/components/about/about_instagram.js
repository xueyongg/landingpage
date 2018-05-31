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
  Responsive
} from "semantic-ui-react";
import Link from "next/link";
import About_instagram_computer from "./about_instagram_comp";
import About_instagram_mobile from "./about_instagram_mobile";
const data = require("../../../static/assets/data.json");

export default class About_instagram extends Component {
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
      backgroundColor: "#ffff",
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

  render() {
    let { hover, normalStyle } = this.state;
    let about = data.about;
    let instagram = data.about.instagram;
    return (
      <div>
        <Container
          style={{
            padding: "1em 0em 2em 0em",
            margin: 0,
            width: "100%",
            backgroundColor: "#fafafa"
          }}
        >
          <Grid textAlign="center">
            <Grid.Row>
              <Header as="h2">
                <Icon name="instagram" />
                <Header.Content>My Instagram</Header.Content>
              </Header>
            </Grid.Row>
          </Grid>
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
            {/* <About_instagram_computer /> */}
            <Grid textAlign="center">
              <Grid.Row columns={4}>
                {instagram.map((element, i) => {
                  if (Number(i) < 4) {
                    return (
                      <Grid.Column key={i}>
                        <Image
                          src={"/static/images/about/instagram/" + element}
                          alt={"/static/images/about/instagram/" + element}
                        />
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
              <Grid.Row columns={4}>
                {instagram.map((element, i) => {
                  if (i > 3) {
                    return (
                      <Grid.Column key={i}>
                        <Image
                          src={"/static/images/about/instagram/" + element}
                          alt={"/static/images/about/instagram/" + element}
                        />
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
            </Grid>
          </Responsive>

          {/* mobile view */}
          <Responsive minWidth={150} maxWidth={Responsive.onlyMobile.maxWidth}>
            <Grid textAlign="center">
              {/* <About_instagram_mobile /> */}
              <Grid.Row columns={2}>
                {instagram.map((element, i) => {
                  if (Number(i) < 2) {
                    return (
                      <Grid.Column key={i}>
                        <Image
                          size="big"
                          src={"/static/images/about/instagram/" + element}
                          alt={"/static/images/about/instagram/" + element}
                        />
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
              <Grid.Row columns={2}>
                {instagram.map((element, i) => {
                  if (1 < Number(i) && Number(i) < 4) {
                    return (
                      <Grid.Column key={i}>
                        <Image
                          size="big"
                          src={"/static/images/about/instagram/" + element}
                          alt={"/static/images/about/instagram/" + element}
                        />
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
              <Grid.Row columns={2}>
                {instagram.map((element, i) => {
                  if (3 < Number(i) && Number(i) < 6) {
                    return (
                      <Grid.Column key={i}>
                        <Image
                          size="big"
                          src={"/static/images/about/instagram/" + element}
                          alt={"/static/images/about/instagram/" + element}
                        />
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
              <Grid.Row columns={2}>
                {instagram.map((element, i) => {
                  if (5 < Number(i) && Number(i) < 8) {
                    return (
                      <Grid.Column key={i}>
                        <Image
                          size="big"
                          src={"/static/images/about/instagram/" + element}
                          alt={"/static/images/about/instagram/" + element}
                        />
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
              <Grid.Row columns={2}>
                {instagram.map((element, i) => {
                  if (7 < Number(i) && Number(i) < 10) {
                    return (
                      <Grid.Column key={i}>
                        <Image
                          size="big"
                          src={"/static/images/about/instagram/" + element}
                          alt={"/static/images/about/instagram/" + element}
                        />
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
            </Grid>
          </Responsive>
        </Container>
        <Grid
          style={{
            backgroundColor: "#fafafa"
          }}
        >
          <Grid.Row
            textAlign="center"
            style={{ padding: "0em 0em 6em 0em", margin: 0 }}
          >
            <Grid.Column>
              <Link
                prefetch
                href="https://www.instagram.com/xueyongg/?hl=en"
                passHref
              >
                <Button
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
                  <Icon name="instagram" />
                  Visit my Instagram
                </Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
