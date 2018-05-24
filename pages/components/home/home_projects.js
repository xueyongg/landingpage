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
  Dimmer
} from "semantic-ui-react";
import Link from "next/link";
const moment = require("moment");

export class Home_projects extends Component {
  static async getInitialProps({ query }) {
    // console.log(query);
    return true;
  }
  state = {};
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
    const { active, active1, active2, active3 } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          Title
        </Header>

        <Button primary>Add</Button>
        <Button>View</Button>
      </div>
    );

    return (
      <div>
        <div style={{ maxHeight: 750, height: 500, backgroundColor: "grey" }}>
          {/* Projects */}
          <Segment vertical>
            <Header as="h2" textAlign="center" style={{ marginTop: 50 }}>
              My latest projects
            </Header>
            <Container
              style={{
                marginTop: 0,
                marginLeft: 10,
                marginRight: 10,
                border: 1
              }}
            >
              <Grid stackable>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <Dimmer.Dimmable
                      as={Image}
                      dimmed={active}
                      dimmer={{ active, content }}
                      onMouseEnter={e => {
                        this.handleShow(1);
                      }}
                      onMouseLeave={e => {
                        this.handleHide(1);
                      }}
                      src="https://react.semantic-ui.com/assets/images/wireframe/image.png"
                    />
                    {/* <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" /> */}
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/image.png" />
                  </Grid.Column>
                </Grid.Row>
                <Link href="/portfolio" passHref>
                  <Button
                    size="huge"
                    color="black"
                    basic
                    icon
                    style={{
                      padding: "21px 34px",
                      textTransform: "uppercase",
                      fontSize: "15px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      letterSpacing: ".1em",
                      fontFamily: "proxima-nova"
                    }}
                  >
                    <Icon name="clone" />
                    View more projects
                  </Button>
                </Link>
              </Grid>
            </Container>
          </Segment>
        </div>
      </div>
    );
  }
}
