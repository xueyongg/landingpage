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
  static async getInitialProps({ pathname, query }) {
    return { query };
  }

  render() {
    return (
      <div>
        <Container>
          {/* What I've done and what I can do */}
          <Header as="h2" textAlign="left" style={{ margin: "3em 0em"}} >
            <Icon name="vcard outline" />
            <Header.Content>What I've done and what I can do</Header.Content>
          </Header>
          <p>Link to resume</p>
        </Container>
      </div>
    );
  }
}
