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

export default class About_understand extends Component {

  render() {
    return (
      <div>
        <Container style={{ padding: "8em 2em" }}>
          <Header as="h2">
            <Icon name="smile" />
            <Header.Content>Understand who I am as a person</Header.Content>
          </Header>
          <Grid textAlign="left">
            <Image src="https://react.semantic-ui.com/assets/images/wireframe/paragraph.png" />
            <p>
              Talk about what is the path i chose, why Javascript <br /> Talk
              about what is my passion and what i want to do moving forward
            </p>
          </Grid>
        </Container>
      </div>
    );
  }
}
