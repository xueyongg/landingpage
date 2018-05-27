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
import { Home_contact } from "./home/home_contact";

export class BottomMenu extends Component {
  state = {};

  componentDidMount() {
    console.log(this.props);
    this.setState({
      currentPage: this.props.currentPage
    });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  static async getInitialprops({}) {
    return activeLink;
  }
  render() {
    const { activeItem, currentPage } = this.state;

    return (
      <div>
        {/* Footnote */}

        {currentPage !== "contact" ? <Home_contact /> : ""}

        <Segment
          inverted
          style={{
            margin: "0em 0em 0em",
            padding: "5em 0em",
            position: "relative"
          }}
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
                    <List.Item as="a">
                      <Link href="/contact" passHref>
                        <p>Contact</p>
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
              size="mini"
              centered
              circular
              style={{ marginBottom: 10 }}
            />
            {/* <List horizontal inverted divided link>
              <List.Item>Site Map</List.Item>
              <List.Item>
                <Link href="/contact" passHref>
                  <a>Contact Us</a>
                </Link>
              </List.Item>
              <List.Item as='a' href='#'>Terms and Conditions</List.Item>
              <List.Item>
                <Link href="/contact" passHref>
                  <a>Privacy Policy</a>
                </Link>
              </List.Item>
            </List> */}
            <br />
            <List horizontal inverted link>
              <List.Item as="a" href="https://github.com/xueyongg">
                <Icon name="github" size="large" />
              </List.Item>
              <List.Item as="a" href="#">
                <Icon name="linkedin" size="large" />
              </List.Item>
              {/* <List.Item as="a" href="">
                <Icon name="tumblr" size="large" />
              </List.Item> */}
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
