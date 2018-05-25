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
  Menu
} from "semantic-ui-react";
import Link from "next/link";

export class About_resume extends Component {
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
    const { hover, normalStyle } = this.state;
    return (
      <div>
        <Container>
          <Grid textAlign="center">
            {/* What I've done and what I can do */}
            <Header as="h2" style={{ margin: "3em 0em" }}>
              <Icon name="vcard outline" />
              <Header.Content>What I've done and what I can do</Header.Content>
            </Header>

            <Grid.Row>
              <p>Link to resume</p>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Link href="/resume" passHref>
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
                    <Icon name="clone" />
                    View my resume
                  </Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
