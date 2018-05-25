import React, { Component } from "react";
import {
  Modal,
  Header,
  Segment,
  Grid,
  Image,
  Button,
  List,
  Icon,
  Input,
  Menu,
  Container
} from "semantic-ui-react";
import Link from "next/link";
import { TopMenu } from "./components/menu";
import { BottomMenu } from "./components/bottom_menu";
import { About_instagram } from "./components/about/about_instagram";
import { About_photos } from "./components/about/about_photos";
import { About_resume } from "./components/about/about_resume";

export default class About extends Component {
  static async getInitialProps({ pathname, query }) {
    return { query };
  }

  render() {
    return (
      <div>
        <style>{`
          html, body {
            background: #fff;
          }
        `}</style>
        <TopMenu />

        <Image
          src="/static/images/max-van-den-oetelaar-601242-unsplash.jpg"
          fluid
          rounded={true}
          bordered
        />
        <Header as="h4" textAlign="center">
          Discover more about me and my personhood
        </Header>
        <Header as="h1" textAlign="center">
          About me
        </Header>

        <div>
          <Container>
            {/* Fun fact about myself*/}
            <Grid>
              <Header as="h2" textAlign="center">
                <Icon name="student" />
                <Header.Content>Funfacts about myself</Header.Content>
              </Header>
              <Image src="https://react.semantic-ui.com/assets/images/wireframe/paragraph.png" />
            </Grid>
          </Container>
        </div>

        <div
          style={{
            padding: "150 10 10 100",
            border: 1
          }}
        >
          <Container
            style={{
              marginTop: 150,
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 80,
              border: 1
            }}
          >
                    </Container>
        </div>
            {/* Some photos of Canada and nature */}
            <About_photos />

        <div
          style={{
            marginTop: 150,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 100,
            border: 1
          }}
        >
          <Container>
            {/* Understand who I am as a person */}
            <Header as="h2" textAlign="center">
              <Icon name="smile" />
              <Header.Content>Understand who I am as a person</Header.Content>
            </Header>
            <Image src="https://react.semantic-ui.com/assets/images/wireframe/paragraph.png" />
            <p>
              Talkabout what is the path i chose, why Javascript <br /> Talk
              about what is my passion and what i want to do moving forward
            </p>
          </Container>
        </div>

        {/* Instagram Feed */}
        <About_instagram />

        {/* Resume segment */}
        <About_resume />

        <BottomMenu />
      </div>
    );
  }
}
