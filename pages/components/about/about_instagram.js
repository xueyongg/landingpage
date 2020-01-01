import React, { Component } from "react";
import {
  Header,
  Grid,
  Image,
  Container,
  Button,
  Icon,
  Responsive
} from "semantic-ui-react";
import Link from "next/link";

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
    let instagram = data.about.instagram;
    const hoverStyle = {
      ...normalStyle,
      color: "white",
      backgroundColor: "black"
    };
    return (
      <div>
        <Container
          style={{
            padding: "2em 0em 2em 0em",
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
            maxWidth={
              Responsive.onlyWidescreen &&
              Responsive.onlyWidescreen.maxWidth
                ? Responsive.onlyWidescreen.maxWidth
                : 2500
            }
            minWidth={
              Responsive.onlyTablet.minWidth
                ? Responsive.onlyTablet.minWidth
                : 500
            }
          >
            {/* <About_instagram_computer /> */}
            <Grid textAlign="center">
              <Grid.Row columns={4}>
                {instagram.map((element, i) => {
                  let { image } = element;

                  if (Number(i) < 4) {
                    return (
                      <Grid.Column key={i}>
                        <div className="figure">
                          <div className="effect-lily">
                            <Image
                              alt={"/static/images/about/instagram/" + image}
                              as="a"
                              href={"https://www.instagram.com/whatthexue/?hl=en"}
                              src={"/static/images/about/instagram/" + image}
                            />
                          </div>
                        </div>
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
              <Grid.Row columns={4}>
                {instagram.map((element, i) => {
                  let { image } = element;
                  if (i > 3) {
                    return (
                      <Grid.Column key={i}>
                        <div className="figure">
                          <div className="effect-lily">
                            <Image
                              alt={"/static/images/about/instagram/" + image}
                              as="a"
                              href={"https://www.instagram.com/whatthexue/?hl=en"}
                              src={"/static/images/about/instagram/" + image}
                            />
                          </div>
                        </div>
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
            </Grid>
          </Responsive>

          {/* mobile view */}
          <Responsive maxWidth={Responsive.onlyMobile.maxWidth} minWidth={150}>
            <Grid textAlign="center">
              {/* <About_instagram_mobile /> */}
              <Grid.Row columns={2}>
                {instagram.map((element, i) => {
                  let { image } = element;
                  if (Number(i) < 2) {
                    return (
                      <Grid.Column key={i}>
                        <Image
                          alt={"/static/images/about/instagram/" + image}
                          as="a"
                          href={"https://www.instagram.com/whatthexue/?hl=en"}
                          src={"/static/images/about/instagram/" + image}
                        />
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
              <Grid.Row columns={2}>
                {instagram.map((element, i) => {
                  let { image } = element;
                  if (1 < Number(i) && Number(i) < 4) {
                    return (
                      <Grid.Column key={i}>
                        <Image
                          alt={"/static/images/about/instagram/" + image}
                          as="a"
                          href={"https://www.instagram.com/whatthexue/?hl=en"}
                          src={"/static/images/about/instagram/" + image}
                        />
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
              <Grid.Row columns={2}>
                {instagram.map((element, i) => {
                  let { image } = element;
                  if (3 < Number(i) && Number(i) < 6) {
                    return (
                      <Grid.Column key={i}>
                        <Image
                          alt={"/static/images/about/instagram/" + image}
                          as="a"
                          href={"https://www.instagram.com/whatthexue/?hl=en"}
                          src={"/static/images/about/instagram/" + image}
                        />
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
              <Grid.Row columns={2}>
                {instagram.map((element, i) => {
                  let { image } = element;
                  if (5 < Number(i) && Number(i) < 8) {
                    return (
                      <Grid.Column key={i}>
                        <Image
                          alt={"/static/images/about/instagram/" + image}
                          as="a"
                          href={"https://www.instagram.com/whatthexue/?hl=en"}
                          src={"/static/images/about/instagram/" + image}
                        />
                      </Grid.Column>
                    );
                  }
                })}
              </Grid.Row>
              <Grid.Row columns={2}>
                {instagram.map((element, i) => {
                  let { image } = element;
                  if (7 < Number(i) && Number(i) < 10) {
                    return (
                      <Grid.Column key={i}>
                        <div className="figure">
                          <div className="effect-lily">
                            <Image
                              alt={"/static/images/about/instagram/" + image}
                              as="a"
                              href={"https://www.instagram.com/whatthexue/?hl=en"}
                              src={"/static/images/about/instagram/" + image}
                            />
                          </div>
                        </div>
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
            style={{ padding: "0em 0em 6em 0em", margin: 0 }}
            textAlign="center"
          >
            <Grid.Column>
              <Link
                href="https://www.instagram.com/whatthexue/?hl=en"
                passHref
                prefetch
              >
                <Button
                  icon
                  onMouseOut={() => {
                    this.offHover();
                  }}
                  onMouseOver={() => {
                    this.onHover();
                  }}
                  size="huge"
                  style={hover ? hoverStyle : normalStyle}
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
