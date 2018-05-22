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
  Image
} from "semantic-ui-react";
import Link from "next/link";
import { TopMenu } from "./menu";

export default class Portfolio extends Component {
  static async getInitialProps({ pathname, query }) {
    return { query };
  }

  render() {
    return (
      <div>
        <TopMenu />
        <Segment>
          <Header as="h3">Friends page</Header>
          <Container
            style={{ marginTop: 0, marginLeft: 10, marginRight: 10, border: 1 }}
          >
            <Header as="h1">Friends List</Header>
            <List>
              <List.Item>
                <Image avatar src="/assets/images/avatar/small/rachel.png" />
                <List.Content>
                  <List.Header as="a">Rachel</List.Header>
                  <List.Description>
                    Last seen watching{" "}
                    <a>
                      <b>Arrested Development</b>
                    </a>{" "}
                    just now.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src="/assets/images/avatar/small/lindsay.png" />
                <List.Content>
                  <List.Header as="a">Lindsay</List.Header>
                  <List.Description>
                    Last seen watching{" "}
                    <a>
                      <b>Bob's Burgers</b>
                    </a>{" "}
                    10 hours ago.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src="/assets/images/avatar/small/matthew.png" />
                <List.Content>
                  <List.Header as="a">Matthew</List.Header>
                  <List.Description>
                    Last seen watching{" "}
                    <a>
                      <b>The Godfather Part 2</b>
                    </a>{" "}
                    yesterday.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src="/assets/images/avatar/small/jenny.jpg" />
                <List.Content>
                  <List.Header as="a">Jenny Hess</List.Header>
                  <List.Description>
                    Last seen watching{" "}
                    <a>
                      <b>Twin Peaks</b>
                    </a>{" "}
                    3 days ago.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src="/assets/images/avatar/small/veronika.jpg" />
                <List.Content>
                  <List.Header as="a">Veronika Ossi</List.Header>
                  <List.Description>
                    Has not watched anything recently
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}
