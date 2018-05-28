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

export default class About_funfact extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: "8em 2em" }}>
          <Grid textAlign="center">
            <Grid.Row>
              <Grid.Column width={5}>
                <Header as="h2">
                  <Icon name="student" />
                  <Header.Content>Funfacts about myself</Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column width={11}>
                <Image src="https://react.semantic-ui.com/assets/images/wireframe/paragraph.png" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
