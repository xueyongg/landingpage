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
import { Clock } from "./clock";
// import '../static/semantic/out/semantic.min.css';

export class BottomMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  static async getInitialprops({}) {
    return activeLink;
  }
  render() {
    const { activeItem } = this.state;
    let menuStyle = {
      marginTop: 0,
      marginRight: 10,
      marginBottom: 0,
      marginLeft: 10,
      paddingTop: 6.18,
      paddingRight: 0,
      paddingBottom: 6.18,
      paddingLeft: 0,
      textColor: "white"
    };

    return (
      <div>
        {/* Footnote */}
        <Segment
          inverted
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
          vertical
        >
          <Container textAlign="center">
            <Grid columns={2} divided stackable inverted>
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as="h4" content="Site Map" />
                  <List link inverted>
                    <List.Item as="a">
                      <Link href="/" passHref>
                        <p>Home</p>
                      </Link>
                    </List.Item>
                    <List.Item as="a">
                      <Link href="/about" passHref>
                        <p>About</p>
                      </Link>
                    </List.Item>
                    <List.Item as="a">
                      <Link href="/portfolio" passHref>
                        <p>Portfolio</p>
                      </Link>
                    </List.Item>
                    <List.Item as="a">
                      <Link href="/resume" passHref>
                        <p>Resume</p>
                      </Link>
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as="h4" content="Footer Header" />
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider inverted section />
            <Image
              src="../../static/images/tumblr_nttd5mxlym1rjoj3ho2_r1_500.jpg"
              centered
              size="mini"
              circular
            />
            <List horizontal inverted divided link>
              {/* <List.Item>Site Map</List.Item> */}
              <List.Item>
                <Link href="/contact" passHref>
                  <a>Contact Us</a>
                </Link>
              </List.Item>
              {/* <List.Item as='a' href='#'>Terms and Conditions</List.Item> */}
              <List.Item>
                <Link href="/contact" passHref>
                  <a>Privacy Policy</a>
                </Link>
              </List.Item>
            </List>
            <br />
            <List horizontal inverted link>
              <List.Item as="a" href="#">
                <Icon name="github" />
              </List.Item>
              <List.Item as="a" href="#">
                <Icon name="linkedin" />
              </List.Item>
              <List.Item as="a" href="#">
                <Icon name="tumblr" />
              </List.Item>
              <List.Item as="a" href="#">
                <Icon name="facebook f" />
              </List.Item>
              <List.Item as="a" href="#">
                <Icon name="twitter" />
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}
