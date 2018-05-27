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

export class Home_about extends Component {
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
    hover: false,
    mobile: false
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
      active,
      active1,
      active2,
      active3,
      hover,
      normalStyle,
      mobile
    } = this.state;

    return (
      <div>
        <div>
          {/* About */}
          <Container style={{ backgroundColor: "#ffff", padding: "96px 48px" }}>
            <Header
              as="h2"
              textAlign="center"
              content="Me as a person"
              style={{ textTransform: "uppercase" }}
            />
            <Responsive
              minWidth={Responsive.onlyTablet.minWidth}
              maxWidth={Responsive.onlyWidescreen.maxWidth}
            >
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={5}>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Responsive>

            <Responsive
              minWidth={150}
              maxWidth={Responsive.onlyMobile.maxWidth}
            >
              <Grid style={{ padding: 0 }}>
                <Grid.Row columns={5}>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Responsive>

            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center" />
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}
