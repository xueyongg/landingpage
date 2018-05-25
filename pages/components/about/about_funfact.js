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

export class About_funfact extends Component {
  static async getInitialProps({ pathname, query }) {
    return { query };
  }

  render() {
    return (
      <div>
        <Container style={{ padding: "8em 2em" }}>
          <Grid textAlign="center">
            <Header as="h2">
              <Icon name="student" />
              <Header.Content>Funfacts about myself</Header.Content>
            </Header>
            <Image src="https://react.semantic-ui.com/assets/images/wireframe/paragraph.png" />
          </Grid>
        </Container>
      </div>
    );
  }
}
